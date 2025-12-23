import { motion } from "framer-motion"
import haveit from '../assets/haveit_bg.png'
import cm from '../assets/contact_manager_bg.jpg'
import food from '../assets/food_bg.png'

const projects = [
  {
    title: "Haveit",
    subtitle: "Smart Grocery Platform",
    desc: "Blinkit-style full-stack grocery & e-commerce web application.",
    img: haveit,
    live: "https://haveit-app.vercel.app",
    code: "https://github.com/AwesomePrachi/haveit"
  },
  {
    title: "Contact Manager",
    subtitle: "Full-Stack CRUD App",
    desc: "A modern contact manager web application. Save all contacts.",
    img: cm,
    live: "https://contact-manager-app-amber.vercel.app",
    code: "https://github.com/AwesomePrachi/contact-manager-webapp"
  },
  {
    title: "Food Gallery",
    subtitle: "Recipe Sharing Platform",
    desc: "App to browse and filter food items by category, responsive UI.",
    img: food,
    live: "https://food-gallery-app.vercel.app",
    code: "https://github.com/AwesomePrachi/food-gallery-app"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-32">
      <div className="max-w-[1350px] mx-auto px-8 space-y-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 md:mb-20 text-center">
          Work <span className="text-orange-400">Samples</span>
        </h2>

        {projects.map((p, i) => {
          const isReverse = i % 2 === 1

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isReverse ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.015 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`grid md:grid-cols-2 gap-10 items-center ${isReverse ? "md:grid-flow-col-dense" : ""
                }`}
            >

              {/* Content */}
              <div className={isReverse ? "md:col-start-2" : ""}>
                <h2 className="text-4xl font-bold tracking-tight">{p.title}</h2>
                <p className="text-orange-400 mt-2 font-medium">{p.subtitle}</p>
                <p className="text-gray-400 mt-4 max-w-md">
                  {p.desc}
                </p>

                <div className="flex gap-6 mt-6">
                  <a
                    href={p.code}
                    target="_blank"
                    className="hover:text-orange-400 transition underline underline-offset-8"
                  >
                    Code →
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    className="hover:text-orange-400 transition underline underline-offset-8"
                  >
                    Live App →
                  </a>
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative rounded-2xl p-[1px] 
                ${isReverse ? "md:col-start-1" : ""}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="rounded-2xl shadow-2xl bg-[#030712]"
                />
              </div>

            </motion.div>
          )
        })}

      </div>
    </section>
  )
}
