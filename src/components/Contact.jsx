import { motion } from "framer-motion"
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-24 md:py-0">
      <div className="max-w-[1350px] mx-auto px-6 w-full">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Let’s <span className="text-orange-400">Work Together</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-orange-400 uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6">
              Get In Touch
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
              Have an opportunity,
              <br />
              project, or idea?
            </h3>

            <p className="text-gray-400 mt-6 md:mt-8 max-w-xl leading-relaxed">
              I’m always open to discussing new opportunities, collaborating on
              projects, or simply connecting.
            </p>

            <p className="text-gray-500 mt-4">
              I usually respond within a week.
            </p>
          </motion.div>

          {/* Right – Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <FaEnvelope />,
                title: "Email",
                text: "awesomeprachipatel@gmail.com",
                link: "mailto:awesomeprachipatel@gmail.com",
              },
              {
                icon: <FaLinkedinIn />,
                title: "LinkedIn",
                text: "connect professionally",
                link: "https://linkedin.com/in/awesome-prachi-patel",
              },
              {
                icon: <FaGithub />,
                title: "GitHub",
                text: "View my projects",
                link: "https://github.com/AwesomePrachi",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="rounded-2xl border border-white/10 p-6
                hover:border-orange-400/60
                hover:shadow-[0_0_30px_-8px_rgba(255,120,60,0.5)]
                transition"
              >
                <div className="text-3xl text-orange-400 mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400 break-all">
                  {item.text}
                </p>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
