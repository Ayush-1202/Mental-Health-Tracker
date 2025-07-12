const Insights = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Your Weekly Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-medium">Mood Stats</h3>
          <p className="text-sm text-gray-600">Logged 6 moods this week</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-medium">Habit Completion</h3>
          <p className="text-sm text-gray-600">15 of 25 habits completed</p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
