import { useState, useEffect } from 'react';
import { Lock, LogIn, Plus, Minus, RefreshCw, Radio } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { 
  ADMIN_CREDENTIALS, 
  getOptionsForSport, 
  subscribeToScores, 
  updateSportScore,
  initializeScores 
} from '../lib/firebase';

// Sport categories for tabs
const sportCategories = [
  { id: 'cricket', label: 'Cricket', icon: '🏏', sportIds: ['cricket'] },
  { id: 'football', label: 'Football', icon: '⚽', sportIds: ['football'] },
  { id: 'volleyball', label: 'Volleyball', icon: '🏐', sportIds: ['volleyball_boys', 'volleyball_girls'] },
  { id: 'basketball', label: 'Basketball', icon: '🏀', sportIds: ['basketball_boys', 'basketball_girls'] },
  { id: 'kabaddi', label: 'Kabaddi', icon: '🤼', sportIds: ['kabaddi_boys', 'kabaddi_girls'] },
  { id: 'khokho', label: 'Kho-Kho', icon: '🏃', sportIds: ['khokho_boys', 'khokho_girls'] },
  { id: 'tugofwar', label: 'Tug of War', icon: '🪢', sportIds: ['tugofwar_boys', 'tugofwar_girls'] },
  { id: 'badminton', label: 'Badminton', icon: '🏸', sportIds: ['badminton_boys', 'badminton_girls'] },
  { id: 'tabletennis', label: 'Table Tennis', icon: '🏓', sportIds: ['tabletennis_boys', 'tabletennis_girls'] },
  { id: 'chess', label: 'Chess', icon: '♟️', sportIds: ['chess'] },
  { id: 'carrom', label: 'Carrom', icon: '🎯', sportIds: ['carrom'] },
];

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [sports, setSports] = useState([]);
  const [activeTab, setActiveTab] = useState('cricket');
  const [sessionId] = useState(() => Date.now().toString());

  // Check for existing session
  useEffect(() => {
    const savedSession = localStorage.getItem('adminSession');
    if (savedSession) {
      setIsLoggedIn(true);
    }
  }, []);

  // Subscribe to live scores
  useEffect(() => {
    if (isLoggedIn) {
      const unsubscribe = subscribeToScores((data) => {
        setSports(data);
      });
      return () => unsubscribe;
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsLoggedIn(true);
      setError('');
      localStorage.setItem('adminSession', sessionId);
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminSession');
    setUsername('');
    setPassword('');
  };

  const updateScore = (sportId, field, value) => {
    const updates = { [field]: value };
    updateSportScore(sportId, updates);
  };

  const incrementScore = (sportId, field) => {
    const sport = sports.find(s => s.id === sportId);
    if (sport) {
      const newScore = (sport[field] || 0) + 1;
      updateScore(sportId, field, newScore);
    }
  };

  const decrementScore = (sportId, field) => {
    const sport = sports.find(s => s.id === sportId);
    if (sport && sport[field] > 0) {
      const newScore = sport[field] - 1;
      updateScore(sportId, field, newScore);
    }
  };

  const handleResetAll = () => {
    if (window.confirm('Are you sure you want to reset all scores? This cannot be undone.')) {
      initializeScores();
    }
  };

  // Get filtered sports for active tab
  const activeCategory = sportCategories.find(c => c.id === activeTab);
  const filteredSports = sports.filter(sport => 
    activeCategory?.sportIds.includes(sport.id)
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'live': return 'bg-red-500';
      case 'halftime': return 'bg-yellow-500';
      case 'completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'live': return 'LIVE';
      case 'halftime': return 'HALF TIME';
      case 'completed': return 'FULL TIME';
      default: return 'UPCOMING';
    }
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
        <Card className="w-full max-w-md shadow-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-xl">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Admin Access</h1>
              <p className="text-slate-400 text-sm mt-1">UDAAN Score Management System</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-5">
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm text-center">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-400"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-400"
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 rounded-xl font-semibold shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50">
                <LogIn className="w-5 h-5 mr-2" />
                Sign In
              </Button>
            </form>
          </div>
        </Card>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Radio className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Score Control Panel</h1>
                <p className="text-slate-400 text-xs">UDAAN 2026 • Real-time Updates</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleResetAll}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Reset
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sport Tabs */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {sportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Category Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-3xl">{activeCategory?.icon}</span>
            {activeCategory?.label}
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {filteredSports.length} match{filteredSports.length !== 1 ? 'es' : ''} available
          </p>
        </div>

        {/* Match Cards */}
        <div className="space-y-6">
          {filteredSports.map((sport) => (
            <div 
              key={sport.id}
              className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-xl"
            >
              {/* Match Header */}
              <div className="bg-slate-700/50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white ${getStatusColor(sport.status)}`}>
                    {sport.status === 'live' && (
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    )}
                    {getStatusText(sport.status)}
                  </span>
                  <span className="text-slate-400 text-sm">{sport.category}</span>
                </div>
                <select
                  value={sport.status}
                  onChange={(e) => updateScore(sport.id, 'status', e.target.value)}
                  className="px-3 py-1.5 bg-slate-600 border border-slate-500 rounded-lg text-sm text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="live">LIVE</option>
                  <option value="halftime">Half Time</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              {/* Score Board */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 items-center">
                  {/* Team 1 */}
                  <div className="text-center">
                    {(() => {
                      const sportConfig = getOptionsForSport(sport.id);
                      return (
                        <select
                          value={sport.team1}
                          onChange={(e) => updateScore(sport.id, 'team1', e.target.value)}
                          className="w-full mb-4 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-center font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          <option value="">Select {sportConfig.label}</option>
                          {sportConfig.options.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      );
                    })()}
                    
                    <div className="bg-slate-700/50 rounded-2xl p-6">
                      <div className="text-5xl sm:text-6xl font-black text-white mb-4 tabular-nums">
                        {sport.score1}
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => decrementScore(sport.id, 'score1')}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-600 hover:bg-slate-500 rounded-xl flex items-center justify-center text-white transition-colors"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => incrementScore(sport.id, 'score1')}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 hover:bg-emerald-600 rounded-xl flex items-center justify-center text-white transition-colors shadow-lg shadow-emerald-500/30"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* VS */}
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center border-4 border-slate-600">
                      <span className="text-lg sm:text-xl font-bold text-slate-300">VS</span>
                    </div>
                  </div>

                  {/* Team 2 */}
                  <div className="text-center">
                    {(() => {
                      const sportConfig = getOptionsForSport(sport.id);
                      return (
                        <select
                          value={sport.team2}
                          onChange={(e) => updateScore(sport.id, 'team2', e.target.value)}
                          className="w-full mb-4 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-center font-semibold focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          <option value="">Select {sportConfig.label}</option>
                          {sportConfig.options.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      );
                    })()}
                    
                    <div className="bg-slate-700/50 rounded-2xl p-6">
                      <div className="text-5xl sm:text-6xl font-black text-white mb-4 tabular-nums">
                        {sport.score2}
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => decrementScore(sport.id, 'score2')}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-600 hover:bg-slate-500 rounded-xl flex items-center justify-center text-white transition-colors"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => incrementScore(sport.id, 'score2')}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 hover:bg-emerald-600 rounded-xl flex items-center justify-center text-white transition-colors shadow-lg shadow-emerald-500/30"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredSports.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">{activeCategory?.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">No matches found</h3>
              <p className="text-slate-400">No {activeCategory?.label} matches are configured yet.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
