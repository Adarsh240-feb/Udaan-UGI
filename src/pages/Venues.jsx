import { MapPin, Users, Zap, Building, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const venueA = {
  name: 'UIT Campus',
  subtitle: 'The Outdoor Arena',
  description: 'High energy, large crowd events',
  color: 'from-blue-500 to-blue-700',
  mapUrl: 'https://maps.app.goo.gl/obzDrBkn1Gi5MQN2A',
  sports: [
    { name: 'Football', category: 'Boys', icon: '⚽' },
    { name: 'Basketball', category: 'Boys & Girls', icon: '🏀' },
    { name: 'Kabaddi', category: 'Boys & Girls', icon: '🤼' },
    { name: 'Kho-Kho', category: 'Boys & Girls', icon: '🏃' },
    { name: 'Athletics', category: 'Track & Field - Boys & Girls', icon: '🏃‍♂️' },
    { name: 'Tug of War', category: 'Boys & Girls', icon: '🪢' }
  ]
};

const venueB = {
  name: 'UCER Campus',
  subtitle: 'The Strategic Hub',
  description: 'Indoor sports and Cricket field',
  color: 'from-red-500 to-red-700',
  mapUrl: 'https://maps.app.goo.gl/mfWtnFv4sBWxAPXe6',
  sports: [
    { name: 'Cricket', category: 'Boys', icon: '🏏' },
    { name: 'Volleyball', category: 'Boys & Girls', icon: '🏐' },
    { name: 'Badminton', category: 'Boys & Girls', icon: '🏸' },
    { name: 'Table Tennis', category: 'Boys & Girls', icon: '🏓' },
    { name: 'Chess', category: 'Open Category', icon: '♟️' },
    { name: 'Carrom', category: 'Open Category', icon: '🎯' }
  ]
};

export default function Venues() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Venues & Event Mapping
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up delay-200 px-4">
              Two campuses, one championship - optimized for crowd and schedule management
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-6 sm:py-8 bg-white dark:bg-gray-900 border-b border-blue-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-center">
            <div className="flex items-center justify-center gap-2 animate-fade-in-up">
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm sm:text-base text-muted-foreground">2 Campuses</span>
            </div>
            <div className="flex items-center justify-center gap-2 animate-fade-in-up delay-100">
              <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-red-600 dark:text-red-400" />
              <span className="text-sm sm:text-base text-muted-foreground">12+ Sports</span>
            </div>
            <div className="flex items-center justify-center gap-2 animate-fade-in-up delay-200">
              <Users className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm sm:text-base text-muted-foreground">Simultaneous Events</span>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Venues Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Venue A - UIT */}
            <Card className="border-0 shadow-xl overflow-hidden animate-fade-in-up dark:bg-gray-800">
              <div className={`h-2 sm:h-3 bg-gradient-to-r ${venueA.color}`} />
              <CardHeader className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className={`w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${venueA.color} flex items-center justify-center`}>
                    <Building className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 mb-2 text-[10px] sm:text-xs">📍 VENUE A</Badge>
                    <a 
                      href={venueA.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      <CardTitle className="text-lg sm:text-xl md:text-2xl text-blue-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {venueA.name}
                      </CardTitle>
                      <ExternalLink className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <p className="text-sm sm:text-base md:text-lg text-blue-600 dark:text-blue-400 font-medium">{venueA.subtitle}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{venueA.description}</p>
                    <a 
                      href={venueA.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      View on Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <h4 className="font-semibold text-blue-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Sports Events</h4>
                <div className="space-y-2 sm:space-y-3">
                  {venueA.sports.map((sport, index) => (
                    <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-lg sm:text-2xl">{sport.icon}</span>
                        <span className="font-medium text-blue-900 dark:text-white text-xs sm:text-sm md:text-base">{sport.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-[10px] sm:text-xs">{sport.category}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Venue B - UCER */}
            <Card className="border-0 shadow-xl overflow-hidden animate-fade-in-up delay-200 dark:bg-gray-800">
              <div className={`h-2 sm:h-3 bg-gradient-to-r ${venueB.color}`} />
              <CardHeader className="bg-gradient-to-br from-red-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className={`w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${venueB.color} flex items-center justify-center`}>
                    <Building className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 mb-2 text-[10px] sm:text-xs">📍 VENUE B</Badge>
                    <a 
                      href={venueB.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      <CardTitle className="text-lg sm:text-xl md:text-2xl text-blue-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {venueB.name}
                      </CardTitle>
                      <ExternalLink className="w-4 h-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <p className="text-sm sm:text-base md:text-lg text-red-600 dark:text-red-400 font-medium">{venueB.subtitle}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{venueB.description}</p>
                    <a 
                      href={venueB.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-xs sm:text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      View on Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <h4 className="font-semibold text-blue-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Sports Events</h4>
                <div className="space-y-2 sm:space-y-3">
                  {venueB.sports.map((sport, index) => (
                    <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-red-50 dark:bg-red-900/30 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-lg sm:text-2xl">{sport.icon}</span>
                        <span className="font-medium text-blue-900 dark:text-white text-xs sm:text-sm md:text-base">{sport.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-[10px] sm:text-xs">{sport.category}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Why Two Venues */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-blue-900 to-blue-950 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12 animate-fade-in-up">Why Two Venues?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'Crowd Management',
                desc: 'Distributing events across campuses prevents overcrowding and ensures safety',
                icon: '👥'
              },
              {
                title: 'Schedule Optimization',
                desc: 'Run multiple events simultaneously to complete all sports in 2 days',
                icon: '📅'
              },
              {
                title: 'Facility Utilization',
                desc: 'Use specialized facilities - outdoor at UIT, indoor at UCER',
                icon: '🏟️'
              }
            ].map((item, i) => (
              <Card key={i} className={`bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0 hover:bg-white/20 dark:hover:bg-gray-700 transition-colors animate-fade-in-up delay-${(i + 1) * 100}`}>
                <CardContent className="p-4 sm:p-6 text-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 block">{item.icon}</span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-200 dark:text-gray-300 text-xs sm:text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
