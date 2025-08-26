// Loader animation for API calls
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div className="flex justify-center items-center py-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full"></motion.div>
    </motion.div>
  );
}
