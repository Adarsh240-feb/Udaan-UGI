import { Trophy, ArrowRight, Users, Medal } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export default function Tournament() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Tournament Format
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up delay-200 px-4">
              The Bracket System - League-cum-Knockout format for maximum excitement
            </p>
          </div>
        </div>
      </section>

      {/* Bracket System */}
      <section className="py-10 sm:py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 dark:text-white text-center mb-8 sm:mb-12 animate-fade-in-up">
            The Bracket System
          </h2>

          {/* Group Division */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-lg animate-fade-in-up dark:bg-gray-800">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg sm:text-xl">A</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 dark:text-white">Group A</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">4 Teams (Draw of lots)</p>
                  </div>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  {['Team 1', 'Team 2', 'Team 3', 'Team 4'].map((team, i) => (
                    <div key={i} className="p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-center text-blue-900 dark:text-white font-medium text-sm sm:text-base hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                      {team}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 dark:border-red-800 shadow-lg animate-fade-in-up delay-200 dark:bg-gray-800">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-red-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg sm:text-xl">B</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 dark:text-white">Group B</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">4 Teams (Draw of lots)</p>
                  </div>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  {['Team 5', 'Team 6', 'Team 7', 'Team 8'].map((team, i) => (
                    <div key={i} className="p-2 sm:p-3 bg-red-50 dark:bg-red-900/30 rounded-lg text-center text-blue-900 dark:text-white font-medium text-sm sm:text-base hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors">
                      {team}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progression Path */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 dark:text-white text-center mb-6 sm:mb-8">Progression Path</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Stage 1: Group Stage */}
            <div className="relative mb-6 sm:mb-8 animate-fade-in-up">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                <CardContent className="p-4 sm:p-6">
                  <Badge className="bg-gray-600 mb-2 sm:mb-3 text-[10px] sm:text-xs">Stage 1</Badge>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 dark:text-white mb-1 sm:mb-2">Group Stage</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">Knockout within the group - Top 2 from each group advance</p>
                </CardContent>
              </Card>
              <div className="absolute left-1/2 -bottom-4 sm:-bottom-6 transform -translate-x-1/2">
                <ArrowRight className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600 rotate-90" />
              </div>
            </div>

            {/* Stage 2: Semi-Finals */}
            <div className="relative mb-8 mt-10">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700">
                <CardContent className="p-6">
                  <Badge className="bg-blue-600 mb-3">Stage 2</Badge>
                  <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-4">Semi-Finals</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <p className="font-semibold text-blue-900 dark:text-white mb-2">SF1</p>
                      <p className="text-sm text-muted-foreground">Winner of Group A <span className="text-blue-600 dark:text-blue-400 font-medium">vs</span> Runner-up of Group B</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <p className="font-semibold text-blue-900 dark:text-white mb-2">SF2</p>
                      <p className="text-sm text-muted-foreground">Winner of Group B <span className="text-blue-600 dark:text-blue-400 font-medium">vs</span> Runner-up of Group A</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2">
                <ArrowRight className="w-8 h-8 text-blue-600 rotate-90" />
              </div>
            </div>

            {/* Stage 3: Grand Finale */}
            <div className="mt-10">
              <Card className="border-0 shadow-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
                <CardContent className="p-8 text-center">
                  <Trophy className="w-16 h-16 text-white mx-auto mb-4" />
                  <Badge className="bg-white/20 text-white mb-3">Stage 3</Badge>
                  <h3 className="text-2xl font-bold text-white mb-2">🏆 Grand Finale</h3>
                  <p className="text-white/90">Winner SF1 vs Winner SF2</p>
                  <p className="text-white/70 text-sm mt-2">The ultimate battle for the General Championship Trophy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Format Note */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-950 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Tournament Rules</h2>
            <p className="text-blue-200 dark:text-gray-300 text-lg mb-8">
              All Team Sports will follow the <span className="text-yellow-400 font-semibold">League-cum-Knockout</span> or <span className="text-yellow-400 font-semibold">Direct Knockout</span> system based on time constraints.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-4">
                <Medal className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="font-semibold">Fair Play</p>
                <p className="text-sm text-blue-300 dark:text-gray-400">Random draw of lots</p>
              </div>
              <div className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-4">
                <Medal className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="font-semibold">Equal Chances</p>
                <p className="text-sm text-blue-300 dark:text-gray-400">Cross-group knockouts</p>
              </div>
              <div className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-4">
                <Medal className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="font-semibold">One Champion</p>
                <p className="text-sm text-blue-300 dark:text-gray-400">Grand Finale decides</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
