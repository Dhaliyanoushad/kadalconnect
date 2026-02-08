import React, { useState, useRef, useEffect } from "react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // {from: 'user'|'bot'|'system', text}
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    // scroll to bottom when messages change
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, open]);

  const toggleOpen = () => {
    setOpen((v) => !v);
    setError(null);
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Server error: ${res.status} ${txt}`);
      }

      const data = await res.json();
      const reply = data && data.reply ? data.reply : "(no reply)";
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    } catch (err) {
      setError(err.message || "Network error");
      setMessages((m) => [
        ...m,
        { from: "system", text: "Failed to get response from server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed right-5 bottom-5 z-[9999] font-sans flex flex-col items-end">
      <div
        className={`w-[360px] max-w-[calc(100vw-48px)] h-[480px] bg-white rounded-xl shadow-[0_12px_40px_rgba(2,6,23,0.2)] overflow-hidden mb-3 flex flex-col origin-bottom-right transition-all duration-200 ease-out max-[480px]:w-[calc(100vw-28px)] max-[480px]:h-[60vh] ${
          open
            ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
            : "translate-y-5 scale-[0.92] opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-3 px-[14px] bg-gradient-to-r from-[var(--earth-silver)] to-white flex items-center justify-between border-b border-[var(--earth-slate)]/10">
          <div className="font-black uppercase tracking-widest text-xs text-[var(--earth-slate)]">
            KadalConnect Chat
          </div>
          <button
            className="bg-transparent border-none text-[var(--earth-slate)]/30 hover:text-[var(--earth-slate)] cursor-pointer p-1"
            onClick={toggleOpen}
            aria-label="Close chat"
          >
            {open ? "✕" : ""}
          </button>
        </div>

        <div
          className="flex-1 p-3 overflow-y-auto flex flex-col gap-[10px] bg-gradient-to-b from-white to-[#fbfdff]"
          ref={messagesRef}
        >
          {messages.length === 0 && (
            <div className="text-[#64748b] text-sm mt-2">
              Hi! Ask me anything about KadalConnect.
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[82%] inline-flex p-[10px_12px] text-sm ${
                m.from === "user"
                  ? "self-end bg-[var(--earth-copper)] text-white rounded-[12px_12px_6px_12px] shadow-lg shadow-[var(--earth-copper)]/10"
                  : m.from === "bot"
                    ? "self-start bg-[var(--earth-slate)]/5 text-[var(--earth-slate)] rounded-[12px_12px_12px_6px]"
                    : "self-center bg-transparent text-[#ef4444] text-[13px]"
              }`}
            >
              <div className="whitespace-pre-wrap break-words">{m.text}</div>
            </div>
          ))}

          {loading && (
            <div className="max-w-[82%] inline-flex self-start bg-[var(--earth-slate)]/5 text-[var(--earth-slate)] p-[10px_12px] rounded-[12px_12px_12px_6px] text-sm">
              <div className="whitespace-pre-wrap break-words italic opacity-50">
                Typing…
              </div>
            </div>
          )}

          {error && (
            <div className="text-[#b91c1c] text-[13px]">Error: {error}</div>
          )}
        </div>

        <form
          className="flex gap-2 p-[10px] border-t border-[#eef2f7] items-center"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <textarea
            className="flex-1 resize-none p-[10px_12px] rounded-[10px] border border-[var(--earth-slate)]/10 text-sm outline-none disabled:opacity-60 bg-[var(--earth-silver)]/20 focus:border-[var(--earth-copper)] transition-colors"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            aria-label="Chat input"
            disabled={!open || loading}
          />
          <button
            className="bg-[var(--earth-slate)] text-white border-none p-[8px_12px] rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-default hover:bg-[var(--earth-moss)] transition-colors"
            type="submit"
            disabled={loading || !input.trim()}
          >
            Send
          </button>
        </form>
      </div>

      <button
        className="floating-btn group relative flex items-center justify-center h-16 w-16 bg-[var(--earth-copper)] hover:bg-[var(--earth-moss)] text-white rounded-2xl shadow-2xl shadow-[var(--earth-slate)]/20 transition-all hover:scale-105 active:scale-95 border border-white/30"
        onClick={toggleOpen}
        aria-label="Open chat"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
