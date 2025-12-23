import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-24 md:py-0">
      <div className="max-w-[1350px] mx-auto px-6 w-full">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 md:mb-20 text-center">
          About <span className="text-orange-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-orange-400 uppercase text-xs md:text-sm mb-4 md:mb-6">
              My Background
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
              I’m a <span className="text-orange-400">MERN Stack Developer</span>
              <br />
              who enjoys building things
              <br />
              that actually get used.
            </h3>

            <p className="text-gray-400 mt-6 md:mt-8 leading-relaxed max-w-xl">
              I’m a B.Sc. IT graduate with hands-on experience in building
              full-stack web applications. I enjoy working across the stack —
              from crafting clean user interfaces to developing reliable
              backend APIs.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 md:space-y-10"
          >
            <p className="text-gray-300 leading-relaxed">
              Over time, I’ve worked on real-world projects like e-commerce
              platforms and management systems, where I learned the importance
              of writing maintainable code and designing user-friendly flows.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I’m comfortable handling both frontend and backend responsibilities,
              and I enjoy seeing a product come together from idea to deployment.
            </p>

            <div className="border-l-2 border-orange-400/50 pl-5">
              <p className="text-white font-medium">
                Currently looking for an entry-level role where I can grow as a
                developer, collaborate with experienced teams, and contribute
                to meaningful projects.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
