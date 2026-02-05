import { Target, Users, Trophy, Zap, Heart, Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const objectives = [
  {
    icon: Users,
    title: 'Unity',
    description: 'UDAAN bridges the gap between different colleges (UIT, UCER, UIM, etc.).',
    color: 'bg-blue-500'
  },
  {
    icon: Target,
    title: 'Fairness',
    description: 'A unique 2-team system for larger colleges ensures equal opportunity for all.',
    color: 'bg-red-500'
  },
  {
    icon: Star,
    title: 'Legacy',
    description: 'UDAAN establishes a standardized annual sporting calendar for UGI.',
    color: 'bg-yellow-500'
  },
  {
    icon: Trophy,
    title: 'Talent Scouting',
    description: 'The event identifies athletes for Zonal and State level representation.',
    color: 'bg-green-500'
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Vision & Objective
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 max-w-3xl mx-auto italic animate-fade-in-up delay-200 px-4">
              "One Group. One Spirit. One Champion."
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16 animate-fade-in-up">
            <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Zap className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4 sm:mb-6">
              What is UDAAN?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-2">
              United Sports Fest 2026 is not just a tournament; it is the <span className="text-red-600 dark:text-red-400 font-semibold">Olympic-style annual sports championship</span> of the United Group of Institutions. For two days, all 5 colleges under the United banner will lock horns to claim the ultimate <span className="text-blue-600 dark:text-blue-400 font-semibold">"General Championship Trophy."</span>
            </p>
          </div>

          {/* Divider */}
          <hr className="border-blue-100 dark:border-gray-700 max-w-md mx-auto mb-10 sm:mb-16" />

          {/* Objectives */}
          <div className="mb-10 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white text-center mb-6 sm:mb-10">UDAAN Objectives</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {objectives.map((obj, index) => {
                const Icon = obj.icon;
                return (
                  <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in-up delay-${(index + 1) * 100} dark:bg-gray-800`}>
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className={`w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 ${obj.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                        <Icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" />
                      </div>
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 dark:text-white mb-2">{obj.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">{obj.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <hr className="border-blue-100 dark:border-gray-700 mb-10 sm:mb-16" />

          {/* The Vision Statement */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-950 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-white animate-fade-in-up">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-red-400 mx-auto mb-4 sm:mb-6 animate-pulse" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">The Vision</h3>
              <p className="text-sm sm:text-base md:text-lg text-blue-200 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 px-2">
                UDAAN creates a platform where students from all United Group colleges come together, 
                compete fairly, and build lasting bonds through the spirit of sportsmanship. 
                The event aims to nurture talent, promote fitness, and establish traditions that will 
                inspire generations of students.
              </p>

              {/* Divider */}
              <hr className="border-blue-800 dark:border-gray-600 max-w-xs mx-auto mb-6 sm:mb-8" />

              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                <div className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/20 dark:hover:bg-gray-600/50 transition-colors">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1">5</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-blue-300 dark:text-gray-400">Colleges United</div>
                </div>
                <div className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/20 dark:hover:bg-gray-600/50 transition-colors">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1">2</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-blue-300 dark:text-gray-400">Days of Action</div>
                </div>
                <div className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/20 dark:hover:bg-gray-600/50 transition-colors">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1">1</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-blue-300 dark:text-gray-400">Champion</div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-blue-100 dark:border-gray-700 my-10 sm:my-16" />

          {/* Key Highlights */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white text-center mb-6 sm:mb-10">Key Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: 'Olympic-Style Format',
                  desc: 'Professional bracket system with Quarter Finals, Semi Finals, and Grand Finals'
                },
                {
                  title: 'Balanced Competition',
                  desc: 'Unique 2-team system for larger colleges ensures fair play for all'
                },
                {
                  title: 'Dual Venue System',
                  desc: 'Events spread across UIT and UCER campuses for optimal management'
                },
                {
                  title: 'Comprehensive Awards',
                  desc: 'Medals, certificates, and prestigious trophies for all winners'
                }
              ].map((item, i) => (
                <div key={i} className={`flex gap-3 sm:gap-4 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up delay-${(i + 1) * 100}`}>
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 dark:text-red-400 font-bold text-sm sm:text-base">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-white mb-1 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
