// MorningRoutine: Toggle and dropdown, animated, fetch/post to backend
import { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';

export default function MorningRoutine() {
  const [wokeUp, setWokeUp] = useState(false);
  const [salad, setSalad] = useState('Skipped');
  const [loading, setLoading] = useState(false);

  const saveRoutine = async () => {
    setLoading(true);
    await fetch('http://localhost:5000/api/morning', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskName: 'Woke up by 3 AM', status: wokeUp, time: new Date() })
    });
    await fetch('http://localhost:5000/api/morning', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskName: 'Had morning salad', status: salad === 'Had', time: new Date() })
    });
    setLoading(false);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Morning Routine</h2>
      <div className="flex flex-col gap-4">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
          <label className="font-semibold">Woke up by 3 AM</label>
          <button onClick={() => setWokeUp(!wokeUp)} className={`w-12 h-6 rounded-full transition-colors duration-300 ${wokeUp ? 'bg-green-400' : 'bg-gray-300'}`}> <motion.div layout className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${wokeUp ? 'translate-x-6' : ''}`}></motion.div></button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
          <label className="font-semibold">Morning Salad</label>
          <select value={salad} onChange={e => setSalad(e.target.value)} className="rounded-lg px-3 py-1 border focus:ring-2 focus:ring-blue-400">
            <option value="Had">Had</option>
            <option value="Skipped">Skipped</option>
          </select>
        </motion.div>
        <button onClick={saveRoutine} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">Save</button>
        {loading && <Loader />}
      </div>
    </motion.section>
  );
}
