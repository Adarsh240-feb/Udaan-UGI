import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { subscribeToScores } from '../lib/firebase';
import CricketScoreCard from '../components/livescore/CricketScoreCard';
import GenericScoreCard from '../components/livescore/GenericScoreCard';

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
    <div className="min-h-screen bg-slate-900 flex flex-col relative overflow-hidden">
      {/* UGI Left Overlay */}
      <div
        className="fixed left-0 z-40 flex flex-col items-start w-1/3 pointer-events-none select-none"
        style={{ top: '40px', left: '100px', marginTop: '0.5rem' }}
      >
        <img src="/images/united.png" alt="UGI Logo" className="w-56  ml-6 mt-2" />
      </div>
      {/* UDAAN Right Overlay */}
      <div
        className="fixed z-50 flex flex-col items-end pointer-events-none select-none"
        style={{ top: '40px', right: '150px', width: '180px' }}
      >
        <img src="/images/udaan-logo-optimized.png" alt="UDAAN Logo" className="w-full max-w-[180px]" />
      </div>
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
            <GenericScoreCard sport={currentSport} />
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
