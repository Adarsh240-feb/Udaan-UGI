import { useState, useEffect } from 'react';
import { Lock, LogIn, Plus, Minus, RefreshCw, Radio, RotateCcw, ArrowLeftRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { 
  ADMIN_CREDENTIALS, 
  getOptionsForSport, 
  subscribeToScores, 
  updateSportScore,
  initializeScores,
  updateCricketScore,
  undoLastBall,
  switchCricketInnings,
  resetCricketInnings
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
            sport.id === 'cricket' ? (
              <CricketScorePanel key={sport.id} sport={sport} updateScore={updateScore} getStatusColor={getStatusColor} getStatusText={getStatusText} />
            ) : (
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
            )
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

// Cricket Score Panel Component
function CricketScorePanel({ sport, updateScore, getStatusColor, getStatusText }) {
  const currentInnings = sport.currentInnings || 1;
  const innings = sport[`innings${currentInnings}`] || { runs: 0, wickets: 0, overs: 0, balls: 0, fours: 0, sixes: 0, extras: 0, currentOver: [] };
  const battingTeam = currentInnings === 1 ? sport.team1 : sport.team2;
  const bowlingTeam = currentInnings === 1 ? sport.team2 : sport.team1;
  const sportConfig = getOptionsForSport('cricket');
  
  const handleBall = (type, runs = 0) => {
    updateCricketScore(type, runs, sport);
  };

  const handleUndo = () => {
    undoLastBall(sport);
  };

  const handleSwitchInnings = () => {
    if (window.confirm('Switch innings? This will start the second team batting.')) {
      switchCricketInnings(sport);
    }
  };

  const handleResetInnings = () => {
    if (window.confirm(`Reset Innings ${currentInnings}? This cannot be undone.`)) {
      resetCricketInnings(currentInnings);
    }
  };

  const totalBalls = innings.overs * 6 + innings.balls;
  const runRate = totalBalls > 0 ? ((innings.runs / totalBalls) * 6).toFixed(2) : '0.00';

  // Target info for 2nd innings
  const target = currentInnings === 2 ? (sport.innings1?.runs || 0) + 1 : null;
  const runsNeeded = target ? target - innings.runs : null;
  const ballsRemaining = currentInnings === 2 ? (sport.totalOvers * 6) - totalBalls : null;
  const reqRunRate = ballsRemaining > 0 ? ((runsNeeded / ballsRemaining) * 6).toFixed(2) : 'N/A';

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-xl">
      {/* Match Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🏏</span>
          <div>
            <h3 className="text-xl font-bold text-white">Cricket Match</h3>
            <p className="text-green-100 text-sm">{sport.totalOvers || 5} Overs Match</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white ${getStatusColor(sport.status)}`}>
            {sport.status === 'live' && <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>}
            {getStatusText(sport.status)}
          </span>
          <select
            value={sport.status}
            onChange={(e) => updateScore('cricket', 'status', e.target.value)}
            className="px-3 py-1.5 bg-white/20 border border-white/30 rounded-lg text-sm text-white focus:ring-2 focus:ring-white/50 outline-none"
          >
            <option value="upcoming" className="text-gray-900">Upcoming</option>
            <option value="live" className="text-gray-900">LIVE</option>
            <option value="innings_break" className="text-gray-900">Innings Break</option>
            <option value="completed" className="text-gray-900">Completed</option>
          </select>
        </div>
      </div>

      {/* Teams Selection */}
      <div className="bg-slate-700/50 px-6 py-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-slate-400 text-xs mb-1">Team 1 (Batting First)</label>
          <select
            value={sport.team1 || ''}
            onChange={(e) => updateScore('cricket', 'team1', e.target.value)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          >
            <option value="">Select Team</option>
            {sportConfig.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-slate-400 text-xs mb-1">Team 2 (Batting Second)</label>
          <select
            value={sport.team2 || ''}
            onChange={(e) => updateScore('cricket', 'team2', e.target.value)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          >
            <option value="">Select Team</option>
            {sportConfig.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
      </div>

      {/* Main Score Display */}
      <div className="p-6">
        {/* Innings Indicator */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              Innings {currentInnings}
            </span>
            <span className="text-white font-semibold">{battingTeam || 'Team ' + currentInnings} Batting</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSwitchInnings}
              className="flex items-center gap-1 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 rounded-lg text-white text-sm font-medium transition-colors"
            >
              <ArrowLeftRight className="w-4 h-4" />
              Switch Innings
            </button>
            <button
              onClick={handleResetInnings}
              className="flex items-center gap-1 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-red-400 text-sm font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>

        {/* Score Display */}
        <div className="bg-slate-700/50 rounded-2xl p-6 mb-6">
          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl sm:text-7xl font-black text-white tabular-nums">{innings.runs}</span>
              <span className="text-4xl text-slate-400 font-bold">/</span>
              <span className="text-4xl text-red-400 font-bold tabular-nums">{innings.wickets}</span>
            </div>
            <p className="text-2xl text-slate-300 mt-2">
              ({innings.overs}.{innings.balls} / {sport.totalOvers || 5} overs)
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-slate-600/50 rounded-xl p-3">
              <p className="text-slate-400 text-xs mb-1">Run Rate</p>
              <p className="text-xl font-bold text-emerald-400">{runRate}</p>
            </div>
            <div className="bg-slate-600/50 rounded-xl p-3">
              <p className="text-slate-400 text-xs mb-1">Fours</p>
              <p className="text-xl font-bold text-blue-400">{innings.fours || 0}</p>
            </div>
            <div className="bg-slate-600/50 rounded-xl p-3">
              <p className="text-slate-400 text-xs mb-1">Sixes</p>
              <p className="text-xl font-bold text-purple-400">{innings.sixes || 0}</p>
            </div>
            <div className="bg-slate-600/50 rounded-xl p-3">
              <p className="text-slate-400 text-xs mb-1">Extras</p>
              <p className="text-xl font-bold text-yellow-400">{innings.extras || 0}</p>
            </div>
          </div>

          {/* Target Info (2nd Innings) */}
          {currentInnings === 2 && target && (
            <div className="mt-4 bg-amber-500/20 border border-amber-500/30 rounded-xl p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-amber-300 text-xs">Target</p>
                  <p className="text-xl font-bold text-white">{target}</p>
                </div>
                <div>
                  <p className="text-amber-300 text-xs">Need</p>
                  <p className="text-xl font-bold text-white">{runsNeeded > 0 ? runsNeeded : 0}</p>
                </div>
                <div>
                  <p className="text-amber-300 text-xs">Req. RR</p>
                  <p className="text-xl font-bold text-white">{reqRunRate}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Current Over Display */}
        <div className="bg-slate-700/50 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-slate-400 text-sm font-medium">This Over</h4>
            <button
              onClick={handleUndo}
              className="flex items-center gap-1 px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded-lg text-white text-xs transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Undo
            </button>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {(innings.currentOver || []).map((ball, idx) => (
              <div 
                key={idx}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm font-bold
                  ${ball === 'W' ? 'bg-red-500 text-white' : ''}
                  ${ball === '4' ? 'bg-blue-500 text-white' : ''}
                  ${ball === '6' ? 'bg-purple-500 text-white' : ''}
                  ${ball === '0' ? 'bg-slate-600 text-slate-300' : ''}
                  ${ball === 'WD' || ball === 'NB' ? 'bg-yellow-500 text-black' : ''}
                  ${!['W', '4', '6', '0', 'WD', 'NB'].includes(ball) && !ball.startsWith('B') && !ball.startsWith('LB') ? 'bg-green-500 text-white' : ''}
                  ${ball.startsWith('B') || ball.startsWith('LB') ? 'bg-orange-500 text-white' : ''}
                `}
              >
                {ball}
              </div>
            ))}
            {Array(Math.max(0, 6 - (innings.currentOver?.length || 0))).fill(0).map((_, idx) => (
              <div key={`empty-${idx}`} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dashed border-slate-600 flex items-center justify-center">
                <span className="text-slate-600">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ball Input Buttons */}
        <div className="space-y-4">
          {/* Runs Row */}
          <div>
            <p className="text-slate-400 text-xs mb-2 font-medium">RUNS</p>
            <div className="grid grid-cols-7 gap-2">
              {[0, 1, 2, 3, 4, 5, 6].map(run => (
                <button
                  key={run}
                  onClick={() => run === 4 ? handleBall('four') : run === 6 ? handleBall('six') : handleBall(run === 0 ? 'dot' : 'run', run)}
                  className={`h-14 rounded-xl text-xl font-bold transition-all active:scale-95
                    ${run === 0 ? 'bg-slate-600 hover:bg-slate-500 text-white' : ''}
                    ${run === 4 ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30' : ''}
                    ${run === 6 ? 'bg-purple-500 hover:bg-purple-600 text-white shadow-lg shadow-purple-500/30' : ''}
                    ${![0, 4, 6].includes(run) ? 'bg-green-500 hover:bg-green-600 text-white' : ''}
                  `}
                >
                  {run}
                </button>
              ))}
            </div>
          </div>

          {/* Extras & Wicket Row */}
          <div>
            <p className="text-slate-400 text-xs mb-2 font-medium">EXTRAS & WICKET</p>
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => handleBall('wide')}
                className="h-14 bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl text-sm font-bold transition-all active:scale-95"
              >
                WIDE
              </button>
              <button
                onClick={() => handleBall('noball')}
                className="h-14 bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl text-sm font-bold transition-all active:scale-95"
              >
                NO BALL
              </button>
              <button
                onClick={() => {
                  const runs = prompt('Enter bye runs:', '1');
                  if (runs) handleBall('bye', parseInt(runs) || 1);
                }}
                className="h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-bold transition-all active:scale-95"
              >
                BYE
              </button>
              <button
                onClick={() => handleBall('wicket')}
                className="h-14 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-bold transition-all active:scale-95 shadow-lg shadow-red-500/30"
              >
                WICKET
              </button>
            </div>
          </div>
        </div>

        {/* Both Innings Summary */}
        <div className="mt-6 bg-slate-700/30 rounded-xl p-4">
          <h4 className="text-slate-400 text-sm font-medium mb-3">Match Summary</h4>
          <div className="space-y-2">
            <div className={`flex items-center justify-between p-3 rounded-lg ${currentInnings === 1 ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-slate-700/50'}`}>
              <span className="font-medium text-white">{sport.team1 || 'Team 1'}</span>
              <span className="text-white font-bold">
                {sport.innings1?.runs || 0}/{sport.innings1?.wickets || 0} ({sport.innings1?.overs || 0}.{sport.innings1?.balls || 0})
              </span>
            </div>
            <div className={`flex items-center justify-between p-3 rounded-lg ${currentInnings === 2 ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-slate-700/50'}`}>
              <span className="font-medium text-white">{sport.team2 || 'Team 2'}</span>
              <span className="text-white font-bold">
                {sport.innings2?.runs || 0}/{sport.innings2?.wickets || 0} ({sport.innings2?.overs || 0}.{sport.innings2?.balls || 0})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
