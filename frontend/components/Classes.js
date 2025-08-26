// Classes: Checkbox list, mark attended, sync with backend
import { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';

const classList = ['Math', 'Physics', 'Chemistry', 'Biology', 'English', 'History'];

export default function Classes() {
  const [statuses, setStatuses] = useState(Array(classList.length).fill(false));
  const [loading, setLoading] = useState(false);

  const handleToggle = async (idx) => {
    const newStatuses = [...statuses];
    newStatuses[idx] = !newStatuses[idx];
    setStatuses(newStatuses);
    setLoading(true);
    await fetch('http://localhost:5000/api/classes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ className: classList[idx], status: newStatuses[idx], time: new Date() })
    });
    setLoading(false);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-pink-600">Classes</h2>
      <div className="flex flex-col gap-3">
        {classList.map((cls, idx) => (
          <motion.div key={cls} whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
            <input type="checkbox" checked={statuses[idx]} onChange={() => handleToggle(idx)} className="accent-pink-500 w-5 h-5" />
            <span className={`font-semibold ${statuses[idx] ? 'text-pink-500' : ''}`}>{cls}</span>
          </motion.div>
        ))}
        {loading && <Loader />}
      </div>
    </motion.section>
  );
}
