import { useState, useEffect } from 'react';
import { Trophy, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { subscribeToScores } from '../lib/firebase';

export default function LiveScore() {
  const [sports, setSports] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Subscribe to live scores from Firebase
  useEffect(() => {
    const unsubscribe = subscribeToScores((data) => {
      // Filter to show only live or completed matches first, then upcoming
      const sorted = data.sort((a, b) => {
        const order = { live: 0, halftime: 1, completed: 2, upcoming: 3 };
        return order[a.status] - order[b.status];
      });
      setSports(sorted);
    });
    return () => unsubscribe;
  }, []);

  // Auto-slide every 10 seconds with progress
  useEffect(() => {
    if (sports.length === 0) return;
    
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentIndex(i => (i + 1) % sports.length);
          return 0;
        }
        return prev + 1;
      });
    }, 100); // 10 seconds = 100 intervals of 100ms

    return () => clearInterval(progressInterval);
  }, [sports.length, currentIndex]);

  const goToNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % sports.length);
  };

  const goToPrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + sports.length) % sports.length);
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case 'live':
        return { bg: 'bg-red-500', text: 'LIVE', pulse: true };
      case 'halftime':
        return { bg: 'bg-amber-500', text: 'HALF TIME', pulse: false };
      case 'completed':
        return { bg: 'bg-emerald-500', text: 'FULL TIME', pulse: false };
      default:
        return { bg: 'bg-slate-500', text: 'UPCOMING', pulse: false };
    }
  };

  const currentSport = sports[currentIndex];

  if (sports.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-xl text-white font-medium">Loading Live Scores...</p>
          <p className="text-slate-400 text-sm mt-2">Connecting to server</p>
        </div>
      </div>
    );
  }

  const statusConfig = getStatusConfig(currentSport.status);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Progress Bar */}
      <div className="h-1 bg-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Score Display - Full width for large screens */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-10">
        <div className="w-full max-w-7xl 2xl:max-w-[90%]">
          {/* Sport Title & Status */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className={`inline-flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-bold text-white ${statusConfig.bg}`}>
                {statusConfig.pulse && (
                  <span className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full animate-pulse"></span>
                )}
                {statusConfig.text}
              </span>
              <span className="text-slate-400 text-sm lg:text-base px-3 py-1 lg:px-4 lg:py-2 bg-slate-800 rounded-full">
                {currentSport.category}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white">
              {currentSport.name}
            </h2>
          </div>

          {/* Cricket Score Card */}
          {currentSport.id === 'cricket' ? (
            <CricketScoreCard sport={currentSport} />
          ) : (
          /* Regular Score Card */
          <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-3 gap-4 items-center">
                {/* Team 1 */}
                <div className="text-center">
                  <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-600">
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 truncate">
                      {currentSport.team1 || 'TBD'}
                    </h3>
                    <div className="text-6xl sm:text-8xl md:text-9xl font-black text-white tabular-nums leading-none">
                      {currentSport.score1}
                    </div>
                  </div>
                </div>

                {/* VS Divider */}
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 rotate-3">
                    <span className="text-xl sm:text-2xl font-black text-white -rotate-3">VS</span>
                  </div>
                </div>

                {/* Team 2 */}
                <div className="text-center">
                  <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-600">
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 truncate">
                      {currentSport.team2 || 'TBD'}
                    </h3>
                    <div className="text-6xl sm:text-8xl md:text-9xl font-black text-white tabular-nums leading-none">
                      {currentSport.score2}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goToPrev}
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Match Dots */}
            <div className="flex items-center gap-2 flex-wrap justify-center max-w-lg">
              {sports.map((sport, idx) => {
                const dotStatus = getStatusConfig(sport.status);
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setProgress(0);
                      setCurrentIndex(idx);
                    }}
                    className={`transition-all ${
                      idx === currentIndex 
                        ? `w-8 h-3 ${dotStatus.bg} rounded-full` 
                        : 'w-3 h-3 bg-slate-600 hover:bg-slate-500 rounded-full'
                    }`}
                    title={sport.name}
                  />
                );
              })}
            </div>

            <button
              onClick={goToNext}
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Match Info */}
          <p className="text-center text-slate-500 mt-6 text-sm">
            Match {currentIndex + 1} of {sports.length}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-3 px-4 text-center">
        <p className="text-slate-400 text-xs sm:text-sm">
          UDAAN - UGI Sports Fest 2026 • Live Score Updates
        </p>
      </footer>
    </div>
  );
}

// Cricket Score Card Component - Optimized for large horizontal displays
function CricketScoreCard({ sport }) {
  const currentInnings = sport.currentInnings || 1;
  const innings1 = sport.innings1 || { runs: 0, wickets: 0, overs: 0, balls: 0, fours: 0, sixes: 0, extras: 0, currentOver: [] };
  const innings2 = sport.innings2 || { runs: 0, wickets: 0, overs: 0, balls: 0, fours: 0, sixes: 0, extras: 0, currentOver: [] };
  const currentInningsData = currentInnings === 1 ? innings1 : innings2;
  const battingTeam = currentInnings === 1 ? sport.team1 : sport.team2;
  const bowlingTeam = currentInnings === 1 ? sport.team2 : sport.team1;
  
  const totalBalls = currentInningsData.overs * 6 + currentInningsData.balls;
  const runRate = totalBalls > 0 ? ((currentInningsData.runs / totalBalls) * 6).toFixed(2) : '0.00';
  
  // Target info for 2nd innings
  const target = currentInnings === 2 ? innings1.runs + 1 : null;
  const runsNeeded = target ? target - currentInningsData.runs : null;
  const ballsRemaining = currentInnings === 2 ? ((sport.totalOvers || 5) * 6) - totalBalls : null;
  const reqRunRate = ballsRemaining > 0 ? ((runsNeeded / ballsRemaining) * 6).toFixed(2) : 'N/A';

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
