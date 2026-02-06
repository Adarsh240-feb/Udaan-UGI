// Cricket Score Card Component - Optimized for large horizontal displays
export default function CricketScoreCard({ sport }) {
  const currentInnings = sport.currentInnings || 1;
  const rawInnings1 = sport.innings1 || { runs: 0, wickets: 0, overs: 0, balls: 0, fours: 0, sixes: 0, extras: 0, currentOver: [] };
  const rawInnings2 = sport.innings2 || { runs: 0, wickets: 0, overs: 0, balls: 0, fours: 0, sixes: 0, extras: 0, currentOver: [] };
  
  // Ensure currentOver is always an array (Firebase might convert it to object)
  const getOverArray = (over) => {
    if (!over) return [];
    return Array.isArray(over) ? over : Object.values(over);
  };
  
  const innings1 = { ...rawInnings1, currentOver: getOverArray(rawInnings1.currentOver) };
  const innings2 = { ...rawInnings2, currentOver: getOverArray(rawInnings2.currentOver) };
  
  const currentInningsData = currentInnings === 1 ? innings1 : innings2;
  const battingTeam = currentInnings === 1 ? sport.team1 : sport.team2;
  
  const totalBalls = currentInningsData.overs * 6 + currentInningsData.balls;
  const runRate = totalBalls > 0 ? ((currentInningsData.runs / totalBalls) * 6).toFixed(2) : '0.00';
  
  // Target info for 2nd innings
  const target = currentInnings === 2 ? innings1.runs + 1 : null;
  const runsNeeded = target ? target - currentInningsData.runs : null;
  const ballsRemaining = currentInnings === 2 ? ((sport.totalOvers || 5) * 6) - totalBalls : null;
  const reqRunRate = ballsRemaining > 0 ? ((runsNeeded / ballsRemaining) * 6).toFixed(2) : 'N/A';

  // Determine winner
  const isMatchCompleted = sport.status === 'completed';
  let winner = null;
  let winMessage = '';
  
  if (isMatchCompleted || (currentInnings === 2 && innings2.runs >= target)) {
    if (innings2.runs >= innings1.runs + 1) {
      winner = sport.team2 || 'Team 2';
      const wicketsLeft = 10 - innings2.wickets;
      winMessage = `${winner} won by ${wicketsLeft} wicket${wicketsLeft !== 1 ? 's' : ''}! 🏆`;
    } else if (innings2.runs < innings1.runs + 1) {
      winner = sport.team1 || 'Team 1';
      const runsDiff = innings1.runs - innings2.runs;
      winMessage = `${winner} won by ${runsDiff} run${runsDiff !== 1 ? 's' : ''}! 🏆`;
    } else {
      winMessage = "It's a Tie! 🤝";
    }
  }

  // Show winning animation
  if (winner || (isMatchCompleted && winMessage)) {
    return (
      <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl w-full max-w-none relative">
        {/* Confetti Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <div 
                className="w-3 h-3 lg:w-4 lg:h-4"
                style={{
                  backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'][Math.floor(Math.random() * 8)],
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Winner Header */}
        <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 px-6 py-4 lg:px-8 lg:py-6 animate-pulse">
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl lg:text-6xl animate-bounce">🏆</span>
            <div className="text-center">
              <h3 className="text-3xl lg:text-5xl xl:text-6xl font-black text-white drop-shadow-lg">MATCH WINNER!</h3>
              <p className="text-yellow-100 text-lg lg:text-xl">Cricket 🏏</p>
            </div>
            <span className="text-4xl lg:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🏆</span>
          </div>
        </div>

        <div className="p-6 lg:p-10 xl:p-12">
          {/* Winner Announcement */}
          <div className="text-center mb-8">
            <div className="inline-block animate-bounce mb-4">
              <span className="text-6xl lg:text-8xl">🎉</span>
            </div>
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 mb-4 animate-pulse">
              {winner || 'Match Tied'}
            </h2>
            <p className="text-2xl lg:text-3xl xl:text-4xl text-white font-bold">
              {winMessage}
            </p>
          </div>

          {/* Final Scores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Team 1 */}
            <div className={`rounded-2xl p-6 lg:p-8 ${winner === (sport.team1 || 'Team 1') ? 'bg-gradient-to-br from-yellow-500/30 to-amber-500/30 border-2 border-yellow-500 shadow-lg shadow-yellow-500/20' : 'bg-slate-700/50'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">{sport.team1 || 'Team 1'}</h3>
                {winner === (sport.team1 || 'Team 1') && <span className="text-4xl animate-bounce">👑</span>}
              </div>
              <div className="text-center">
                <span className="text-6xl lg:text-8xl font-black text-white">{innings1.runs}</span>
                <span className="text-3xl lg:text-4xl text-slate-400">/{innings1.wickets}</span>
              </div>
              <p className="text-center text-slate-400 text-lg lg:text-xl mt-2">
                ({innings1.overs}.{innings1.balls} overs)
              </p>
              <div className="flex justify-center gap-6 mt-4">
                <div className="text-center">
                  <p className="text-blue-400 text-2xl lg:text-3xl font-bold">{innings1.fours || 0}</p>
                  <p className="text-slate-400 text-sm">Fours</p>
                </div>
                <div className="text-center">
                  <p className="text-purple-400 text-2xl lg:text-3xl font-bold">{innings1.sixes || 0}</p>
                  <p className="text-slate-400 text-sm">Sixes</p>
                </div>
              </div>
            </div>

            {/* Team 2 */}
            <div className={`rounded-2xl p-6 lg:p-8 ${winner === (sport.team2 || 'Team 2') ? 'bg-gradient-to-br from-yellow-500/30 to-amber-500/30 border-2 border-yellow-500 shadow-lg shadow-yellow-500/20' : 'bg-slate-700/50'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">{sport.team2 || 'Team 2'}</h3>
                {winner === (sport.team2 || 'Team 2') && <span className="text-4xl animate-bounce">👑</span>}
              </div>
              <div className="text-center">
                <span className="text-6xl lg:text-8xl font-black text-white">{innings2.runs}</span>
                <span className="text-3xl lg:text-4xl text-slate-400">/{innings2.wickets}</span>
              </div>
              <p className="text-center text-slate-400 text-lg lg:text-xl mt-2">
                ({innings2.overs}.{innings2.balls} overs)
              </p>
              <div className="flex justify-center gap-6 mt-4">
                <div className="text-center">
                  <p className="text-blue-400 text-2xl lg:text-3xl font-bold">{innings2.fours || 0}</p>
                  <p className="text-slate-400 text-sm">Fours</p>
                </div>
                <div className="text-center">
                  <p className="text-purple-400 text-2xl lg:text-3xl font-bold">{innings2.sixes || 0}</p>
                  <p className="text-slate-400 text-sm">Sixes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Celebration emojis */}
          <div className="flex justify-center gap-4 mt-8 text-4xl lg:text-6xl">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎊</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🎉</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🏏</span>
            <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🎉</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎊</span>
          </div>
        </div>

        <style>{`
          @keyframes confetti {
            0% { transform: translateY(-100%) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
          }
          .animate-confetti {
            animation: confetti 5s linear infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl w-full max-w-none">
      {/* Batting Team Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl lg:text-4xl">🏏</span>
            <div>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white">{battingTeam || 'Team ' + currentInnings}</h3>
              <p className="text-green-100 text-sm lg:text-base">Batting • Innings {currentInnings}</p>
            </div>
          </div>
          <span className="text-sm lg:text-base bg-white/20 px-4 py-1.5 rounded-full text-white font-semibold">
            {sport.totalOvers || 5} Overs Match
          </span>
        </div>
      </div>

      <div className="p-4 lg:p-6 xl:p-8">
        {/* Main Layout - Horizontal for large screens */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-8">
          {/* Left Side - Main Score */}
          <div className="flex-1 text-center xl:text-left mb-4 xl:mb-0">
            <div className="flex items-baseline justify-center xl:justify-start gap-2">
              <span className="text-7xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] font-black text-white tabular-nums leading-none">
                {currentInningsData.runs}
              </span>
              <span className="text-4xl lg:text-5xl xl:text-6xl text-slate-400 font-bold">/</span>
              <span className="text-4xl lg:text-5xl xl:text-6xl text-red-400 font-bold tabular-nums">
                {currentInningsData.wickets}
              </span>
            </div>
            <p className="text-2xl lg:text-3xl xl:text-4xl text-slate-300 mt-2">
              ({currentInningsData.overs}.{currentInningsData.balls} / {sport.totalOvers || 5} overs)
            </p>
          </div>

          {/* Right Side - Stats and Info */}
          <div className="xl:w-[45%] space-y-3">
            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-2 lg:gap-3">
              <div className="bg-slate-700/50 rounded-xl p-2 lg:p-3 text-center">
                <p className="text-slate-400 text-xs lg:text-sm">RR</p>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-emerald-400">{runRate}</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-2 lg:p-3 text-center">
                <p className="text-slate-400 text-xs lg:text-sm">4s</p>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-blue-400">{currentInningsData.fours || 0}</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-2 lg:p-3 text-center">
                <p className="text-slate-400 text-xs lg:text-sm">6s</p>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-purple-400">{currentInningsData.sixes || 0}</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-2 lg:p-3 text-center">
                <p className="text-slate-400 text-xs lg:text-sm">Extras</p>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-yellow-400">{currentInningsData.extras || 0}</p>
              </div>
            </div>

            {/* Both Teams Summary */}
            <div className="space-y-2">
              <div className={`flex items-center justify-between p-2 lg:p-3 rounded-lg ${currentInnings === 1 ? 'bg-emerald-500/20 border border-emerald-500/50' : 'bg-slate-700/50'}`}>
                <span className="font-semibold text-white text-base lg:text-lg">{sport.team1 || 'Team 1'}</span>
                <span className="text-white font-bold text-lg lg:text-xl">
                  {innings1.runs}/{innings1.wickets} ({innings1.overs}.{innings1.balls})
                </span>
              </div>
              <div className={`flex items-center justify-between p-2 lg:p-3 rounded-lg ${currentInnings === 2 ? 'bg-emerald-500/20 border border-emerald-500/50' : 'bg-slate-700/50'}`}>
                <span className="font-semibold text-white text-base lg:text-lg">{sport.team2 || 'Team 2'}</span>
                <span className="text-white font-bold text-lg lg:text-xl">
                  {innings2.runs}/{innings2.wickets} ({innings2.overs}.{innings2.balls})
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Target Info (2nd Innings) */}
        {currentInnings === 2 && target && (
          <div className="bg-amber-500/20 border border-amber-500/40 rounded-xl p-3 lg:p-4 mt-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-amber-300 text-xs lg:text-sm">Target</p>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">{target}</p>
              </div>
              <div>
                <p className="text-amber-300 text-xs lg:text-sm">Need</p>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">{runsNeeded > 0 ? runsNeeded : 0}</p>
              </div>
              <div>
                <p className="text-amber-300 text-xs lg:text-sm">Req. RR</p>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">{reqRunRate}</p>
              </div>
            </div>
          </div>
        )}

        {/* Current Over */}
        <div className="bg-slate-700/50 rounded-xl p-3 lg:p-4 mt-4">
          <h4 className="text-slate-400 text-sm lg:text-base mb-2">This Over</h4>
          <div className="flex items-center gap-2 lg:gap-3 justify-center lg:justify-start flex-wrap">
            {(currentInningsData.currentOver || []).map((ball, idx) => (
              <div 
                key={idx}
                className={`w-10 h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center text-sm lg:text-lg xl:text-xl font-bold shadow-lg
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
            {Array(Math.max(0, 6 - (currentInningsData.currentOver?.length || 0))).fill(0).map((_, idx) => (
              <div key={`empty-${idx}`} className="w-10 h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full border-2 border-dashed border-slate-600 flex items-center justify-center">
                <span className="text-slate-600 text-sm lg:text-lg">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
