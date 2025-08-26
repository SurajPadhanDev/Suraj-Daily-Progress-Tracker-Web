// DinnerAndNightStudy: Dinner calorie tracker, night study timer, fetch/post to backend
import { useState } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';

export default function DinnerAndNightStudy() {
  const [dinner, setDinner] = useState('');
  const [nightStudyStarted, setNightStudyStarted] = useState(false);
  const [nightStudyTime, setNightStudyTime] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const startNightStudy = () => {
    setNightStudyStarted(true);
    setNightStudyTime(new Date());
    setTimeout(() => {
      setCompleted(true);
    }, 80 * 60 * 1000); // 80 min
  };

  const saveDinnerNight = async () => {
    setLoading(true);
    await fetch('http://localhost:5000/api/dinner-night', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dinner: dinner.split(','), nightStudyTime, completed })
    });
    setLoading(false);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-purple-600">Dinner & Night Study</h2>
      <div className="flex flex-col gap-4">
        <input type="text" value={dinner} onChange={e => setDinner(e.target.value)} placeholder="Dinner items (comma separated)" className="rounded-lg px-3 py-2 border focus:ring-2 focus:ring-purple-400" />
        <button onClick={startNightStudy} disabled={nightStudyStarted} className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition">Start Night Study (80 min)</button>
        <button onClick={saveDinnerNight} disabled={!completed} className="px-6 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition">Save</button>
        {loading && <Loader />}
        <div className="text-xs mt-2">{nightStudyStarted ? (completed ? 'Night Study Completed!' : 'Night Study in progress...') : 'Not started'}</div>
      </div>
    </motion.section>
  );
}
