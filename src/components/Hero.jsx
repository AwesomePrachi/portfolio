import { motion } from "framer-motion"
import laptop from '../assets/laptop_bg.png'

export default function Hero() {
  return (
    <section className="max-w-[1350px] mx-auto min-h-screen grid md:grid-cols-2 items-center px-8 gap-10 pt-24 md:pt-32">

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          I don’t just learn <br />
          technologies. <br />
          <span className="text-orange-400">I build products.</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-md">
          Full-stack MERN developer focused on turning ideas into usable,
          real-world web applications.
        </p>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="h-80 md:h-100 rounded-3xl">
          <img src={laptop} alt={laptop} />
        </motion.div>
      
    </section>
  )
}
