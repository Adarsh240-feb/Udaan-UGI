import { Award, GraduationCap, Users, Star, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

// Chief Patron / Chancellor
const chiefPatron = {
  name: 'Dr. Rajesh Kumar Sharma',
  designation: 'Chancellor',
  role: 'Chief Patron',
  image: '/images/organizers/chancellor.jpg',
  message: 'Sports build character, discipline, and teamwork.',
};

// Patrons - Vice Chancellor, Pro-VC
const patrons = [
  {
    name: 'Prof. Anil Kumar Singh',
    designation: 'Vice Chancellor',
    role: 'Patron',
    image: '/images/organizers/vc.jpg',
  },
  {
    name: 'Prof. Meena Kumari',
    designation: 'Pro Vice Chancellor',
    role: 'Patron',
    image: '/images/organizers/provc.jpg',
  },
];

// Organizing Committee - Principals, Directors
const organizingCommittee = [
  {
    name: 'Dr. Suresh Verma',
    designation: 'Principal, UIT',
    role: 'Organizing Chairman',
    image: '/images/organizers/principal-uit.jpg',
    email: 'principal.uit@ugi.edu',
  },
  {
    name: 'Dr. Priya Sharma',
    designation: 'Principal, UCER',
    role: 'Organizing Co-Chairman',
    image: '/images/organizers/principal-ucer.jpg',
    email: 'principal.ucer@ugi.edu',
  },
  {
    name: 'Prof. Ramesh Gupta',
    designation: 'Director, Sports',
    role: 'Event Director',
    image: '/images/organizers/sports-director.jpg',
    email: 'sports@ugi.edu',
  },
];

// Core Coordinators - HODs, Faculty
const coordinators = [
  {
    name: 'Dr. Amit Kumar',
    designation: 'HOD, Computer Science',
    role: 'Technical Coordinator',
    image: '/images/organizers/hod-cs.jpg',
  },
  {
    name: 'Prof. Neha Singh',
    designation: 'HOD, Mechanical',
    role: 'Venue Coordinator (UIT)',
    image: '/images/organizers/hod-mech.jpg',
  },
  {
    name: 'Dr. Vikram Yadav',
    designation: 'HOD, Civil',
    role: 'Venue Coordinator (UCER)',
    image: '/images/organizers/hod-civil.jpg',
  },
  {
    name: 'Prof. Sunita Devi',
    designation: 'HOD, Electronics',
    role: 'Registration Head',
    image: '/images/organizers/hod-ece.jpg',
  },
  {
    name: 'Dr. Mohit Agarwal',
    designation: 'Physical Education Director',
    role: 'Sports Coordinator',
    image: '/images/organizers/pe-director.jpg',
  },
  {
    name: 'Prof. Kavita Sharma',
    designation: 'Dean, Student Welfare',
    role: 'Hospitality Head',
    image: '/images/organizers/dean-sw.jpg',
  },
];

// Student Coordinators
const studentCoordinators = [
  { name: 'Adarsh Kesharwani', role: 'Chief Student Coordinator', department: 'B.Tech CSE' },
  { name: 'Rahul Verma', role: 'Sports Secretary', department: 'B.Tech ME' },
  { name: 'Priya Gupta', role: 'Cultural Secretary', department: 'B.Tech ECE' },
  { name: 'Amit Singh', role: 'Technical Lead', department: 'B.Tech CSE' },
];

const OrganizerCard = ({ person, size = 'medium', showBadge = true }) => {
  const sizeClasses = {
    large: 'w-32 h-32 sm:w-40 sm:h-40',
    medium: 'w-24 h-24 sm:w-32 sm:h-32',
    small: 'w-20 h-20 sm:w-24 sm:h-24',
  };

  return (
    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 overflow-hidden">
      <CardContent className="p-4 sm:p-6 text-center">
        <div className="relative inline-block mb-4">
          <div className={`${sizeClasses[size]} rounded-full overflow-hidden mx-auto ring-4 ring-blue-100 dark:ring-blue-900 group-hover:ring-blue-300 dark:group-hover:ring-blue-700 transition-all`}>
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=3b82f6&color=fff&size=200`;
              }}
            />
          </div>
          {showBadge && (
            <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] sm:text-xs whitespace-nowrap">
              {person.role}
            </Badge>
          )}
        </div>
        <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white mt-4">
          {person.name}
        </h3>
        <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
          {person.designation}
        </p>
        {person.email && (
          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center justify-center gap-1">
            <Mail className="w-3 h-3" />
            {person.email}
          </p>
        )}
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

      {/* Chief Patron Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 mb-3">
              <Award className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Chief Patron</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-md">
              <OrganizerCard person={chiefPatron} size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Patrons Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-3">
              <Star className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Patrons</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {patrons.map((person, index) => (
              <OrganizerCard key={index} person={person} size="medium" />
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500" />

      {/* Organizing Committee Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-3">
              <GraduationCap className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Organizing Committee</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Core Leadership
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizingCommittee.map((person, index) => (
              <OrganizerCard key={index} person={person} size="medium" />
            ))}
          </div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 mb-3">
              <Users className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Faculty Coordinators</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Department Heads & Coordinators
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coordinators.map((person, index) => (
              <OrganizerCard key={index} person={person} size="small" />
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-blue-500" />

      {/* Student Coordinators Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-900 to-purple-900 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-yellow-400 mb-3">
              <Star className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Student Team</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Student Coordinators
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {studentCoordinators.map((student, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-bold text-white">
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-white">{student.name}</h3>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 mt-2">
                    {student.role}
                  </Badge>
                  <p className="text-xs sm:text-sm text-white/60 mt-2">{student.department}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
