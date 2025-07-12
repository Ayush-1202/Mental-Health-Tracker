import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './pages/Dashboard';
import MoodLog from './pages/Moodlog';
import Habits from './pages/Habits';
import Insights from './pages/Insights';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mood" element={<MoodLog />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>
  );
}

export default App;
