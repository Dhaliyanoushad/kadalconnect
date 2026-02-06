import { useState } from 'react';

const products = [
  // Handicrafts & Decor
  { id: 1, title: "Seashell Ornaments", price: "₹450", category: "Handicrafts & Decor", img: "https://i.pinimg.com/1200x/67/e2/e1/67e2e12b1fe78e0716471e3660dd7e1a.jpg" },
  { id: 2, title: "Coconut Shell Art", price: "₹550", category: "Handicrafts & Decor", img: "https://i.pinimg.com/1200x/c7/39/24/c7392421ad06052cc8feacbf2fcf08f8.jpg" },
  { id: 3, title: "Shell Lampshade", price: "₹4,500", category: "Handicrafts & Decor", img: "https://i.pinimg.com/736x/58/76/3e/58763ed5d73f432ccbbd2ea4ec21bfba.jpg" },
  { id: 4, title: "Hand-Carved Coastal Art", price: "₹6,800", category: "Handicrafts & Decor", img: "https://i.pinimg.com/1200x/0b/a3/5f/0ba35fef564c58ee011ba271787cea58.jpg" },
  { id: 5, title: "Miniature Fishing Boat", price: "₹2,400", category: "Handicrafts & Decor", img: "https://i.pinimg.com/736x/3f/ea/c1/3feac1d23bd516f4d115f6250bde71d5.jpg" },
  { id: 6, title: "Maritime Charms", price: "₹300", category: "Handicrafts & Decor", img: "https://i.pinimg.com/736x/b9/09/b6/b909b6aaa50ff8a33ca19f0dbd022103.jpg" },
  
  // Natural Fiber & Craftwork
  { id: 7, title: "Coir Rope Wall Hanging", price: "₹1,200", category: "Natural Fiber & Craftwork", img: "https://i.pinimg.com/1200x/74/00/88/7400885697f05188140f97e30ae036b8.jpg" },
 // Natural Fiber & Craftwork
{ 
  id: 8, 
  title: "Fishing-Net Decor", 
  price: "₹850", 
  category: "Natural Fiber & Craftwork", 
  img: "https://i.pinimg.com/736x/49/eb/32/49eb32979b350c6d0155094cc102a854.jpg" 
},
{ 
  id: 9, 
  title: "Traditional Bamboo Basket", 
  price: "₹850", 
  category: "Natural Fiber & Craftwork", 
  img: "https://i.pinimg.com/1200x/d1/e3/28/d1e328e4decea649aaeafd994b12cde3.jpg" 
},

// Seafood & Preserved Foods
{ 
  id: 10, 
  title: "Traditional Fish Pickle", 
  price: "₹350", 
  category: "Seafood & Preserved Foods", 
  img: "https://i.pinimg.com/1200x/a3/c1/3f/a3c13fcf213bc2009022b9128a5767bb.jpg" 
},
{ 
  id: 11, 
  title: "Sun-Dried King Fish", 
  price: "₹950", 
  category: "Seafood & Preserved Foods", 
  img: "https://i.pinimg.com/1200x/7c/ae/85/7cae850ca70814b661c1213753833afd.jpg" 
},
{ 
  id: 12, 
  title: "Salted Scampi", 
  price: "₹1,100", 
  category: "Seafood & Preserved Foods", 
  img: "https://i.pinimg.com/1200x/53/02/62/5302626751abd40843420e84509b0cc3.jpg" 
},

// Spices & Coastal Essentials
{ 
  id: 13, 
  title: "Fish Masala Mix", 
  price: "₹180", 
  category: "Spices & Coastal Essentials", 
  img: "https://i.pinimg.com/736x/30/5c/c0/305cc0d33cd184545314c5cfc1b85c77.jpg" 
},
{ 
  id: 14, 
  title: "Natural Sea-Salt", 
  price: "₹120", 
  category: "Spices & Coastal Essentials", 
  img: "https://i.pinimg.com/736x/7b/4a/52/7b4a52fb0188b274ef0745321441547c.jpg" 
},

// Traditional Coastal Foods
{ 
  id: 15, 
  title: "Homemade Tapioca Chips", 
  price: "₹250", 
  category: "Traditional Coastal Foods", 
  img: "https://i.pinimg.com/736x/f7/90/b1/f790b1a88332fe19c74d55db99087b0c.jpg" 
},

];

const categories = [
  "All Items",
  "Handicrafts & Decor",
  "Natural Fiber & Craftwork",
  "Seafood & Preserved Foods",
  "Spices & Coastal Essentials",
  "Traditional Coastal Foods"
];

function Marketplace() {
  const [activeCategory, setActiveCategory] = useState("All Items");

  const filteredProducts = activeCategory === "All Items" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F1E8] pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.4em] text-[#548C92]/60 mb-4 block text-center md:text-left">
            The Exchange
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-[#548C92] uppercase tracking-tighter leading-none text-center md:text-left">
            COASTAL <br /> <span className="text-[#AB9072]">MARKETPLACE</span>
          </h1>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center md:justify-start">
          {categories.map((filter) => (
            <button 
              key={filter} 
              onClick={() => setActiveCategory(filter)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg active:scale-95 flex items-center gap-2 ${
                activeCategory === filter 
                ? "bg-[#285260] text-white" 
                : "bg-white text-[#285260] hover:bg-[#B4D7D8]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-[#AB9072]/10 transition-all duration-500 hover:-translate-y-3">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-6 left-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#F5F1E8] bg-[#285260]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-1">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-8 bg-white relative">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-2xl font-black text-[#285260] uppercase tracking-tight leading-tight max-w-[70%]">
                    {product.title}
                  </h3>
                  <span className="text-2xl font-black text-[#548C92]">{product.price}</span>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-[#7fb3c8] text-white rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#285260] transition-colors shadow-lg active:scale-95">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
