import { useState } from 'react';

const defaultHabits = [
  'Exercise',
  'Meditation',
  'Sleep 8+ hours',
  'Drink Water',
  'Read a Book',
];

const Habits = () => {
  const [completed, setCompleted] = useState([]);

  const toggleHabit = (habit) => {
    setCompleted((prev) =>
      prev.includes(habit)
        ? prev.filter((h) => h !== habit)
        : [...prev, habit]
    );
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Today's Habits</h2>
      <ul className="space-y-3">
        {defaultHabits.map((habit) => (
          <li
            key={habit}
            className="flex items-center justify-between bg-white p-3 rounded shadow"
          >
            <span
              className={`${
                completed.includes(habit) ? 'line-through text-gray-400' : ''
              }`}
            >
              {habit}
            </span>
            <button
              onClick={() => toggleHabit(habit)}
              className={`px-3 py-1 rounded text-sm ${
                completed.includes(habit)
                  ? 'bg-red-400 text-white'
                  : 'bg-green-500 text-white'
              }`}
            >
              {completed.includes(habit) ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Habits;
