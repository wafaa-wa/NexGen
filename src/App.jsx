import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { LinksData } from './Data/LinksData';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopBarLoader from './components/TopBarLoader/TopBarLoader';

function App() {
  const location = useLocation();
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    setShowBar(true);
    const timeout = setTimeout(() => setShowBar(false), 1500);
    return () => clearTimeout(timeout);
  }, [location.key]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const Home = lazy(() => import('./pages/Home/Home'));
  const Services = lazy(() => import('./pages/Services/Services'));
  const Projects = lazy(() => import('./pages/Projects/Projects'));
  const About = lazy(() => import('./pages/About/About'));
  const Careers = lazy(() => import('./pages/Careers/Careers'));
  const Blogs = lazy(() => import('./pages/Blogs/Blogs'));
  const Contact = lazy(() => import('./pages/Contact/Contact'));
  const BlogsOpen = lazy(() => import('./pages/BlogsOpen/BlogsOpen'));

  return (
    <>
      <NavBar Logo="/images/NavBar/Logo.webp" items={LinksData} />
      <ScrollToTop />
      {showBar && <TopBarLoader blur allowClicks={false} />}
      <Suspense fallback={null}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blog/:id' element={<BlogsOpen />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;