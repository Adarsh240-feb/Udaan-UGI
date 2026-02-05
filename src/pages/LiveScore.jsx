import { useState, useEffect } from 'react';
import { Trophy, Radio, Clock, ChevronLeft, ChevronRight, Pause, Play, Maximize, Minimize } from 'lucide-react';
import { subscribeToScores } from '../lib/firebase';

export default function LiveScore() {
  const [sports, setSports] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
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
    if (isPaused || sports.length === 0) return;
    
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
  }, [isPaused, sports.length, currentIndex]);

  const goToNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % sports.length);
  };

  const goToPrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + sports.length) % sports.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
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
      {/* Header Bar */}
      <header className="bg-slate-800 border-b border-slate-700 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* UGI Logo */}
            <img 
              src="/images/united.png" 
              alt="UGI Logo" 
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Radio className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">UDAAN 2026</h1>
                <p className="text-xs text-slate-400">Live Scoreboard</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              {isPaused ? (
                <Play className="w-5 h-5 text-emerald-400" />
              ) : (
                <Pause className="w-5 h-5 text-white" />
              )}
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              {isFullscreen ? (
                <Minimize className="w-5 h-5 text-white" />
              ) : (
                <Maximize className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      {!isPaused && (
        <div className="h-1 bg-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Main Score Display */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-4xl">
          {/* Sport Title & Status */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white ${statusConfig.bg}`}>
                {statusConfig.pulse && (
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                )}
                {statusConfig.text}
              </span>
              <span className="text-slate-400 text-sm px-3 py-1 bg-slate-800 rounded-full">
                {currentSport.category}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              {currentSport.name}
            </h2>
          </div>

          {/* Score Card */}
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
            Match {currentIndex + 1} of {sports.length} • {isPaused ? 'Paused' : 'Playing'}
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
