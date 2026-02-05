import { Plus, Minus } from 'lucide-react';
import { getOptionsForSport, updateSportScore } from '../../lib/firebase';

// Generic Score Panel Component for non-cricket sports
export default function GenericScorePanel({ sport, getStatusColor, getStatusText }) {
  
  const updateScore = (sportId, field, value) => {
    const updates = { [field]: value };
    updateSportScore(sportId, updates);
  };

  const incrementScore = (field) => {
    const newScore = (sport[field] || 0) + 1;
    updateScore(sport.id, field, newScore);
  };

  const decrementScore = (field) => {
    if (sport[field] > 0) {
      const newScore = sport[field] - 1;
      updateScore(sport.id, field, newScore);
    }
  };

  const sportConfig = getOptionsForSport(sport.id);

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-xl">
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
            
            <div className="bg-slate-700/50 rounded-2xl p-6">
              <div className="text-5xl sm:text-6xl font-black text-white mb-4 tabular-nums">
                {sport.score1}
              </div>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => decrementScore('score1')}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-600 hover:bg-slate-500 rounded-xl flex items-center justify-center text-white transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <button
                  onClick={() => incrementScore('score1')}
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
            
            <div className="bg-slate-700/50 rounded-2xl p-6">
              <div className="text-5xl sm:text-6xl font-black text-white mb-4 tabular-nums">
                {sport.score2}
              </div>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => decrementScore('score2')}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-600 hover:bg-slate-500 rounded-xl flex items-center justify-center text-white transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <button
                  onClick={() => incrementScore('score2')}
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
  );
}
