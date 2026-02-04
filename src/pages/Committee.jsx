import { Users, Shield, Briefcase, Megaphone, Heart, Camera, ClipboardList } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const roles = [
  {
    title: 'Event Director',
    icon: Shield,
    color: 'from-purple-500 to-purple-700',
    responsibilities: ['Overall supervision', 'Final decision maker', 'Crisis management'],
    priority: 'Critical'
  },
  {
    title: 'Venue Commanders',
    subtitle: '(2 Heads)',
    icon: Briefcase,
    color: 'from-blue-500 to-blue-700',
    responsibilities: [
      'UIT Head: Manages all outdoor sports, crowd control at UIT',
      'UCER Head: Manages indoor sports, hospitality at UCER'
    ],
    priority: 'Critical'
  },
  {
    title: 'Technical Committee',
    icon: ClipboardList,
    color: 'from-green-500 to-green-700',
    responsibilities: ['Referees coordination', 'Fixtures management', 'Scoring disputes resolution'],
    priority: 'High'
  },
  {
    title: 'Logistics & Inventory',
    icon: Briefcase,
    color: 'from-orange-500 to-orange-700',
    responsibilities: ['Balls, bats, nets management', 'Water supply', 'Lime powder & equipment'],
    priority: 'High'
  },
  {
    title: 'Registration & Data',
    icon: ClipboardList,
    color: 'from-cyan-500 to-cyan-700',
    responsibilities: ['Checking college ID cards', 'Verifying team lists', 'No outsiders allowed'],
    priority: 'High'
  },
  {
    title: 'Medical & First Aid',
    icon: Heart,
    color: 'from-red-500 to-red-700',
    responsibilities: ['Managing physio desk', 'Ambulance coordination', 'Emergency response'],
    priority: 'Critical'
  },
  {
    title: 'Media & Branding',
    icon: Camera,
    color: 'from-pink-500 to-pink-700',
    responsibilities: ['Photography & Videography', 'Social Media updates', 'Scoreboard updates'],
    priority: 'Medium'
  }
];

export default function Committee() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Committee Roles
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up delay-200 px-4">
              Operational Roles & Responsibilities - Who Does What
            </p>
          </div>
        </div>
      </section>

      {/* Urgent Note */}
      <section className="py-6 sm:py-8 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4 justify-center">
            <Megaphone className="w-5 sm:w-6 h-5 sm:h-6 text-red-600 dark:text-red-400 animate-wiggle" />
            <p className="font-semibold text-red-800 dark:text-red-300 text-sm sm:text-base text-center">
              Heads need to be assigned for these departments immediately!
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Roles Grid */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in-up delay-${((index % 3) + 1) * 100} dark:bg-gray-800`}>
                  <CardHeader className="pb-2 p-4 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center`}>
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <Badge 
                        variant={role.priority === 'Critical' ? 'destructive' : role.priority === 'High' ? 'default' : 'secondary'}
                        className="text-[10px] sm:text-xs"
                      >
                        {role.priority}
                      </Badge>
                    </div>
                    <CardTitle className="text-base sm:text-lg text-blue-900 dark:text-white mt-2 sm:mt-3">
                      {role.title}
                      {role.subtitle && <span className="text-xs sm:text-sm font-normal text-muted-foreground ml-1 sm:ml-2">{role.subtitle}</span>}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="space-y-1.5 sm:space-y-2">
                      {role.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="text-blue-500 mt-0.5 sm:mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Organization Chart Summary */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-blue-900 to-blue-950 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12 animate-fade-in-up">Command Structure</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Top Level */}
            <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in-up">
              <Card className="bg-gradient-to-r from-yellow-400 to-yellow-600 border-0 text-blue-900">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Shield className="w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-1 sm:mb-2" />
                  <p className="font-bold text-sm sm:text-base md:text-lg">Event Director</p>
                  <p className="text-xs sm:text-sm opacity-80">Supreme Authority</p>
                </CardContent>
              </Card>
            </div>

            {/* Second Level */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0 animate-fade-in-up delay-100">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Users className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 mx-auto mb-1 sm:mb-2" />
                  <p className="font-bold text-sm sm:text-base">UIT Venue Commander</p>
                  <p className="text-xs sm:text-sm text-blue-300 dark:text-gray-400">Outdoor Sports & Crowd</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0 animate-fade-in-up delay-200">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Users className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 mx-auto mb-1 sm:mb-2" />
                  <p className="font-bold text-sm sm:text-base">UCER Venue Commander</p>
                  <p className="text-xs sm:text-sm text-blue-300 dark:text-gray-400">Indoor Sports & Hospitality</p>
                </CardContent>
              </Card>
            </div>

            {/* Third Level */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
              {['Technical', 'Logistics', 'Registration', 'Medical', 'Media'].map((dept, i) => (
                <Card key={i} className={`bg-white/5 dark:bg-gray-700/30 border-white/10 dark:border-gray-600 animate-fade-in-up delay-${(i + 1) * 100}`}>
                  <CardContent className="p-2 sm:p-4 text-center">
                    <p className="text-[10px] sm:text-xs md:text-sm font-medium">{dept}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
