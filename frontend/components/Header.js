// Header component: Displays logo and app title
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg mb-6">
      <div className="flex items-center gap-3">
        <img src="/globe.svg" alt="Logo" className="w-10 h-10" />
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">Daily Progress Tracker</h1>
      </div>
      <span className="text-white font-semibold">Track. Improve. Succeed.</span>
    </motion.header>
  );
}
