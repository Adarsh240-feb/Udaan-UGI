import { Link } from 'react-router-dom';
import { 
  Trophy, Calendar, MapPin, Users, ChevronRight, Flame, 
  Target, Zap, Award, BookOpen, Shield, PartyPopper, Radio 
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const sections = [
  { icon: Target, title: 'Vision & Objective', desc: 'Mission and goals of UDAAN', path: '/about', color: 'bg-red-500' },
  { icon: Users, title: 'Participating Teams', desc: 'The 8-team formula', path: '/teams', color: 'bg-blue-500' },
  { icon: MapPin, title: 'Venues', desc: 'UGI campuses', path: '/venues', color: 'bg-green-500' },
  { icon: Trophy, title: 'Tournament Format', desc: 'Knockout system', path: '/tournament', color: 'bg-yellow-500' },
  { icon: Zap, title: 'Sports Events', desc: '12+ sports categories', path: '/sports', color: 'bg-purple-500' },
  { icon: BookOpen, title: 'Rules & Regulations', desc: 'Technical handbook', path: '/rules', color: 'bg-pink-500' },
  { icon: Flame, title: 'Athletics', desc: 'Track & Field events', path: '/athletics', color: 'bg-orange-500' },
  { icon: Award, title: 'Awards', desc: 'Medals & trophies', path: '/awards', color: 'bg-cyan-500' },
  { icon: Shield, title: 'Organizers', desc: 'Roles & responsibilities', path: '/committee', color: 'bg-indigo-500' },
  { icon: PartyPopper, title: 'Ceremony', desc: 'Opening & closing', path: '/ceremony', color: 'bg-rose-500' },
];

const stats = [
  { value: '12+', label: 'Sports' },
  { value: '8', label: 'Teams' },
  { value: '1120+', label: 'Athletes' },
  { value: '2', label: 'Days' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] sm:min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/UGI%20Video%202.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity: 0.55 }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/70 via-blue-900/60 to-red-700/70 z-0" />
        {/* Removed dotted pattern overlay */}

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-red-400/30 rounded-full blur-[100px] animate-pulse z-0" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-400/30 rounded-full blur-[100px] animate-pulse delay-500 z-0" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-2 sm:mb-4 tracking-tight animate-fade-in-up">
            UDAAN
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-blue-100 animate-fade-in-up delay-100">
            UGI SPORTS FEST 2026
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-1 sm:mb-2 animate-fade-in-up delay-200">
            Many Institutes, <span className="text-yellow-400 font-semibold">One Energy</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/70 italic mb-6 sm:mb-8 animate-fade-in-up delay-300">
            "One Group. One Spirit. One Champion."
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full animate-fade-in-left delay-300">
              <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" />
              <span className="text-sm sm:text-base">February 20-21, 2026</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full animate-fade-in-up delay-400">
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" />
              <span className="text-sm sm:text-base">UGI Campus, Naini, Prayagraj</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full animate-fade-in-right delay-500">
              <Trophy className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" />
              <span className="text-sm sm:text-base">8 Teams Competing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in-up delay-500">
            <Link to="/about">
              <Button size="lg" className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 font-semibold hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Udaan
              </Button>
            </Link>
            {/* <Link to="/registration">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 mr-2" />
                Register Now
              </Button>
            </Link> */}
            <Link to="/live-score">
              <Button size="lg" className="w-full sm:w-auto bg-red-600 text-white hover:bg-red-700 font-semibold hover:scale-105 transition-transform">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Check Live Scores
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-16">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> 
      </section>

      {/* Presented By Section
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-2 animate-fade-in-down">Presented By</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 animate-fade-in-up">UNITED GROUP OF INSTITUTIONS</h3>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 animate-fade-in-up delay-100">Greater Noida, Uttar Pradesh</p>
        </div>
      </section> */}

      {/* Table of Contents */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-3 sm:mb-4 animate-fade-in-up">
              Explore <span className="text-red-600 dark:text-red-400">UDAAN</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              Complete information about the Olympic-style annual sports championship
            </p>
          </div>

          {/* Divider */}
          <hr className="border-blue-100 dark:border-gray-700 max-w-md mx-auto mb-8 sm:mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Link key={index} to={section.path}>
                  <Card 
                    className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white dark:bg-gray-800 shadow-md group animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                      <div className={`${section.color} w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-blue-900 dark:text-white mb-1 text-sm sm:text-base">{section.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate">{section.desc}</p>
                      </div>
                      <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Quick Info Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-900 to-blue-950 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                The Ultimate <span className="text-yellow-400">Inter-College</span> Sports Championship
              </h2>
              <p className="text-blue-200 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                United Sports Fest 2026 is not just a tournament; it is the Olympic-style annual sports 
                championship of the United Group of Institutions. For two days, all 5 colleges under the 
                United banner will lock horns to claim the ultimate "General Championship Trophy."
              </p>

              {/* Divider */}
              <hr className="border-blue-800 dark:border-gray-600 my-4 sm:my-6" />

              <div className="space-y-3 sm:space-y-4">
                {[
                  'Unity: UDAAN bridges the gap between different colleges',
                  'Fairness: A unique 2-team system ensures equal opportunity',
                  'Legacy: The event establishes a standardized annual sporting calendar',
                  'Talent Scouting: Athletes are identified for higher level competitions',
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 animate-fade-in-left"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                    <span className="text-blue-100 dark:text-gray-200 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: Trophy, value: '🏅', label: 'Gold, Silver, Bronze' },
                { icon: Award, value: '📜', label: 'Certificates for All' },
                { icon: Users, value: '1120+', label: 'Athletes' },
                { icon: Zap, value: '12+', label: 'Sports Events' },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <item.icon className="w-8 sm:w-10 h-8 sm:h-10 text-yellow-400 mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold mb-1">{item.value}</div>
                  <div className="text-xs sm:text-sm text-blue-300 dark:text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
