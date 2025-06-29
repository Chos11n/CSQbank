import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Practice } from './pages/Practice';
import { Questions } from './pages/Questions';
import { Results } from './pages/Results';
import { Profile } from './pages/Profile';
import { IDE } from './pages/IDE';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/results" element={<Results />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ide" element={<IDE />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;