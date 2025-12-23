import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"

const links = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-gray-950 backdrop-blur z-50">
      <div className="max-w-full mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <span className="inline-block bg-gray-800 px-4 py-1 rounded-full text-sm font-medium border-b border-orange-600">
          Prachi Patel
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm hover:text-orange-400 transition"
            >
              {l.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {links.map(l => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-white
                  hover:text-orange-400 transition"
                >
                  {l.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
