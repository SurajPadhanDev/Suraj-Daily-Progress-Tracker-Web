// StudySessions: 6 sessions, timer, progress bar, log times, fetch/post to backend
import { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';

function Session({ number, onSave }) {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setStartTime(new Date());
    setProgress(0);
    let interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setCompleted(true);
          setEndTime(new Date());
          return 100;
        }
        return prev + 100 / (80 * 60); // 80 min in seconds
      });
    }, 1000);
  };

  const handleSave = async () => {
    setLoading(true);
    await fetch('http://localhost:5000/api/study', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionNumber: number, startTime, endTime, completed })
    });
    setLoading(false);
    if (onSave) onSave();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gray-50 rounded-lg p-4 mb-3 shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">Session {number}</span>
        <button onClick={handleStart} disabled={started} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">Start</button>
        <button onClick={handleSave} disabled={!completed} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Save</button>
      </div>
      <motion.div className="h-2 rounded bg-gray-200" initial={{ width: 0 }} animate={{ width: `${progress}%` }} style={{ width: `${progress}%`, background: 'linear-gradient(to right, #4f46e5, #06b6d4)' }} />
      <div className="text-xs mt-2">{started && !completed ? `In progress...` : completed ? `Completed!` : `Not started`}</div>
      {loading && <Loader />}
    </motion.div>
  );
}

export default function StudySessions() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-indigo-600">Study Sessions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1,2,3,4,5,6].map(num => <Session key={num} number={num} />)}
      </div>
    </motion.section>
  );
}
