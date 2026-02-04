import { Users, Building2, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const teams = [
  {
    id: 1,
    name: 'UIM',
    fullName: 'United Institute of Management',
    description: 'The management warriors ready to strategize their way to victory',
    color: 'from-purple-500 to-purple-700',
    badge: 'Single Team'
  },
  {
    id: 2,
    name: 'UIT - Team A',
    fullName: 'United Institute of Technology',
    description: 'The tech titans bringing innovation to the sports arena',
    color: 'from-blue-500 to-blue-700',
    badge: 'Team A'
  },
  {
    id: 3,
    name: 'UIT - Team B',
    fullName: 'United Institute of Technology',
    description: 'The second force from UIT, equally determined to win',
    color: 'from-blue-600 to-blue-800',
    badge: 'Team B'
  },
  {
    id: 4,
    name: 'UCER - Team A',
    fullName: 'United College of Engineering & Research',
    description: 'Engineering excellence meets athletic prowess',
    color: 'from-red-500 to-red-700',
    badge: 'Team A'
  },
  {
    id: 5,
    name: 'UCER - Team B',
    fullName: 'United College of Engineering & Research',
    description: 'The challenger squad from UCER with fire in their hearts',
    color: 'from-red-600 to-red-800',
    badge: 'Team B'
  },
  {
    id: 6,
    name: 'UIP & UCP',
    fullName: 'United Institute of Pharmacy',
    description: 'The pharmaceutical champions with precision and skill',
    color: 'from-green-500 to-green-700',
    badge: 'Combined'
  },
  {
    id: 7,
    name: 'FUGS - Team A',
    fullName: 'Faculty of Undergraduate Studies',
    description: 'Fresh talent showcasing their athletic abilities',
    color: 'from-orange-500 to-orange-700',
    badge: 'Team A'
  },
  {
    id: 8,
    name: 'FUGS - Team B',
    fullName: 'Faculty of Undergraduate Studies',
    description: 'The second unit bringing competitive spirit',
    color: 'from-orange-600 to-orange-800',
    badge: 'Team B'
  }
];

export default function Teams() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Participating Teams
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up delay-200 px-4">
              The Universal 8-Team Formula for perfect tournament brackets
            </p>
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-800 dark:to-gray-800 animate-fade-in-up">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-white mb-2 sm:mb-3">The "Universal 8-Team" Formula</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      To ensure a perfect tournament bracket (Quarter Finals → Semis → Finals), exactly <span className="font-semibold text-blue-600 dark:text-blue-400">8 Teams</span> are required. Since UGI has 5 colleges, and UCER/UIT/FUGS has the highest student density, <span className="font-semibold text-red-600 dark:text-red-400">UCER, UIT, and FUGS field two separate teams each</span>.
                    </p>

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-blue-100 dark:border-gray-700 max-w-md mx-auto" />

      {/* Teams Grid */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-white text-center mb-8 sm:mb-12">
            All 8 Participating Units
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teams.map((team, index) => (
              <Card key={team.id} className={`border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden animate-fade-in-up delay-${((index % 4) + 1) * 100} dark:bg-gray-800`}>
                <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${team.color}`} />
                <CardHeader className="pb-2 p-3 sm:p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div className={`w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-gradient-to-br ${team.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm sm:text-base">{team.id}</span>
                    </div>
                    <Badge variant="secondary" className="text-[10px] sm:text-xs">{team.badge}</Badge>
                  </div>
                  <CardTitle className="text-base sm:text-lg text-blue-900 dark:text-white mt-2 sm:mt-3">{team.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                  <p className="text-[10px] sm:text-xs text-muted-foreground mb-1 sm:mb-2">{team.fullName}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{team.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* College Distribution */}
      <section className="py-16 bg-blue-900 dark:bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">College Distribution</h2>
          
          {/* Divider */}
          <hr className="border-blue-800 dark:border-gray-600 max-w-md mx-auto mb-12" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0">
              <CardContent className="p-6 text-center">
                <Building2 className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Double Team Colleges</h3>
                <p className="text-blue-200 dark:text-gray-300 text-sm mb-4">Higher student density = 2 teams each</p>
                <div className="space-y-2">
                  {['UCER', 'UIT', 'FUGS'].map((college) => (
                    <div key={college} className="bg-white/10 dark:bg-gray-600/50 rounded-lg py-2 px-4 text-sm">
                      {college} (Team A & B)
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0">
              <CardContent className="p-6 text-center">
                <Users className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Single Team Colleges</h3>
                <p className="text-blue-200 dark:text-gray-300 text-sm mb-4">Standard representation</p>
                <div className="space-y-2">
                  {['UIM', 'UIP & UCP'].map((college) => (
                    <div key={college} className="bg-white/10 dark:bg-gray-600/50 rounded-lg py-2 px-4 text-sm">
                      {college}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0">
              <CardContent className="p-6 text-center">
                <Award className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Total Structure</h3>
                <p className="text-blue-200 dark:text-gray-300 text-sm mb-4">Perfect bracket formation</p>
                <div className="space-y-2">
                  <div className="bg-white/10 dark:bg-gray-600/50 rounded-lg py-2 px-4 text-sm">5 Colleges</div>
                  <div className="bg-white/10 dark:bg-gray-600/50 rounded-lg py-2 px-4 text-sm">8 Teams</div>
                  <div className="bg-white/10 dark:bg-gray-600/50 rounded-lg py-2 px-4 text-sm">1280+ Athletes</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
