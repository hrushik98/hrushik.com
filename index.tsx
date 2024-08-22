import { motion } from 'framer-motion'
import { Github, Linkedin, Code, BookOpen, Instagram } from 'lucide-react'

const links = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/hrushik', icon: Linkedin, color: 'from-blue-400 to-blue-600' },
  { name: 'GitHub', url: 'https://github.com/hrushik98', icon: Github, color: 'from-gray-400 to-gray-600' },
  { name: 'Technical Blog', url: 'https://hrushik.com', icon: BookOpen, color: 'from-green-400 to-green-600' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/phanihrushik/', icon: Code, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Instagram', url: 'https://www.instagram.com/hrushik10', icon: Instagram, color: 'from-pink-400 to-pink-600' },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 text-center"
        >
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-cyan-500/50">
            HP
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Hrushik Pabbathireddy</h1>
          <p className="text-cyan-400">Connect with me</p>
        </motion.div>
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block mb-4 p-4 rounded-lg bg-gradient-to-r ${link.color} text-white font-semibold shadow-lg transition-shadow hover:shadow-xl`}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center">
              <link.icon className="w-6 h-6 mr-3" />
              {link.name}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}
