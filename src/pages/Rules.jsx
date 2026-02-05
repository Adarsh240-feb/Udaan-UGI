import { BookOpen, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const sportsRules = [
  {
    sport: 'Football',
    icon: '⚽',
    category: 'Boys',
    format: '7-A-Side (Small Goal Post)',
    duration: '20 mins — 5 min Break — 20 mins',
    rules: [
      'Rolling Substitution: Allowed at any time',
      'Offside: NO Offside rule',
      'Restart: Kick-ins only (No throw-ins)',
      'Goalie: Cannot pick up a back-pass from own teammate',
      'Safety: NO Slide Tackles (Immediate Yellow Card)',
      'Cards: 2 Yellow = Red (Player out for current + next match)',
      'Tie-Breaker: 3 Penalty Kicks each → Sudden Death'
    ]
  },
  {
    sport: 'Cricket',
    icon: '🏏',
    category: 'Boys',
    format: 'T-10 (10 Overs per side)',
    duration: 'Strict 45 mins per innings',
    rules: [
      'Bowling Limit: Max 2 overs per bowler',
      'Powerplay: First 2 overs (Max 2 fielders outside circle)',
      'Extras: Free-hit on all No-balls (stepping & height)',
      'Tie-Breaker: Super Over',
      'Byes/Leg Byes: Allowed',
      'Ball Type: Hard Tennis Ball / Leather Ball (based on ground)'
    ]
  },
  {
    sport: 'Volleyball',
    icon: '🏐',
    category: 'Boys & Girls',
    format: 'Best of 3 Sets',
    duration: '25 Points per set (Rally scoring)',
    rules: [
      'Decider set (if needed) is 15 points',
      'Service rotation is mandatory',
      'Libero player is allowed (optional)',
      'Net touch during play is a foul',
      'Line touch during service is a foul'
    ]
  },
  {
    sport: 'Basketball',
    icon: '🏀',
    category: 'Boys & Girls',
    format: '4 Quarters × 10 Minutes',
    duration: 'Running time',
    rules: [
      'Fouls: 5 Personal fouls = Player fouled out',
      'Timeouts: 2 per half',
      'Shot Clock: 24 seconds (Manual count by referee)',
      'Tie-Breaker: 3 minutes Overtime (OT)'
    ]
  },
  {
    sport: 'Kabaddi',
    icon: '🤼',
    category: 'Boys & Girls',
    format: 'Open weight (College level)',
    duration: '15 mins — 5 min break — 15 mins',
    rules: [
      'Raid Time: 30 Seconds strict',
      'Bonus Line: Active when opposition has 6 or more defenders',
      'Super Tackle: 2 Points awarded',
      'Lobby: Active only after a touch'
    ]
  },
  {
    sport: 'Kho-Kho',
    icon: '🏃',
    category: 'Boys & Girls',
    format: '2 Innings',
    duration: '9 minutes per innings',
    rules: [
      'Chaser must say "KHO" loud and clear',
      'Chaser cannot cross the center lane',
      'Early rise from the square is a foul'
    ]
  },
  {
    sport: 'Badminton',
    icon: '🏸',
    category: 'Team Event',
    format: 'Best of 3 Matches',
    duration: 'Singles 1, Doubles, Singles 2',
    rules: [
      'Scoring: 1 Set of 21 Points',
      'Golden Point at 20-20',
      'Feather/Plastic shuttle (Standardize beforehand)'
    ]
  },
  {
    sport: 'Chess',
    icon: '♟️',
    category: 'Rapid',
    format: '15 mins + 10 sec increment',
    duration: 'Or straight 20 mins',
    rules: [
      'Touch-move rule applies',
      'First illegal move = Warning + Extra time to opponent',
      'Second illegal move = Loss of game'
    ]
  }
];

export default function Rules() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-pink-600 to-rose-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Detailed Sports Rules
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up delay-200 px-4">
              Technical Handbook - Official rules for all sports events
            </p>
          </div>
        </div>
      </section>

      {/* Important Note
      <section className="py-6 sm:py-8 bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 sm:gap-4">
            <AlertCircle className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5 sm:mt-1" />
            <div>
              <p className="font-semibold text-yellow-800 dark:text-yellow-300 text-sm sm:text-base">Note for Committee</p>
              <p className="text-yellow-700 dark:text-yellow-400 text-xs sm:text-sm">Copies of these rules must be printed and given to every Team Captain.</p>
            </div>
          </div>
        </div>
      </section> */}

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Rules Grid */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {sportsRules.map((sport, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in-up delay-${((index % 4) + 1) * 100} dark:bg-gray-800`}>
                <CardHeader className="bg-gradient-to-r from-blue-50 to-red-50 dark:from-gray-700 dark:to-gray-700 border-b border-blue-100 dark:border-gray-600 p-3 sm:p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-2xl sm:text-3xl md:text-4xl">{sport.icon}</span>
                      <div>
                        <CardTitle className="text-base sm:text-lg md:text-xl text-blue-900 dark:text-white">{sport.sport}</CardTitle>
                        <Badge variant="secondary" className="text-[10px] sm:text-xs">{sport.category}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 sm:pt-6 p-3 sm:p-4 md:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-2 gap-2 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <p className="text-[10px] sm:text-xs text-muted-foreground">Format</p>
                        <p className="font-medium text-blue-900 dark:text-white text-xs sm:text-sm">{sport.format}</p>
                      </div>
                      <div className="p-2 sm:p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
                        <p className="text-[10px] sm:text-xs text-muted-foreground">Duration</p>
                        <p className="font-medium text-blue-900 dark:text-white text-xs sm:text-sm">{sport.duration}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-blue-900 dark:text-white mb-2 flex items-center gap-2 text-sm sm:text-base">
                        <BookOpen className="w-3 sm:w-4 h-3 sm:h-4" />
                        Rules
                      </p>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {sport.rules.map((rule, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                            <span className="text-red-500 mt-0.5 sm:mt-1">•</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* General Rules */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-blue-900 to-blue-950 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12 animate-fade-in-up">General Guidelines</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Fair Play', desc: "Referee's decision on facts is final" },
              { title: 'Punctuality', desc: 'Teams must report 15 mins before match' },
              { title: 'Uniform', desc: 'Proper sports attire mandatory' },
              { title: 'ID Verification', desc: 'College ID required for all players' },
              { title: 'Substitution', desc: 'Follow sport-specific rules only' },
              { title: 'Conduct', desc: 'Unsportsmanlike behavior = disqualification' }
            ].map((item, i) => (
              <Card key={i} className={`bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0 hover:bg-white/20 dark:hover:bg-gray-700 transition-colors animate-fade-in-up delay-${((i % 3) + 1) * 100}`}>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-bold text-yellow-400 mb-2 text-sm sm:text-base">{item.title}</h3>
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
