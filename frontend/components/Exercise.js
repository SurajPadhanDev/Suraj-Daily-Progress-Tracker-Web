// Exercise: Toggle, animated icon, progress bar, fetch/post to backend
import { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';

export default function Exercise() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState('');

  const saveExercise = async () => {
    setLoading(true);
    await fetch('http://localhost:5000/api/exercise', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'General', completed: done, duration: Number(duration), time: new Date() })
    });
    setLoading(false);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-teal-600">Exercise</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <label className="font-semibold">Exercise Done</label>
          <button onClick={() => setDone(!done)} className={`w-12 h-6 rounded-full transition-colors duration-300 ${done ? 'bg-teal-400' : 'bg-gray-300'}`}> <motion.div layout className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${done ? 'translate-x-6' : ''}`}></motion.div></button>
        </div>
        <input type="number" value={duration} onChange={e => setDuration(e.target.value)} placeholder="Duration (min)" className="rounded-lg px-3 py-2 border focus:ring-2 focus:ring-teal-400" />
        <button onClick={saveExercise} className="px-6 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition">Save</button>
        {loading && <Loader />}
      </div>
    </motion.section>
  );
}
