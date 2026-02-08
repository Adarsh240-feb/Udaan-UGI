import { Trophy, Users, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const sportsData = [
  { sport: 'Football', category: 'Boys', venue: 'FUGS', teams: 8, squad: 9, total: 72, icon: '⚽' },
  { sport: 'Cricket', category: 'Boys', venue: 'UCER', teams: 8, squad: 12, total: 96, icon: '🏏' },
  { sport: 'Volleyball', category: 'Boys', venue: 'UCER', teams: 8, squad: 7, total: 56, icon: '🏐' },
  { sport: 'Volleyball', category: 'Girls', venue: 'UIT', teams: 8, squad: 7, total: 56, icon: '🏐' },
  { sport: 'Basketball', category: 'Girls', venue: 'UIT', teams: 8, squad: 6, total: 48, icon: '🏀' },
  { sport: 'Basketball', category: 'Boys', venue: 'UCER', teams: 8, squad: 6, total: 48, icon: '🏀' },
  { sport: 'Kho-Kho', category: 'Boys & Girls', venue: 'UIT', teams: 16, squad: 10, total: 160, icon: '🏃' },
  { sport: 'Tug of War', category: 'Boys & Girls', venue: 'UIT', teams: 16, squad: 9, total: 144, icon: '🪢' },
  { sport: 'Badminton', category: 'Boys & Girls', venue: 'UCER', teams: 16, squad: 4, total: 64, icon: '🏸' },
  { sport: 'Table Tennis', category: 'Boys & Girls', venue: 'UCER', teams: 16, squad: 3, total: 48, icon: '🏓' },
  { sport: 'Chess', category: 'Mixed', venue: 'UCER', teams: 8, squad: 5, total: 40, icon: '♟️' },
  { sport: 'Carrom', category: 'Mixed', venue: 'UCER', teams: 8, squad: 4, total: 32, icon: '🎯' },
];

export default function Sports() {
  const totalPlayers = sportsData.reduce((sum, s) => sum + s.total, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-2">
              Team Composition & Squad Sizes
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up delay-200 px-4">
              Complete breakdown of all sports events and participant limits
            </p>
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-6 sm:py-8 bg-white dark:bg-gray-900 border-b border-blue-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="p-3 sm:p-4 animate-fade-in-up">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">{sportsData.length}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Sports Events</div>
            </div>
            <div className="p-3 sm:p-4 animate-fade-in-up delay-100">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400">8</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Teams</div>
            </div>
            <div className="p-3 sm:p-4 animate-fade-in-up delay-200">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">{totalPlayers}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Team Sports Players</div>
            </div>
            <div className="p-3 sm:p-4 animate-fade-in-up delay-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">256</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Athletics Entries</div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Sports Table */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 dark:text-white text-center mb-6 sm:mb-8">
            Team Sports Breakdown
          </h2>
          
          <Card className="border-0 shadow-xl overflow-hidden animate-fade-in-up dark:bg-gray-800">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="bg-blue-900 dark:bg-gray-800 text-white">
                  <tr>
                    <th className="px-2 sm:px-4 py-3 sm:py-4 text-left text-xs sm:text-sm">Sport</th>
                    <th className="px-2 sm:px-4 py-3 sm:py-4 text-left text-xs sm:text-sm">Category</th>
                    <th className="px-2 sm:px-4 py-3 sm:py-4 text-center text-xs sm:text-sm">Venue</th>
                    <th className="px-2 sm:px-4 py-3 sm:py-4 text-center text-xs sm:text-sm">Teams</th>
                    <th className="px-2 sm:px-4 py-3 sm:py-4 text-center text-xs sm:text-sm">Squad</th>
                    <th className="px-2 sm:px-4 py-3 sm:py-4 text-center text-xs sm:text-sm">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {sportsData.map((sport, index) => (
                    <tr key={index} className={`border-b border-blue-100 dark:border-gray-700 ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-blue-50 dark:bg-gray-700'} hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors`}>
                      <td className="px-2 sm:px-4 py-3 sm:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-lg sm:text-2xl">{sport.icon}</span>
                          <span className="font-medium text-blue-900 dark:text-white text-xs sm:text-sm md:text-base">{sport.sport}</span>
                        </div>
                      </td>
                      <td className="px-2 sm:px-4 py-3 sm:py-4">
                        <Badge variant={sport.category === 'Boys' ? 'default' : sport.category === 'Girls' ? 'secondary' : 'outline'} className="text-[10px] sm:text-xs">
                          {sport.category}
                        </Badge>
                      </td>
                      <td className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                        <Badge variant="outline" className={`text-[10px] sm:text-xs ${sport.venue === 'UIT' ? 'border-blue-500 text-blue-600' : 'border-red-500 text-red-600'}`}>
                          {sport.venue}
                        </Badge>
                      </td>
                      <td className="px-2 sm:px-4 py-3 sm:py-4 text-center font-medium text-xs sm:text-sm">{sport.teams}</td>
                      <td className="px-2 sm:px-4 py-3 sm:py-4 text-center font-medium text-xs sm:text-sm">{sport.squad}</td>
                      <td className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                        <span className="font-bold text-blue-600 dark:text-blue-400 text-xs sm:text-sm">{sport.total}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gradient-to-r from-blue-600 to-red-600 text-white">
                  <tr>
                    <td colSpan={5} className="px-2 sm:px-4 py-3 sm:py-4 font-bold text-right text-xs sm:text-sm">
                      TEAM SPORTS TOTAL:
                    </td>
                    <td className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                      <span className="text-base sm:text-xl font-bold">{totalPlayers}</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <hr className="border-blue-100 dark:border-gray-700 max-w-md mx-auto my-8" />

      {/* Athletics Breakdown */}
      <section className="py-10 sm:py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 dark:text-white text-center mb-6 sm:mb-8">
            Athletics Breakdown (Estimates)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <Card className="border-0 shadow-lg animate-fade-in-up dark:bg-gray-800">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg dark:text-white">
                  <span className="text-xl sm:text-2xl">🏃‍♂️</span>
                  Track Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Runners</p>
                <p className="text-lg dark:text-gray-200">9 Races × 16 Runners = <span className="font-bold text-blue-600 dark:text-blue-400">64 Entries</span></p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <span className="text-2xl">🎯</span>
                  Field Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Throw/Jump</p>
                <p className="text-lg dark:text-gray-200">8 Events × 16 Contestants = <span className="font-bold text-blue-600 dark:text-blue-400">128 Entries</span></p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <span className="text-2xl">🏃‍♀️</span>
                  Relay Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">4×100m</p>
                <p className="text-lg dark:text-gray-200">8 Boys + 8 Girls Teams = <span className="font-bold text-blue-600 dark:text-blue-400">64 Athletes</span></p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-6 text-center">
              <p className="text-lg mb-2">Total Athletics Entries</p>
              <p className="text-4xl font-bold">256 Athletes</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Grand Total */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-950 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">🏆 GRAND TOTAL PARTICIPATION</h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-blue-300 dark:text-gray-400">Team Sports</p>
                <p className="text-3xl font-bold text-yellow-400">{totalPlayers}</p>
              </div>
              <div className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-blue-300 dark:text-gray-400">Athletics</p>
                <p className="text-3xl font-bold text-yellow-400">~256</p>
              </div>
              <div className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-blue-300 dark:text-gray-400">Total</p>
                <p className="text-3xl font-bold text-yellow-400">~1,120</p>
              </div>
            </div>
            <p className="text-blue-300 dark:text-gray-400 text-sm">
              (Planning Figure for Snacks, Certificates & Logistics)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
