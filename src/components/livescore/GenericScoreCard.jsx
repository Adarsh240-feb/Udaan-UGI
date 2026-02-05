// Generic Score Card Component for non-cricket sports
export default function GenericScoreCard({ sport }) {
  return (
    <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
      <div className="p-6 sm:p-10">
        <div className="grid grid-cols-3 gap-4 items-center">
          {/* Team 1 */}
          <div className="text-center">
            <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-600">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 truncate">
                {sport.team1 || 'TBD'}
              </h3>
              <div className="text-6xl sm:text-8xl md:text-9xl font-black text-white tabular-nums leading-none">
                {sport.score1}
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
                {sport.team2 || 'TBD'}
              </h3>
              <div className="text-6xl sm:text-8xl md:text-9xl font-black text-white tabular-nums leading-none">
                {sport.score2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
