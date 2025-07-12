import { useState } from 'react';

const MoodLog = () => {
  const [mood, setMood] = useState('');
  const [entries, setEntries] = useState([]);

  const handleLog = () => {
    if (!mood.trim()) return;
    setEntries([...entries, { mood, date: new Date().toLocaleDateString() }]);
    setMood('');
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Log Your Mood</h2>
      <div className="flex items-center gap-2 mb-4">
        <input
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="Type your mood..."
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <button
          onClick={handleLog}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {entries.map((entry, idx) => (
          <li
            key={idx}
            className="bg-white border p-3 rounded shadow-sm text-sm"
          >
            <span className="font-medium">{entry.date}</span>: {entry.mood}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodLog;
