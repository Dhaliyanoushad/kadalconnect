import React, { useState, useRef, useEffect } from "react";
import "./ChatbotWidget.css";

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
      const res = await fetch("http://localhost:5001/chat", {
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
      setMessages((m) => [...m, { from: "system", text: "Failed to get response from server." }]);
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
    <div className="chatbot-root">
      <div className={`chatbot-panel ${open ? "open" : "closed"}`}>
        <div className="chatbot-header">
          <div className="chatbot-title">KadalConnect Chat</div>
          <button className="chatbot-close" onClick={toggleOpen} aria-label="Close chat">
            {open ? "✕" : ""}
          </button>
        </div>

        <div className="chatbot-body" ref={messagesRef}>
          {messages.length === 0 && (
            <div className="chatbot-empty">Hi! Ask me anything about KadalConnect.</div>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`chatbot-message ${m.from}`}>
              <div className="chatbot-message-text">{m.text}</div>
            </div>
          ))}

          {loading && (
            <div className="chatbot-message bot">
              <div className="chatbot-message-text">Typing…</div>
            </div>
          )}

          {error && <div className="chatbot-error">Error: {error}</div>}
        </div>

        <form
          className="chatbot-input-area"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <textarea
            className="chatbot-input"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            aria-label="Chat input"
            disabled={!open || loading}
          />
          <button className="chatbot-send" type="submit" disabled={loading || !input.trim()}>
            Send
          </button>
        </form>
      </div>

      <button className="chatbot-fab" onClick={toggleOpen} aria-label="Open chat">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
