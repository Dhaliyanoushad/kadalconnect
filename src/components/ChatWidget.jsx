import React, { useState, useRef, useEffect } from "react";
import "./ChatWidget.css";

const API_URL = "http://localhost:5001/chat";

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) scrollToBottom();
  }, [messages, open]);

  function scrollToBottom() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text) return;

    const userMsg = { from: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Backend error: ${res.status} ${txt}`);
      }

      const data = await res.json();
      const replyText = data && typeof data.reply === "string" ? data.reply : "(no reply)";
      setMessages((m) => [...m, { from: "bot", text: replyText }]);
    } catch (err) {
      setError(err.message || "Network error");
      setMessages((m) => [...m, { from: "bot", text: "Sorry — I couldn't reach the server." }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className={`chat-widget ${open ? "open" : ""}`}>
      <div className="chat-toggle" onClick={() => setOpen((v) => !v)} aria-label="Open chat">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      <div className="chat-panel" role="dialog" aria-hidden={!open}>
        <div className="chat-header">
          <div className="chat-title">Assistant</div>
          <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
        </div>

        <div className="chat-body">
          <div className="messages">
            {messages.length === 0 && <div className="empty">Hi — ask me anything.</div>}
            {messages.map((m, i) => (
              <div key={i} className={`message ${m.from}`}>
                <div className="bubble">{m.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="chat-footer">
          {error && <div className="error">{error}</div>}
          <textarea
            className="chat-input"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            rows={1}
          />
          <div className="chat-actions">
            <button className="send-btn" onClick={sendMessage} disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWidget;
