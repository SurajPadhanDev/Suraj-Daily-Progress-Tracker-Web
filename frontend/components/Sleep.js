// Sleep: Time picker for bedtime/wakeup, save to backend
import { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';

export default function Sleep() {
  const [bedtime, setBedtime] = useState('');
  const [wakeupTime, setWakeupTime] = useState('');
  const [loading, setLoading] = useState(false);

  const saveSleep = async () => {
    setLoading(true);
    await fetch('http://localhost:5000/api/sleep', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bedtime, wakeupTime })
    });
    setLoading(false);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Sleep</h2>
      <div className="flex flex-col gap-4">
        <label className="font-semibold">Bedtime</label>
        <input type="time" value={bedtime} onChange={e => setBedtime(e.target.value)} className="rounded-lg px-3 py-2 border focus:ring-2 focus:ring-gray-400" />
        <label className="font-semibold">Wake-up Time</label>
        <input type="time" value={wakeupTime} onChange={e => setWakeupTime(e.target.value)} className="rounded-lg px-3 py-2 border focus:ring-2 focus:ring-gray-400" />
        <button onClick={saveSleep} className="px-6 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition">Save</button>
        {loading && <Loader />}
      </div>
    </motion.section>
  );
}
