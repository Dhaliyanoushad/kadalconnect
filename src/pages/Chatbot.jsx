import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Send, X, MessageSquare, Bot } from "lucide-react";

const Chatbot = () => {
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
  }, [messages]);

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
    <div className="min-h-screen bg-[var(--earth-silver)] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-2xl rounded-[40px] border border-[var(--earth-slate)]/10 overflow-hidden shadow-3xl">
          {/* Header */}
          <div className="bg-[var(--earth-slate)] p-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[var(--earth-copper)] rounded-2xl flex items-center justify-center text-[var(--earth-slate)] shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
                <Bot size={32} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-[var(--earth-silver)] font-black text-2xl uppercase tracking-tighter">Coastal Guide</h2>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[var(--earth-silver)]/60 text-[10px] font-black uppercase tracking-widest">AI Assistant Online</span>
                </div>
              </div>
            </div>
            <Link to="/" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-[var(--earth-silver)] transition-all">
              <X size={20} />
            </Link>
          </div>

          {/* Chat Window */}
          <div 
            ref={messagesRef}
            className="h-[550px] overflow-y-auto p-10 space-y-6 flex flex-col bg-gradient-to-b from-white/20 to-transparent"
          >
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full opacity-40 text-center">
                <MessageSquare size={48} className="mb-4 text-[var(--earth-slate)]" />
                <p className="text-[var(--earth-slate)] font-bold uppercase tracking-widest text-sm">
                  The waves are whispering...<br/>
                  Ask anything about the coast.
                </p>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[75%] p-5 rounded-3xl shadow-sm text-sm leading-relaxed ${
                  m.from === "user"
                    ? "self-end bg-[var(--earth-copper)] text-white rounded-tr-none shadow-lg shadow-[var(--earth-copper)]/10"
                    : m.from === "bot"
                    ? "self-start bg-[var(--earth-slate)]/5 text-[var(--earth-slate)] rounded-tl-none border border-[var(--earth-slate)]/5"
                    : "self-center bg-transparent text-red-500 font-bold uppercase text-[10px] tracking-widest"
                }`}
              >
                <div className="whitespace-pre-wrap break-words">
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="self-start bg-[var(--earth-slate)]/5 text-[var(--earth-slate)] p-5 rounded-3xl rounded-tl-none text-sm italic opacity-50 flex items-center gap-2">
                Thinking...
              </div>
            )}

            {error && (
              <div className="self-center bg-red-100 text-red-600 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-red-200">
                Connection Error: {error}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-8 border-t border-[var(--earth-slate)]/5 bg-white/20 flex gap-4 items-center">
            <textarea 
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask about fishing, marketplaces, or backwaters..." 
              className="flex-1 bg-white/40 border border-[var(--earth-slate)]/10 rounded-2xl px-8 py-5 text-[var(--earth-slate)] placeholder-[var(--earth-slate)]/30 focus:outline-none focus:border-[var(--earth-copper)] transition-all resize-none shadow-inner"
            />
            <button 
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-[var(--earth-copper)] text-white p-5 rounded-2xl font-black hover:bg-[var(--earth-moss)] transition-all active:scale-95 shadow-xl shadow-[var(--earth-copper)]/20 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
