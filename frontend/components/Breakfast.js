// Breakfast: Input items, AI-calorie calculator, animated, fetch/post to backend
import { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';

export default function Breakfast() {
  const [items, setItems] = useState('');
  const [calories, setCalories] = useState('');
  const [loading, setLoading] = useState(false);

  const calculateCalories = async () => {
    setLoading(true);
    // Simulate AI-calorie suggestion (replace with real API if available)
    const aiCalories = Math.floor(Math.random() * 200 + 200);
    setCalories(aiCalories);
    setLoading(false);
  };

  const saveBreakfast = async () => {
    setLoading(true);
    await fetch('http://localhost:5000/api/breakfast', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: items.split(','), calories: Number(calories), time: new Date() })
    });
    setLoading(false);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-yellow-600">Breakfast</h2>
      <div className="flex flex-col gap-4">
        <input type="text" value={items} onChange={e => setItems(e.target.value)} placeholder="Food items (comma separated)" className="rounded-lg px-3 py-2 border focus:ring-2 focus:ring-yellow-400" />
        <button onClick={calculateCalories} className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition">AI Calorie Suggestion</button>
        <input type="number" value={calories} onChange={e => setCalories(e.target.value)} placeholder="Calories" className="rounded-lg px-3 py-2 border focus:ring-2 focus:ring-yellow-400" />
        <button onClick={saveBreakfast} className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition">Save</button>
        {loading && <Loader />}
      </div>
    </motion.section>
  );
}
