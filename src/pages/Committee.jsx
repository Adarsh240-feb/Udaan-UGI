import { Award, GraduationCap, Users, Star, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

// Management Committee
const managementCommittee = [
  {
    designation: 'Chairman',
    image: '/images/organizers/chairman.jpg',
  },
  {
    designation: 'President',
    image: '/images/organizers/president.jpg',
  },
  {
    designation: 'Vice Chairman',
    image: '/images/organizers/vice-chairman.jpg',
  },
  {
    designation: 'Senior Vice President',
    image: '/images/organizers/senior-vice-president.jpg',
  },
];

// Principals (UIM, UIP, UIT, UCER, FUGS)
const principals = [
  {
    designation: 'Principal, UIM',
    image: '/images/organizers/principal-uim.jpg',
  },
  {
    designation: 'Principal, UIP',
    image: '/images/organizers/principal-uip.jpg',
  },
  {
    designation: 'Principal, UIT',
    image: '/images/organizers/principal-uit.jpg',
  },
  {
    designation: 'Principal, UCER',
    image: '/images/organizers/principal-ucer.jpg',
  },
  {
    designation: 'Principal, FUGS',
    image: '/images/organizers/principal-fugs.jpg',
  },
];

// Coordinators (UIT, UCER, UIM, UIP, FUGS)
const coordinators = [
  {
    designation: 'Coordinator, UIT',
    image: '/images/organizers/coordinator-uit.jpg',
  },
  {
    designation: 'Coordinator, UCER',
    image: '/images/organizers/coordinator-ucer.jpg',
  },
  {
    designation: 'Coordinator, UIM',
    image: '/images/organizers/coordinator-uim.jpg',
  },
  {
    designation: 'Coordinator, UIP',
    image: '/images/organizers/coordinator-uip.jpg',
  },
  {
    designation: 'Coordinator, FUGS',
    image: '/images/organizers/coordinator-fugs.jpg',
  },
];

// Sports Officers (2)
const sportsOfficers = [
  {
    designation: 'Sports Officer',
    image: '/images/organizers/sports-officer1.jpg',
  },
  {
    designation: 'Sports Officer',
    image: '/images/organizers/sports-officer2.jpg',
  },
];

// Sports Assistant (1)
const sportsAssistants = [
  {
    designation: 'Sports Assistant',
    image: '/images/organizers/sports-assistant.jpg',
  },
];

const OrganizerCard = ({ person, size = 'medium', showBadge = true }) => {
  const sizeClasses = {
    large: 'w-32 h-32 sm:w-40 sm:h-40',
    medium: 'w-24 h-24 sm:w-32 sm:h-32',
    small: 'w-20 h-20 sm:w-24 sm:h-24',
  };

  return (
    <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden rounded-3xl">
      <CardContent className="p-6 sm:p-8 flex flex-col items-center justify-center text-center">
        <div className="relative mb-4">
          <div className={`${sizeClasses[size]} rounded-full overflow-hidden mx-auto ring-4 ring-blue-300 dark:ring-blue-900 group-hover:ring-purple-400 dark:group-hover:ring-blue-700 transition-all shadow-lg`}>
            <img
              src={person.image}
              alt={person.role}
              className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-300"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.role)}&background=3b82f6&color=fff&size=200`;
              }}
            />
          </div>
          {/* Role badge removed as per user request */}
        </div>
        <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 font-semibold mt-2 tracking-wide uppercase">
          {person.designation}
        </p>
        {person.message && (
          <p className="text-xs text-gray-600 dark:text-gray-300 mt-3 italic">
            "{person.message}"
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default function Committee() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Meet Our Team</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Organizing Committee
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up delay-200 px-4">
              The visionary leaders and dedicated coordinators behind UDAAN 2026
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-blue-500" />

      {/* Management Committee Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            {/* Section header removed as per user request */}
            <h2 className="text-3xl sm:text-4xl font-akira text-gray-900 dark:text-white font-extrabold mt-1">Management Committee</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {managementCommittee.map((person, index) => (
              <OrganizerCard key={index} person={person} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Principals Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            {/* Section header removed as per user request */}
            <h2 className="text-3xl sm:text-4xl font-akira text-gray-900 dark:text-white font-extrabold mt-1">Principals</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {principals.map((person, index) => (
              <OrganizerCard key={index} person={person} size="medium" />
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500" />

      {/* Coordinators Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            {/* Section header removed as per user request */}
            <h2 className="text-3xl sm:text-4xl font-akira text-gray-900 dark:text-white font-extrabold mt-1">Event Coordinators</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coordinators.map((person, index) => (
              <OrganizerCard key={index} person={person} size="small" />
            ))}
          </div>
        </div>
      </section>

      {/* Sports Officers Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            {/* Section header removed as per user request */}
            <h2 className="text-3xl sm:text-4xl font-akira text-gray-900 dark:text-white font-extrabold mt-1">Sports Officers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {sportsOfficers.map((person, index) => (
              <OrganizerCard key={index} person={person} size="medium" />
            ))}
          </div>
        </div>
      </section>

      {/* Sports Assistant Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            {/* Section header removed as per user request */}
            <h2 className="text-3xl sm:text-4xl font-akira text-gray-900 dark:text-white font-extrabold mt-1">Sports Assistant</h2>
          </div>
          <div className="flex justify-center">
            {sportsAssistants.map((person, index) => (
              <OrganizerCard key={index} person={person} size="medium" />
            ))}
          </div>
        </div>
      </section>
      <div className="h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-blue-500" />
    </div>
  );
}
