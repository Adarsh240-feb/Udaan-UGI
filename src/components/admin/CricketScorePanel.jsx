import { RefreshCw, RotateCcw, ArrowLeftRight, Trophy } from 'lucide-react';
import { getOptionsForSport } from '../../lib/firebase';
import { updateCricketScore, undoLastBall, switchCricketInnings, resetCricketInnings } from '../../lib/cricket';

// Cricket Score Panel Component for Admin
export default function CricketScorePanel({ sport, updateScore, getStatusColor, getStatusText }) {
  const currentInnings = sport.currentInnings || 1;
  const rawInnings = sport[`innings${currentInnings}`] || { runs: 0, wickets: 0, overs: 0, balls: 0, fours: 0, sixes: 0, extras: 0, currentOver: [] };
  
  // Ensure currentOver is always an array (Firebase might convert it to object)
  const currentOverData = rawInnings.currentOver || [];
  const currentOverArray = Array.isArray(currentOverData) ? currentOverData : Object.values(currentOverData);
  
  const innings = {
    ...rawInnings,
    currentOver: currentOverArray
  };
  
  const battingTeam = currentInnings === 1 ? sport.team1 : sport.team2;
  const sportConfig = getOptionsForSport('cricket');
  
  // Debug log
  console.log('=== CricketScorePanel Debug ===');
  console.log('rawInnings.currentOver:', rawInnings.currentOver);
  console.log('currentOverArray:', currentOverArray);
  console.log('innings.currentOver:', innings.currentOver);
  
  const handleBall = (type, runs = 0) => {
    console.log('handleBall called with type:', type);
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

  // Check if match is completed
  const isMatchCompleted = sport.status === 'completed';

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-xl">
      {/* Match Completed Overlay */}
      {isMatchCompleted && (
        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6 text-white" />
            <span className="text-xl font-bold text-white">Match Completed</span>
            <Trophy className="w-6 h-6 text-white" />
          </div>
          {sport.winner && (
            <p className="text-white/90 mt-1 font-medium">{sport.winner} won the match!</p>
          )}
          <p className="text-white/70 text-sm mt-2">Score updates are disabled</p>
        </div>
      )}
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
              disabled={isMatchCompleted}
              className={`flex items-center gap-1 px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded-lg text-white text-xs transition-colors ${isMatchCompleted ? 'opacity-50 cursor-not-allowed' : ''}`}
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
        <div className={`space-y-4 ${isMatchCompleted ? 'opacity-50 pointer-events-none' : ''}`}>
          {/* Runs Row */}
          <div>
            <p className="text-slate-400 text-xs mb-2 font-medium">RUNS</p>
            <div className="grid grid-cols-7 gap-2">
              {[0, 1, 2, 3, 4, 5, 6].map(run => (
                <button
                  key={run}
                  disabled={isMatchCompleted}
                  onClick={() => run === 4 ? handleBall('four') : run === 6 ? handleBall('six') : handleBall(run === 0 ? 'dot' : 'run', run)}
                  className={`h-14 rounded-xl text-xl font-bold transition-all active:scale-95 disabled:cursor-not-allowed
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
            <div className="grid grid-cols-6 gap-2">
              <button
                disabled={isMatchCompleted}
                onClick={() => {
                  const runs = prompt('Wide par kitne run bane? (0 for only extra)', '0');
                  handleBall('wide', parseInt(runs) || 0);
                }}
                className="h-14 bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl text-sm font-bold transition-all active:scale-95 disabled:cursor-not-allowed"
              >
                WIDE
              </button>
              <button
                disabled={isMatchCompleted}
                onClick={() => {
                  const runs = prompt('No ball par kitne run bane? (0 for only extra)', '0');
                  handleBall('noball', parseInt(runs) || 0);
                }}
                className="h-14 bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl text-sm font-bold transition-all active:scale-95 disabled:cursor-not-allowed"
              >
                NO BALL
              </button>
              <button
                disabled={isMatchCompleted}
                onClick={() => {
                  const runs = prompt('Enter bye runs:', '1');
                  if (runs) handleBall('bye', parseInt(runs) || 1);
                }}
                className="h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-bold transition-all active:scale-95 disabled:cursor-not-allowed"
              >
                BYE
              </button>
              <button
                disabled={isMatchCompleted}
                onClick={() => handleBall('wicket')}
                className="h-14 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-bold transition-all active:scale-95 shadow-lg shadow-red-500/30 disabled:cursor-not-allowed"
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
