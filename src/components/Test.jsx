import { useState } from 'react';
import { X, CreditCard, Minus, Plus, ShoppingBag } from 'lucide-react';

const products = [
// Handicrafts & Decor
{ id: 1, title: "Seashell Ornaments", price: 450, category: "Handicrafts & Decor", img: "https://i.pinimg.com/1200x/67/e2/e1/67e2e12b1fe78e0716471e3660dd7e1a.jpg" },
{ id: 2, title: "Coconut Shell Art", price: 550, category: "Handicrafts & Decor", img: "https://i.pinimg.com/1200x/c7/39/24/c7392421ad06052cc8feacbf2fcf08f8.jpg" },
{ id: 3, title: "Shell Lampshade", price: 4500, category: "Handicrafts & Decor", img: "https://i.pinimg.com/736x/58/76/3e/58763ed5d73f432ccbbd2ea4ec21bfba.jpg" },
{ id: 4, title: "Hand-Carved Coastal Art", price: 6800, category: "Handicrafts & Decor", img: "https://i.pinimg.com/1200x/0b/a3/5f/0ba35fef564c58ee011ba271787cea58.jpg" },
{ id: 5, title: "Miniature Fishing Boat", price: 2400, category: "Handicrafts & Decor", img: "https://i.pinimg.com/736x/3f/ea/c1/3feac1d23bd516f4d115f6250bde71d5.jpg" },
{ id: 6, title: "Maritime Charms", price: 300, category: "Handicrafts & Decor", img: "https://i.pinimg.com/736x/b9/09/b6/b909b6aaa50ff8a33ca19f0dbd022103.jpg" },

// Natural Fiber & Craftwork
{ id: 7, title: "Coir Rope Wall Hanging", price: 1200, category: "Natural Fiber & Craftwork", img: "https://i.pinimg.com/1200x/74/00/88/7400885697f05188140f97e30ae036b8.jpg" },
{ id: 8, title: "Fishing-Net Decor", price: 850, category: "Natural Fiber & Craftwork", img: "https://i.pinimg.com/736x/49/eb/32/49eb32979b350c6d0155094cc102a854.jpg" },
{ id: 9, title: "Traditional Bamboo Basket", price: 850, category: "Natural Fiber & Craftwork", img: "https://i.pinimg.com/1200x/d1/e3/28/d1e328e4decea649aaeafd994b12cde3.jpg" },

// Seafood & Preserved Foods
{ id: 10, title: "Traditional Fish Pickle", price: 350, category: "Seafood & Preserved Foods", img: "https://i.pinimg.com/1200x/a3/c1/3f/a3c13fcf213bc2009022b9128a5767bb.jpg" },
{ id: 11, title: "Sun-Dried King Fish", price: 950, category: "Seafood & Preserved Foods", img: "https://i.pinimg.com/1200x/7c/ae/85/7cae850ca70814b661c1213753833afd.jpg" },
{ id: 12, title: "Salted Scampi", price: 1100, category: "Seafood & Preserved Foods", img: "https://i.pinimg.com/1200x/53/02/62/5302626751abd40843420e84509b0cc3.jpg" },

// Spices & Coastal Essentials
{ id: 13, title: "Fish Masala Mix", price: 180, category: "Spices & Coastal Essentials", img: "https://i.pinimg.com/736x/30/5c/c0/305cc0d33cd184545314c5cfc1b85c77.jpg" },
{ id: 14, title: "Natural Sea-Salt", price: 120, category: "Spices & Coastal Essentials", img: "https://i.pinimg.com/736x/7b/4a/52/7b4a52fb0188b274ef0745321441547c.jpg" },

// Traditional Coastal Foods
{ id: 15, title: "Homemade Tapioca Chips", price: 250, category: "Traditional Coastal Foods", img: "https://i.pinimg.com/736x/f7/90/b1/f790b1a88332fe19c74d55db99087b0c.jpg" },
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
const [selectedProduct, setSelectedProduct] = useState(null);
const [formData, setFormData] = useState({
name: '',
address: '',
quantity: 1
});

const filteredProducts = activeCategory === "All Items"
? products
: products.filter(p => p.category === activeCategory);

const openModal = (product) => {
setSelectedProduct(product);
setFormData({ name: '', address: '', quantity: 1 });
};

const closeModal = () => {
setSelectedProduct(null);
};

const handleInputChange = (e) => {
const { name, value } = e.target;
setFormData(prev => ({ ...prev, [name]: value }));
};

const adjustQuantity = (amount) => {
setFormData(prev => ({
...prev,
quantity: Math.max(1, prev.quantity + amount)
}));
};

return (
<div className="min-h-screen bg-[var(--deep-sea)] pt-40 pb-24 text-white">
<div className="max-w-7xl mx-auto px-6">
{/* Header Section */}
<div className="mb-16">
<span className="text-sm font-bold uppercase tracking-[0.4em] text-[var(--shallow-teal)]/60 mb-4 block text-center md:text-left">
The Exchange
</span>
<h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none text-center md:text-left">
COASTAL <br /> <span className="text-[var(--sand-gold)]">MARKETPLACE</span>
</h1>
</div>

{/* Filters */}
<div className="flex flex-wrap gap-3 mb-16 justify-center md:justify-start">
{categories.map((filter) => (
<button
key={filter}
onClick={() => setActiveCategory(filter)}
className={`px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg active:scale-95 flex items-center gap-2 border ${
activeCategory === filter
? "bg-[var(--shallow-teal)] text-white border-[var(--shallow-teal)]"
: "bg-white/5 text-white/70 hover:bg-white/10 border-white/10 backdrop-blur-md"
}`}
>
{filter}
</button>
))}
</div>

{/* Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
{filteredProducts.map((product) => (
<div key={product.id} className="group relative bg-white/5 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 hover:-translate-y-3">
<div className="aspect-[4/5] overflow-hidden relative">
<img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
<div className="absolute top-6 left-6">
<span className="text-[10px] font-black uppercase tracking-widest text-white bg-[var(--deep-sea)]/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-1">
{product.category}
</span>
</div>
</div>
<div className="p-8 relative">
<div className="flex justify-between items-end mb-6">
<h3 className="text-2xl font-black text-white uppercase tracking-tight leading-tight max-w-[70%]">
{product.title}
</h3>
<span className="text-2xl font-black text-[var(--sand-gold)]">₹{product.price}</span>
</div>

<button
onClick={() => openModal(product)}
className="w-full py-4 bg-[var(--shallow-teal)] text-white rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#0e7490] transition-colors shadow-lg active:scale-95 border border-white/20"
>
Buy Now
</button>
</div>
</div>
))}
</div>
</div>

{/* DETAILED BUY MODAL */}
{selectedProduct && (
<div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
<div className="absolute inset-0 bg-[var(--deep-sea)]/90 backdrop-blur-xl" onClick={closeModal} />

<div className="relative z-10 w-full max-w-lg bg-gradient-to-br from-[#1e293b] to-[var(--deep-sea)] rounded-[40px] border border-white/10 shadow-3xl overflow-hidden fade-in-up">
<div className="p-8">
{/* Modal Header */}
<div className="flex justify-between items-start mb-8">
<div>
<h2 className="text-3xl font-black text-white uppercase tracking-tighter">Checkout</h2>
<p className="text-[var(--shallow-teal)] font-bold text-xs uppercase tracking-widest mt-1">
{selectedProduct.title}
</p>
</div>
<button onClick={closeModal} className="p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-all">
<X size={24} />
</button>
</div>

{/* Form Content */}
<div className="space-y-6">
{/* Product Summary Mini */}
<div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 mb-2">
<img src={selectedProduct.img} alt="" className="w-16 h-16 object-cover rounded-xl" />
<div>
<p className="text-sm font-bold text-white/70">Price per unit</p>
<p className="text-xl font-black text-[var(--sand-gold)]">₹{selectedProduct.price}</p>
</div>
</div>

<div className="space-y-4">
<div>
<label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 ml-1">Full Name</label>
<input
type="text"
name="name"
value={formData.name}
onChange={handleInputChange}
placeholder="e.g. Rahul Sharma"
className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[var(--shallow-teal)] transition-colors placeholder:text-white/20"
/>
</div>

<div>
<label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 ml-1">Shipping Address</label>
<textarea
name="address"
value={formData.address}
onChange={handleInputChange}
placeholder="Enter your complete address..."
rows="3"
className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[var(--shallow-teal)] transition-colors placeholder:text-white/20 resize-none"
/>
</div>

{/* Quantity and Total */}
<div className="flex gap-4">
<div className="flex-1">
<label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 ml-1">Quantity</label>
<div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
<button onClick={() => adjustQuantity(-1)} className="p-1 hover:bg-white/10 rounded-lg text-white transition-colors">
<Minus size={18} />
</button>
<span className="text-lg font-bold">{formData.quantity}</span>
<button onClick={() => adjustQuantity(1)} className="p-1 hover:bg-white/10 rounded-lg text-white transition-colors">
<Plus size={18} />
</button>
</div>
</div>
<div className="flex-1">
<label className="block text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 ml-1">Total Amount</label>
<div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-center">
<span className="text-xl font-black text-white">₹{selectedProduct.price * formData.quantity}</span>
</div>
</div>
</div>
</div>

{/* Submit Button */}
<button
className="w-full py-6 mt-4 bg-[var(--sand-gold)] text-[var(--deep-sea)] rounded-3xl font-black uppercase text-sm tracking-[0.2em] hover:bg-[#d97706] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 group"
>
<CreditCard size={20} className="group-hover:translate-x-1 transition-transform" />
Proceed to Payment
</button>
</div>
</div>
</div>
</div>
)}
</div>
);
}

export default Marketplace;