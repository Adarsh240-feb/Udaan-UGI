import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-8 sm:py-12 bg-gradient-to-b from-blue-900 to-blue-950 dark:from-gray-900 dark:to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 sm:mb-4">
              <img 
                src="/images/udaan-logo-optimized.png" 
                alt="UDAAN Logo" 
                loading="eager"
                className="w-14 sm:w-16 h-14 sm:h-16 object-contain"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">UDAAN</h3>
                <p className="text-xs sm:text-sm text-blue-300 dark:text-blue-400">UGI SPORTS FEST 2026</p>
              </div>
            </div>
            <p className="text-blue-200 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 max-w-md mx-auto sm:mx-0">
              The Olympic-style annual sports championship of United Group of Institutions. 
              Many Institutes, One Energy.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-300 dark:text-blue-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>February 20-21, 2026</span>
            </div>
          </div>

          {/* Divider for Mobile */}
          <div className="col-span-1 sm:hidden">
            <hr className="border-blue-800 dark:border-gray-700" />
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Quick Links</h4>
            <div className="space-y-2">
              {[
                { path: '/about', label: 'About Udaan' },
                { path: '/teams', label: 'Participating Teams' },
                { path: '/venues', label: 'Venues' },
                { path: '/rules', label: 'Sports Rules' },
                { path: '/registration', label: 'Registration' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-blue-300 dark:text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-blue-300 dark:text-gray-400 text-sm">
              <div className="flex items-start justify-center sm:justify-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>United Group of Institutions , Prayagraj</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="w-4 h-4" />
                <span>sports@ugi.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-blue-800 dark:border-gray-700 mb-6 sm:mb-8" />

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-blue-400 dark:text-gray-500 text-xs sm:text-sm">
            © 2026 UDAAN - United Group of Institutions. All rights reserved.
          </p>
          <p className="text-blue-500 dark:text-gray-600 text-[10px] sm:text-xs mt-2">
            "One Group. One Spirit. One Champion."
          </p>
        </div>
      </div>
    </footer>
  );
}
