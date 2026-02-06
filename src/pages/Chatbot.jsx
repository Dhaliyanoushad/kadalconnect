import { Link } from "react-router-dom";

const Chatbot = () => {
  return (
    <div className="min-h-screen bg-[#285260] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-[#B4D7D8] p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#285260] rounded-full flex items-center justify-center text-[#B4D7D8] font-bold text-xl">
                K
              </div>
              <div>
                <h2 className="text-[#285260] font-bold text-xl leading-tight">Coastal Guide</h2>
                <span className="text-[#285260]/60 text-xs font-bold uppercase tracking-widest">AI Assistant</span>
              </div>
            </div>
            <Link to="/" className="text-[#285260]/60 hover:text-[#285260] transition font-bold uppercase text-xs tracking-widest">
              Close
            </Link>
          </div>

          {/* Chat Window */}
          <div className="h-[500px] overflow-y-auto p-8 space-y-6 flex flex-col">
            <div className="bg-white/20 self-start p-4 rounded-2xl rounded-tl-none max-w-[80%] text-white">
              <p className="text-sm leading-relaxed">
                Hello! I am your KadalConnect guide. How can I help you explore our coastal communities today?
              </p>
            </div>
            
            <div className="bg-[#B4D7D8] self-end p-4 rounded-2xl rounded-tr-none max-w-[80%] text-[#285260]">
              <p className="text-sm font-medium leading-relaxed">
                Tell me more about the local fishing experiences in Kerala.
              </p>
            </div>

            <div className="bg-white/20 self-start p-4 rounded-2xl rounded-tl-none max-w-[80%] text-white">
              <p className="text-sm leading-relaxed">
                In Kerala, we offer authentic "Day with a Fisher" experiences. You can join local fishers like Ajas on their traditional boats, learn about sustainable net fishing, and enjoy a fresh meal prepared by the community. 
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-white/10 flex gap-4">
            <input 
              type="text" 
              placeholder="Ask anything about the coast..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#B4D7D8] transition"
            />
            <button className="bg-[#B4D7D8] text-[#285260] px-8 py-3 rounded-full font-bold hover:scale-105 transition active:scale-95 shadow-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
