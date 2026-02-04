import { Zap, Timer, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const quotaTable = [
  { event: '4×100m Relay', category: 'Boys', ucer: '2 Teams (8)', uit: '2 Teams (8)', fugs: '2 Teams (8)', uipucp: '1 Team (4)', uim: '1 Team (4)', total: 32 },
  { event: '4×100m Relay', category: 'Girls', ucer: '2 Teams (8)', uit: '2 Teams (8)', fugs: '2 Teams (8)', uipucp: '1 Team (4)', uim: '1 Team (4)', total: 32 },
  { event: '100 Meter', category: 'Boys', ucer: '4 Students', uit: '4 Students', fugs: '4 Students', uipucp: '2 Students', uim: '2 Students', total: 16 },
  { event: '100 Meter', category: 'Girls', ucer: '4 Students', uit: '4 Students', fugs: '4 Students', uipucp: '2 Students', uim: '2 Students', total: 16 },
  { event: '200 Meter', category: 'Boys', ucer: '4 Students', uit: '4 Students', fugs: '4 Students', uipucp: '2 Students', uim: '2 Students', total: 16 },
  { event: '200 Meter', category: 'Girls', ucer: '4 Students', uit: '4 Students', fugs: '4 Students', uipucp: '2 Students', uim: '2 Students', total: 16 },
  { event: 'Shot Put', category: 'Boys', ucer: '4 Students', uit: '4 Students', fugs: '4 Students', uipucp: '2 Students', uim: '2 Students', total: 16 },
  { event: 'Shot Put', category: 'Girls', ucer: '4 Students', uit: '4 Students', fugs: '4 Students', uipucp: '2 Students', uim: '2 Students', total: 16 },
  { event: 'Discus Throw', category: 'Boys', ucer: '4 Students', uit: '4 Students', fugs: '4 Students', uipucp: '2 Students', uim: '2 Students', total: 16 },
  { event: 'Discus Throw', category: 'Girls', ucer: '4 Students', uit: '4 Students', fugs: '4 Students', uipucp: '2 Students', uim: '2 Students', total: 16 },
  { event: 'Javelin Throw', category: 'Boys', ucer: '4 Students', uit: '4 Students', fugs: '4 Students', uipucp: '2 Students', uim: '2 Students', total: 16 },
  { event: 'Javelin Throw', category: 'Girls', ucer: '4 Students', uit: '4 Students', fugs: '4 Students', uipucp: '2 Students', uim: '2 Students', total: 16 },
  { event: 'Long Jump', category: 'Boys', ucer: '4 Students', uit: '4 Students', fugs: '4 Students', uipucp: '2 Students', uim: '2 Students', total: 16 },
  { event: 'Long Jump', category: 'Girls', ucer: '4 Students', uit: '4 Students', fugs: '4 Students', uipucp: '2 Students', uim: '2 Students', total: 16 },
];

const trackEvents = ['4×100m Relay', '200m', '100m'];
const fieldEvents = ['Long Jump', 'Shot Put', 'Discus Throw', 'Javelin Throw'];

export default function Athletics() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-500 to-amber-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Athletics Federation
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up delay-200 px-4">
              Track & Field Events - Men & Women Separate Categories
            </p>
          </div>
        </div>
      </section>

      {/* Venue Info */}
      <section className="py-6 sm:py-8 bg-white dark:bg-gray-900 border-b border-blue-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-lg animate-fade-in-up">
            📍 Venue: UIT Ground
          </Badge>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Event Categories */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 dark:text-white text-center mb-8 sm:mb-12 animate-fade-in-up">Event Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {/* Track Events */}
            <Card className="border-0 shadow-lg animate-fade-in-up dark:bg-gray-800">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                  <Timer className="w-5 sm:w-6 h-5 sm:h-6" />
                  Track Events (Running)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <div className="space-y-2 sm:space-y-3">
                  {trackEvents.map((event, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                      <span className="text-lg sm:text-2xl">🏃‍♂️</span>
                      <span className="font-medium text-blue-900 dark:text-white text-sm sm:text-base">{event}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Field Events */}
            <Card className="border-0 shadow-lg animate-fade-in-up delay-200 dark:bg-gray-800">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                  <Target className="w-5 sm:w-6 h-5 sm:h-6" />
                  Field Events (Throwing & Jumping)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <div className="space-y-2 sm:space-y-3">
                  {fieldEvents.map((event, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-red-50 dark:bg-red-900/30 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors">
                      <span className="text-lg sm:text-2xl">{i === 0 ? '🦘' : '🎯'}</span>
                      <span className="font-medium text-blue-900 dark:text-white text-sm sm:text-base">{event}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <hr className="border-blue-100 dark:border-gray-700 max-w-md mx-auto my-8" />

      {/* Participation Quota Table */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white text-center mb-4">Participation Quota Table</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Special Multi-Entry System: UCER/UIT/FUGS (due to double team strength) allows more entries, while other colleges have standard quota.
          </p>
          
          <Card className="border-0 shadow-xl overflow-hidden dark:bg-gray-800">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <tr>
                    <th className="px-3 py-3 text-left">Event</th>
                    <th className="px-3 py-3 text-center">Category</th>
                    <th className="px-3 py-3 text-center">UCER</th>
                    <th className="px-3 py-3 text-center">UIT</th>
                    <th className="px-3 py-3 text-center">FUGS</th>
                    <th className="px-3 py-3 text-center">UIP/UCP</th>
                    <th className="px-3 py-3 text-center">UIM</th>
                    <th className="px-3 py-3 text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {quotaTable.map((row, index) => (
                    <tr key={index} className={`border-b border-blue-100 dark:border-gray-700 ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-orange-50 dark:bg-gray-700'}`}>
                      <td className="px-3 py-3 font-medium text-blue-900 dark:text-white">{row.event}</td>
                      <td className="px-3 py-3 text-center">
                        <Badge variant={row.category === 'Boys' ? 'default' : 'secondary'} className="text-xs">
                          {row.category}
                        </Badge>
                      </td>
                      <td className="px-3 py-3 text-center text-xs">{row.ucer}</td>
                      <td className="px-3 py-3 text-center text-xs">{row.uit}</td>
                      <td className="px-3 py-3 text-center text-xs">{row.fugs}</td>
                      <td className="px-3 py-3 text-center text-xs">{row.uipucp}</td>
                      <td className="px-3 py-3 text-center text-xs">{row.uim}</td>
                      <td className="px-3 py-3 text-center font-bold text-orange-600 dark:text-orange-400">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gradient-to-r from-blue-900 to-blue-950 text-white">
                  <tr>
                    <td colSpan={7} className="px-3 py-4 font-bold text-right">
                      TOTAL ATHLETICS ENTRIES:
                    </td>
                    <td className="px-3 py-4 text-center">
                      <span className="text-xl font-bold text-yellow-400">256</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Summary */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-950 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <p className="text-3xl font-bold">64</p>
                <p className="text-sm text-blue-300 dark:text-gray-400">UCER Athletes</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <p className="text-3xl font-bold">64</p>
                <p className="text-sm text-blue-300 dark:text-gray-400">UIT Athletes</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <p className="text-3xl font-bold">64</p>
                <p className="text-sm text-blue-300 dark:text-gray-400">FUGS Athletes</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <p className="text-3xl font-bold">64</p>
                <p className="text-sm text-blue-300 dark:text-gray-400">UIP/UCP + UIM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
