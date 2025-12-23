import { motion } from "framer-motion"
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa"
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiPostman,
} from "react-icons/si"

const skills = [
  {
    title: "Frontend",
    accent: "from-orange-400 to-pink-500",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    accent: "from-orange-400 to-red-500",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: "SQL" },
    ],
  },
  {
    title: "Dev Toolkit",
    accent: "from-orange-400 to-yellow-400",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vercel", icon: "▲" },
      { name: "Render", icon: "⚙" },
      { name: "VS Code", icon: "</>" },
      { name: "Postman API", icon: <SiPostman /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center">
      <div className="max-w-[1350px] mx-auto px-6 w-full">

        {/* Heading */}
        <h2 className="text-5xl font-bold mb-16 text-center">
          Technical <span className="text-orange-400">Skills</span>
        </h2>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-2xl bg-white/5 backdrop-blur
              border border-white/10 p-6"
            >
              {/* Accent Line */}
              <div
                className={`absolute left-0 top-0 h-full w-1 rounded-full
                bg-gradient-to-b ${group.accent}`}
              />

              <h3 className="text-xl font-semibold mb-6 pl-3">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {group.items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg
                    bg-black/40 border border-white/10
                    hover:border-orange-400/60
                    hover:shadow-[0_0_25px_-5px_rgba(255,120,60,0.5)]
                    transition"
                  >
                    <span className="text-orange-400 text-xl">
                      {skill.icon}
                    </span>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
