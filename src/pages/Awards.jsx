import { Trophy, Medal, Award, Star, FileText } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const trophies = [
  { name: 'General Championship Trophy', desc: 'The big one - Overall winner', icon: '🏆', special: true },
  { name: 'Runner-Up Championship Trophy', desc: 'Second place overall', icon: '🥈', special: false },
  { name: 'Fair Play Award', desc: 'Most Disciplined College', icon: '🤝', special: false },
  { name: 'Best Athlete (Male)', desc: 'Outstanding male performer', icon: '🏃‍♂️', special: false },
  { name: 'Best Athlete (Female)', desc: 'Outstanding female performer', icon: '🏃‍♀️', special: false },
  { name: 'Player of the Tournament', desc: 'For major sports like Cricket/Football', icon: '⭐', special: false }
];

export default function Awards() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-500 to-amber-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Awards & Accolades
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up delay-200 px-4">
              Celebrating excellence with prestigious trophies, medals, and certificates
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 sm:py-10 md:py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-500 text-white animate-fade-in-up">
              <CardContent className="p-4 sm:p-6 text-center">
                <Medal className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 mx-auto mb-2 sm:mb-3" />
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">~600</p>
                <p className="text-[10px] sm:text-xs md:text-sm opacity-90">Total Medals</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white animate-fade-in-up delay-100">
              <CardContent className="p-4 sm:p-6 text-center">
                <FileText className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 mx-auto mb-2 sm:mb-3" />
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">1175</p>
                <p className="text-[10px] sm:text-xs md:text-sm opacity-90">Certificates</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-red-600 text-white animate-fade-in-up delay-200">
              <CardContent className="p-4 sm:p-6 text-center">
                <Trophy className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 mx-auto mb-2 sm:mb-3" />
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">6</p>
                <p className="text-[10px] sm:text-xs md:text-sm opacity-90">Major Trophies</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white animate-fade-in-up delay-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <Star className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 mx-auto mb-2 sm:mb-3" />
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">12+</p>
                <p className="text-[10px] sm:text-xs md:text-sm opacity-90">Sports Categories</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Medal Breakdown */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 dark:text-white text-center mb-8 sm:mb-12 animate-fade-in-up">Medal Distribution</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Gold */}
            <Card className="border-0 shadow-xl overflow-hidden animate-fade-in-up dark:bg-gray-800">
              <div className="h-1.5 sm:h-2 bg-gradient-to-r from-yellow-400 to-yellow-600" />
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl sm:text-3xl md:text-4xl">🥇</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1 sm:mb-2">Gold Medals</h3>
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-900 dark:text-white">~200</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">For all event winners</p>
              </CardContent>
            </Card>

            {/* Silver */}
            <Card className="border-0 shadow-xl overflow-hidden animate-fade-in-up delay-100 dark:bg-gray-800">
              <div className="h-1.5 sm:h-2 bg-gradient-to-r from-gray-300 to-gray-500" />
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-gray-200 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl sm:text-3xl md:text-4xl">🥈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-2">Silver Medals</h3>
                <p className="text-4xl font-black text-blue-900 dark:text-white">~200</p>
                <p className="text-sm text-muted-foreground mt-2">For runners-up</p>
              </CardContent>
            </Card>

            {/* Bronze */}
            <Card className="border-0 shadow-xl overflow-hidden dark:bg-gray-800">
              <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-600" />
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-orange-300 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl">🥉</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">Bronze Medals</h3>
                <p className="text-4xl font-black text-blue-900 dark:text-white">~200</p>
                <p className="text-sm text-muted-foreground mt-2">For third place</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <hr className="border-blue-100 dark:border-gray-700 max-w-md mx-auto my-8" />

      {/* Trophy List */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white text-center mb-12">Trophy List</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trophies.map((trophy, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 dark:bg-gray-800 ${
                  trophy.special ? 'ring-2 ring-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{trophy.icon}</span>
                    <div>
                      <h3 className={`font-bold mb-1 ${trophy.special ? 'text-yellow-700 dark:text-yellow-400' : 'text-blue-900 dark:text-white'}`}>
                        {trophy.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{trophy.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Certificates Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-950 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Participation Certificates</h2>
          <p className="text-blue-200 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Every participant and volunteer will receive an official certificate 
            recognizing their contribution to UDAAN 2026.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-yellow-400">1175</p>
                <p className="text-sm text-blue-300 dark:text-gray-400">Total Certificates</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-yellow-400">All</p>
                <p className="text-sm text-blue-300 dark:text-gray-400">Participants + Volunteers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
