import React from 'react'

const activityCategories = [
  {
    title: "🌊 Maritime & Fishing Traditions",
    description: "Deep-sea wisdom and ancient techniques passed through generations.",
    bgColor: "bg-[#285260]",
    textColor: "text-[#B4D7D8]",
    activities: [
      {
        name: "Shore Seining (Kambavala)",
        desc: "Join 20+ locals on the beach to manually haul in massive community nets in a synchronized rhythm.",
        img: "https://i.pinimg.com/1200x/3b/68/70/3b68709335805fd6c3746097d4981977.jpg"
      },
      {
        name: "Traditional Boat Navigation",
        desc: "A 'Masterclass' on steering a non-motorized wooden Vanjie or Dhoni using only oars and wind.",
        img: "https://i.pinimg.com/1200x/99/91/92/999192896582bf4f366160862088f123.jpg"
      },
      {
        name: "Midnight Crab Hunting",
        desc: "Walking the backwaters at low tide with traditional lamps and bamboo baskets to catch mud crabs.",
        img: "https://i.pinimg.com/1200x/68/73/0c/68730cc678393e8784fc13bd20211111.jpg"
      }
    ]
  },
  {
    title: "🍛 Culinary & Farm Traditions",
    description: "Authentic coastal flavors rooted in local spice pans and home kitchens.",
    bgColor: "bg-[#F5F1E8]",
    textColor: "text-[#285260]",
    activities: [
      {
        name: "Catch to Kitchen",
        desc: "Buy fish at the morning auction and learn the specific family recipe for Meen Mulakittathu.",
        img: "https://i.pinimg.com/1200x/a3/c1/3f/a3c13fcf213bc2009022b9128a5767bb.jpg"
      },
      {
        name: "Toddy Tapping Observation",
        desc: "Watching the 'Chethukaran' climb coconut trees for fresh sap, followed by a traditional breakfast.",
        img: "https://i.pinimg.com/1200x/c7/39/24/c7392421ad06052cc8feacbf2fcf08f8.jpg"
      },
      {
        name: "Sun-Drying Masterclass",
        desc: "Learning the science of preserving fish and mangoes using only sea salt and coastal sun-drying.",
        img: "https://i.pinimg.com/1200x/7c/ae/85/7cae850ca70814b661c1213753833afd.jpg"
      }
    ]
  },
  {
    title: "🛠️ Craft & Architecture",
    description: "Hands-on heritage using raw materials from the coastal landscape.",
    bgColor: "bg-[#AB9072]/10",
    textColor: "text-[#285260]",
    activities: [
      {
        name: "Coir Spinning & Weaving",
        desc: "Turning raw coconut husk into gold-colored fiber and weaving a small mat to take home.",
        img: "https://i.pinimg.com/1200x/74/00/88/7400885697f05188140f97e30ae036b8.jpg"
      },
      {
        name: "Laterite Stone Carving",
        desc: "A hands-on session with local masons shaping the iconic red coastal stone used in traditional homes.",
        img: "https://i.pinimg.com/1200x/d1/e3/28/d1e328e4decea649aaeafd994b12cde3.jpg"
      },
      {
        name: "Natural Dyeing",
        desc: "Using mangrove bark or sea hibiscus to dye organic cotton fabrics using ancient methods.",
        img: "https://i.pinimg.com/1200x/0b/a3/5f/0ba35fef564c58ee011ba271787cea58.jpg"
      }
    ]
  },
  {
    title: "🎭 Culture & Nature Rituals",
    description: "Spiritual and ecological connections that define life by the sea.",
    bgColor: "bg-[#285260]",
    textColor: "text-[#F5F1E8]",
    activities: [
      {
        name: "Coastal Folklore Storytelling",
        desc: "Campfire sessions under the stars where elders narrate ancestral ghost stories and sea legends.",
        img: "https://i.pinimg.com/1200x/f7/90/b1/f790b1a88332fe19c74d55db99087b0c.jpg"
      },
      {
        name: "Sacred Grove Guided Walk",
        desc: "A silent, meditative walk through protected ancestral forests near the coast to learn about 'Green Traditions.'",
        img: "https://i.pinimg.com/1200x/b9/09/b6/b909b6aaa50ff8a33ca19f0dbd022103.jpg"
      },
      {
        name: "Bio-Luminescence Kayaking",
        desc: "Navigating backwaters at night to witness 'Sea Sparkle' بينما learning the traditional names.",
        img: "https://i.pinimg.com/1200x/49/eb/32/49eb32979b350c6d0155094cc102a854.jpg"
      }
    ]
  }
];

const Activities = () => {
  return (
    <div className="bg-[#F5F1E8] text-[#1F3D44]">
      
      {/* HERO HEADER */}
      <section className="min-h-[90vh] flex items-end px-6 pb-24 max-w-7xl mx-auto">
        <div>
          <p className="uppercase tracking-[0.4em] text-sm text-[#AB9072] mb-6">
            Living Traditions
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-none">
            Coastal <br />
            <span className="text-[#548C92]">Experiences</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-[#1F3D44]/80">
            Not tours. Not shows.  
            Real coastal life — lived, shared, and protected by the community.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      {activityCategories.map((category, idx) => (
        <section key={idx} className="py-32">
          
          {/* Category intro */}
          <div className="max-w-7xl mx-auto px-6 mb-24 grid md:grid-cols-2 gap-12 items-end">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {category.title}
            </h2>
            <p className="text-lg text-[#1F3D44]/70 max-w-lg">
              {category.description}
            </p>
          </div>

          {/* Experiences */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
  {category.activities.map((activity, aIdx) => (
    <div
      key={aIdx}
      className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={activity.img}
          alt={activity.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[#285260] mb-2">
          {activity.name}
        </h3>

        <p className="text-sm text-[#285260]/70 leading-relaxed line-clamp-3">
          {activity.desc}
        </p>

        <button className="mt-4 text-sm font-semibold text-[#548C92] hover:text-[#285260] transition">
          View Experience →
        </button>
      </div>
    </div>
  ))}
</div>

        </section>
      ))}
    </div>
  )
}

export default Activities
