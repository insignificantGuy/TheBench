import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from './SectionLabel'

const tabs = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'matcha', label: 'Matcha & Specialty' },
  { id: 'tea', label: 'Tea' },
  { id: 'breakfast', label: 'Breakfast & Brunch' },
  { id: 'mains', label: 'Mains' },
  { id: 'desserts', label: 'Pastries & Desserts' },
]

const items = {
  coffee: [
    { name: 'Spanish Latte', desc: 'Rich espresso with sweetened condensed milk, our signature drink', price: 22, best: true },
    { name: 'Decaf Spanish Latte', desc: 'All the flavor, none of the buzz — smooth decaf espresso with condensed milk', price: 24 },
    { name: 'Spanish Cortado', desc: 'A bold, concentrated take on our Spanish classic', price: 20 },
    { name: 'Flat White', desc: 'Velvety microfoam over double-shot espresso', price: 22 },
    { name: 'Cappuccino', desc: 'Classic Italian-style with thick, creamy foam', price: 20 },
    { name: 'Macchiato', desc: 'Espresso marked with a dot of steamed milk', price: 18 },
    { name: 'Cortado', desc: 'Equal parts espresso and warm milk — perfectly balanced', price: 18 },
    { name: 'Café Latte', desc: 'Smooth espresso with steamed milk and light foam', price: 20 },
  ],
  matcha: [
    { name: 'Salted Vanilla Foam Matcha', desc: 'Ceremonial matcha topped with salted vanilla cold foam — our signature creation', price: 28, best: true },
    { name: 'Hot Matcha Latte', desc: 'Smooth ceremonial-grade matcha whisked with steamed milk', price: 24 },
    { name: 'Iced Matcha Latte', desc: 'Chilled matcha layered over cold milk and ice', price: 26 },
    { name: 'Pink Matcha', desc: 'Dragon fruit-infused matcha — vibrant and refreshing', price: 28 },
    { name: 'Matcha Frappé', desc: 'Blended iced matcha — creamy, thick, and indulgent', price: 30 },
    { name: 'Purple Tea Matcha', desc: 'Unique purple tea blend with matcha — earthy and floral', price: 28 },
    { name: 'Açaí Smoothie Bowl', desc: 'Blended açaí topped with granola, fresh fruits, and honey', price: 35 },
  ],
  tea: [
    { name: 'Chamomile Tea', desc: 'Calming whole-flower chamomile — perfect for winding down', price: 16 },
    { name: 'Specialty Tea Selection', desc: 'Ask your server for today\u2019s curated tea offerings', price: 16 },
  ],
  breakfast: [
    { name: 'Early Bird', desc: 'Signature bacon & egg with caramelized onion and melted cheese on a toasted brioche', price: 38, best: true },
    { name: 'Avo Tostado', desc: 'Smashed avocado on sourdough with cherry tomatoes, microgreens, and chili flakes', price: 36, best: true },
    { name: 'Shakshuka Hashbrown', desc: 'Crispy hashbrown topped with cheesy shakshuka sauce — a brunch showstopper', price: 34 },
    { name: 'Scrambled Eggs on Arabic Bread', desc: 'Fluffy eggs with roasted peppers, whipped feta, and toasted sesame seeds', price: 32 },
    { name: 'Whipped Feta & Labneh Toast', desc: 'Sourdough with cream cheese labneh, cucumber ribbons, and fresh parsley', price: 30 },
    { name: 'PB&J Toast', desc: 'Artisan peanut butter and house-made berry jam on thick-cut toast', price: 26 },
    { name: 'French Toast', desc: 'Golden brioche French toast with berries, maple syrup, and cream', price: 34 },
    { name: 'Brekkie Burrito', desc: 'Stuffed with rice, sour cream, black beans, cheese, olives, and tomato salsa', price: 36 },
  ],
  mains: [
    { name: 'Truffle Mushroom Risotto', desc: 'Creamy arborio rice with wild mushrooms, truffle oil, and parmesan shavings', price: 48 },
    { name: 'Rigatoni Pasta', desc: 'Al dente rigatoni tossed with wild mushroom ragù and fresh herbs', price: 42 },
    { name: 'Chicken Biryani', desc: 'Fragrant basmati with cashews, raisins, yogurt sauce, mango pickle, and mint', price: 44 },
    { name: 'Vine Leaves', desc: 'Hand-rolled grape leaves stuffed with herbed rice, served with yogurt sauce', price: 32 },
    { name: 'Zesty Chickpea Bowl', desc: 'Yogurt dip, roasted eggplant, pomegranate seeds, and sumac-spiced chickpeas', price: 36 },
    { name: 'Little Gem Salad', desc: 'Crisp lettuce with lemon dressing, shaved parmesan, balsamic pearls, and fried onion', price: 30 },
    { name: 'Buffalo Chicken Loaded Fries', desc: 'Crispy fries topped with spicy buffalo chicken, ranch, and jalapeños', price: 38 },
    { name: 'Tuna Sandwich', desc: 'House-mixed tuna with fresh greens on artisan bread', price: 34 },
  ],
  desserts: [
    { name: 'Almond Croissant', desc: 'Buttery croissant filled with almond cream and dusted with powdered sugar', price: 18 },
    { name: 'Chocolate Croissant', desc: 'Flaky pastry with rich dark chocolate filling', price: 16 },
    { name: 'Chocolate Lava Cake', desc: 'Warm molten chocolate cake with vanilla ice cream and lotus crumbles', price: 32 },
    { name: 'Tiramisu', desc: 'Classic Italian tiramisu layered with mascarpone and espresso-soaked ladyfingers', price: 30 },
  ],
}

export default function Menu() {
  const [active, setActive] = useState('coffee')

  return (
    <section id="menu" className="py-24 md:py-32 bg-cream-50 dark:bg-sage-950">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <SectionLabel>Our Menu</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-normal text-sage-900 dark:text-cream-50 mb-4">Crafted with Care</h2>
          <p className="text-sage-600/70 dark:text-cream-400/60 max-w-lg mx-auto">From specialty brews to signature brunch — every dish tells a story</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-2 justify-center flex-wrap mb-10"
        >
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border-[1.5px] transition-all ${
                active === t.id
                  ? 'bg-sage-500 border-sage-500 text-white'
                  : 'border-cream-300 dark:border-sage-700 text-sage-600 dark:text-cream-400 hover:border-sage-500 hover:text-sage-500'
              }`}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Menu grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {items[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`group relative bg-white dark:bg-sage-800 border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden ${
                  item.best ? 'border-terra-400/25' : 'border-cream-300 dark:border-sage-700'
                }`}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 w-[3px] h-0 group-hover:h-full transition-all duration-500 rounded-br ${item.best ? 'bg-terra-400' : 'bg-sage-500'}`} />
                {item.best && (
                  <span className="absolute top-4 right-4 bg-terra-400 text-white text-[0.7rem] font-semibold px-3 py-1 rounded-full tracking-wider uppercase">Best Seller</span>
                )}
                <h4 className="font-display text-xl font-medium text-sage-900 dark:text-cream-50 mb-2 pr-20">{item.name}</h4>
                <p className="text-sm text-sage-500/70 dark:text-cream-400/50 leading-relaxed mb-3">{item.desc}</p>
                <span className="font-display text-lg font-semibold text-sage-500">{item.price} AED</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Delivery links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-cream-300 dark:border-sage-800"
        >
          <p className="text-sage-500/60 dark:text-cream-400/50 mb-4">Can't make it in? Order delivery to your door.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#" className="px-6 py-3 rounded-full bg-white dark:bg-sage-800 border border-cream-300 dark:border-sage-700 text-sm font-medium text-sage-800 dark:text-cream-200 hover:border-sage-500 hover:-translate-y-0.5 hover:shadow-sm transition-all">
              Order on Deliveroo
            </a>
            <a href="#" className="px-6 py-3 rounded-full bg-white dark:bg-sage-800 border border-cream-300 dark:border-sage-700 text-sm font-medium text-sage-800 dark:text-cream-200 hover:border-sage-500 hover:-translate-y-0.5 hover:shadow-sm transition-all">
              Order on Talabat
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
