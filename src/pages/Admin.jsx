import { useState, useEffect } from 'react';
import { Lock, LogIn, Radio } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { subscribeToScores, updateSportScore, validateAdminLogin } from '../lib/firebase';
import CricketScorePanel from '../components/admin/CricketScorePanel';
import GenericScorePanel from '../components/admin/GenericScorePanel';

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
  const [adminRole, setAdminRole] = useState(null);

  // Check for existing session
  useEffect(() => {
    const savedSession = localStorage.getItem('adminSession');
    const savedRole = localStorage.getItem('adminRole');
    if (savedSession && savedRole) {
      setIsLoggedIn(true);
      const roleData = JSON.parse(savedRole);
      setAdminRole(roleData);
      // Set active tab to first allowed category
      if (roleData.allowedCategories && roleData.allowedCategories.length > 0) {
        setActiveTab(roleData.allowedCategories[0]);
      }
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
    const result = validateAdminLogin(username, password);
    
    if (result.valid) {
      setIsLoggedIn(true);
      setAdminRole(result);
      setError('');
      localStorage.setItem('adminSession', sessionId);
      localStorage.setItem('adminRole', JSON.stringify(result));
      // Set active tab to first allowed category
      if (result.allowedCategories && result.allowedCategories.length > 0) {
        setActiveTab(result.allowedCategories[0]);
      }
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAdminRole(null);
    localStorage.removeItem('adminSession');
    localStorage.removeItem('adminRole');
    setUsername('');
    setPassword('');
  };

  // Filter categories based on admin role
  const allowedCategories = adminRole?.allowedCategories 
    ? sportCategories.filter(c => adminRole.allowedCategories.includes(c.id))
    : []; // No access if not logged in properly

  const updateScore = (sportId, field, value) => {
    const updates = { [field]: value };
    updateSportScore(sportId, updates);
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
              {/* Admin Role Badge */}
              {adminRole && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                  <span>{adminRole.icon}</span>
                  <span>{adminRole.label}</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
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
            {allowedCategories.map((category) => (
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
              <GenericScorePanel key={sport.id} sport={sport} getStatusColor={getStatusColor} getStatusText={getStatusText} />
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

