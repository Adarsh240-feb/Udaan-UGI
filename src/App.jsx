import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Teams from './pages/Teams.jsx';
import Venues from './pages/Venues.jsx';
import Tournament from './pages/Tournament.jsx';
import Sports from './pages/Sports.jsx';
import Rules from './pages/Rules.jsx';
import Athletics from './pages/Athletics.jsx';
import Awards from './pages/Awards.jsx';
import Committee from './pages/Committee.jsx';
import Registration from './pages/Registration.jsx';
import Ceremony from './pages/Ceremony.jsx';
import Admin from './pages/Admin.jsx';
import LiveScore from './pages/LiveScore.jsx';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <ScrollToTop />
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/tournament" element={<Tournament />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/athletics" element={<Athletics />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/ceremony" element={<Ceremony />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/live-score" element={<LiveScore />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
