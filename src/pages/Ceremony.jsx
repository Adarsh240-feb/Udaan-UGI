import React from 'react';
import { Clock, Calendar, Flag, Flame, Music, Trophy, Users, PartyPopper, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const openingEvents = [
  { time: '9:00 AM', event: 'Assembly & National Anthem', icon: Music },
  { time: '9:10 AM', event: 'Welcome Address by Event Director', icon: Users },
  { time: '9:20 AM', event: 'March Past (All 8 Teams)', icon: Flag },
  { time: '9:40 AM', event: 'Torch Relay & Lighting of UDAAN Flame', icon: Flame },
  { time: '9:50 AM', event: 'Athlete\'s Oath (Captain\'s Pledge)', icon: Award },
  { time: '10:00 AM', event: 'Felicitation & Inaugural Match Kickoff', icon: Trophy }
];

const closingEvents = [
  { time: '5:00 PM', event: 'Final Match of the Day (Basketball / Football)', icon: Trophy },
  { time: '6:00 PM', event: 'Closing Assembly', icon: Users },
  { time: '6:10 PM', event: 'Prize Distribution (Medals, Certificates)', icon: Award },
  { time: '6:40 PM', event: 'Trophy Presentation to Winner College', icon: Trophy },
  { time: '6:50 PM', event: 'Vote of Thanks + Extinguishing of UDAAN Flame', icon: Flame },
];

export default function Ceremony() {
  // Auto-scroll effect
  React.useEffect(() => {
    let scrollInterval;
    let direction = 'down';
    const scrollStep = 2; // px per tick
    const scrollDelay = 30; // ms per tick
    function scrollLoop() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (direction === 'down') {
        if (window.scrollY < maxScroll) {
          window.scrollBy(0, scrollStep);
        } else {
          direction = 'up';
        }
      } else {
        if (window.scrollY > 0) {
          window.scrollBy(0, -scrollStep);
        } else {
          direction = 'down';
        }
      }
    }
    scrollInterval = setInterval(scrollLoop, scrollDelay);
    return () => clearInterval(scrollInterval);
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-2">
              Opening & Closing Ceremony
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up delay-200 px-4">
              The Grand Beginning & Glorious Finale
            </p>
          </div>
        </div>
      </section>

      {/* Opening Ceremony */}
      <section className="py-10 sm:py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <Badge className="mb-3 sm:mb-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-0 text-[10px] sm:text-xs">Day 1</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-2">Opening Ceremony</h2>
            <p className="text-muted-foreground text-xs sm:text-sm">20th February 2026 • 9:00 AM – 10:00 AM</p>
            <p className="text-blue-600 font-medium mt-1 sm:mt-2 text-xs sm:text-sm">Venue: UCER Campus</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-900/20 mb-6 sm:mb-8 animate-fade-in-up dark:bg-gray-800">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-green-700 dark:text-green-400 text-center text-base sm:text-lg md:text-xl">Schedule of Events</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3 sm:space-y-4">
                  {openingEvents.map((item, i) => (
                    <div key={i} className={`flex items-center gap-2 sm:gap-4 p-2 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-up delay-${(i % 4 + 1) * 100}`}>
                      <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-green-800 text-xs sm:text-sm md:text-base truncate">{item.event}</p>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300 text-[10px] sm:text-xs flex-shrink-0">
                        <Clock className="w-2 sm:w-3 h-2 sm:h-3 mr-1" />
                        {item.time}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="border-0 shadow-md bg-yellow-50 dark:bg-yellow-900/20 animate-fade-in-up dark:border dark:border-yellow-800">
                <CardContent className="p-4 sm:p-6">
                  <Flag className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-600 dark:text-yellow-400 mb-3 sm:mb-4" />
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 text-sm sm:text-base">March Past</h3>
                  <p className="text-xs sm:text-sm text-yellow-700 dark:text-yellow-400">All 8 teams march with college flags & banners, showcasing unity and sportsmanship.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md bg-orange-50 dark:bg-orange-900/20 animate-fade-in-up delay-100 dark:border dark:border-orange-800">
                <CardContent className="p-4 sm:p-6">
                  <Flame className="w-6 sm:w-8 h-6 sm:h-8 text-orange-600 dark:text-orange-400 mb-3 sm:mb-4" />
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2 text-sm sm:text-base">UDAAN Flame</h3>
                  <p className="text-xs sm:text-sm text-orange-700 dark:text-orange-400">A selected athlete lights the ceremonial flame, symbolizing the spirit of competition.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Athlete's Oath */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Athlete's Oath</h2>
            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <blockquote className="text-lg md:text-xl italic leading-relaxed">
                  "In the name of all the athletes, I promise that we shall take part in this festival,
                  respecting and abiding by the rules, in the true spirit of sportsmanship,
                  for the glory of sport and honor of our college."
                </blockquote>
                <p className="mt-6 text-blue-200 dark:text-gray-400">— Recited by Team Captains</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <hr className="border-blue-100 dark:border-gray-700 max-w-md mx-auto my-8" />

      {/* Closing Ceremony */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-0">Day 2</Badge>
            <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-2">Closing Ceremony</h2>
            <p className="text-muted-foreground">21st February 2026 • 5:00 PM – 7:00 PM</p>
            <p className="text-purple-600 dark:text-purple-400 font-medium mt-2">Venue: Main Ground, UIT Campus</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-900/20 mb-8 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-purple-700 dark:text-purple-400 text-center">Schedule of Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {closingEvents.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-purple-800">{item.event}</p>
                      </div>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-300">
                        <Clock className="w-3 h-3 mr-1" />
                        {item.time}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Highlights */}
      <section className="py-16 bg-gradient-to-br from-yellow-500 to-orange-500 dark:from-yellow-600 dark:to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ceremony Highlights</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0 text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">800+</h3>
                <p className="text-white/80">Athletes Participating</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0 text-center">
              <CardContent className="p-6">
                <Flag className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">8</h3>
                <p className="text-white/80">Teams March Past</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0 text-center">
              <CardContent className="p-6">
                <Trophy className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">🏆</h3>
                <p className="text-white/80">Medals for All Winners</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0 text-center">
              <CardContent className="p-6">
                <PartyPopper className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">1</h3>
                <p className="text-white/80">Grand Champion Trophy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <hr className="border-blue-100 dark:border-gray-700 max-w-md mx-auto my-8" />

      {/* Call to Action */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-6">Be Part of History</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for two days of incredible sports, camaraderie, and celebration. 
            The UDAAN Sports Fest promises to be an unforgettable experience for all athletes and spectators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="border-0 shadow-md bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-900/20 px-8 py-4 dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="font-medium text-green-800 dark:text-green-300">20-21 February 2026</span>
              </div>
            </Card>
            <Card className="border-0 shadow-md bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/20 px-8 py-4 dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <Flag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-blue-800 dark:text-blue-300">UGI Campus, Naini, Prayagraj</span>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
