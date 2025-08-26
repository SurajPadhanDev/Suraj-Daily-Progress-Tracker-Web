// SnackBreak: Input items, AI-calorie, mark junk food, animated, fetch/post to backend
import { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';

export default function SnackBreak() {
  const [items, setItems] = useState('');
  const [calories, setCalories] = useState('');
  const [junkFood, setJunkFood] = useState(false);
  const [loading, setLoading] = useState(false);

  const calculateCalories = async () => {
    setLoading(true);
    // Simulate AI-calorie suggestion
    const aiCalories = Math.floor(Math.random() * 150 + 100);
    setCalories(aiCalories);
    setLoading(false);
  };

  const saveSnack = async () => {
    setLoading(true);
    await fetch('http://localhost:5000/api/snack', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: items.split(','), calories: Number(calories), junkFood, time: new Date() })
    });
    setLoading(false);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-green-600">Snack Break</h2>
      <div className="flex flex-col gap-4">
        <input type="text" value={items} onChange={e => setItems(e.target.value)} placeholder="Snack items (comma separated)" className="rounded-lg px-3 py-2 border focus:ring-2 focus:ring-green-400" />
        <button onClick={calculateCalories} className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">AI Calorie Suggestion</button>
        <input type="number" value={calories} onChange={e => setCalories(e.target.value)} placeholder="Calories" className="rounded-lg px-3 py-2 border focus:ring-2 focus:ring-green-400" />
        <div className="flex items-center gap-2">
          <label className="font-semibold">Junk Food?</label>
          <button onClick={() => setJunkFood(!junkFood)} className={`w-10 h-6 rounded-full transition-colors duration-300 ${junkFood ? 'bg-red-400' : 'bg-gray-300'}`}> <motion.div layout className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${junkFood ? 'translate-x-4' : ''}`}></motion.div></button>
        </div>
        <button onClick={saveSnack} className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">Save</button>
        {loading && <Loader />}
      </div>
    </motion.section>
  );
}
