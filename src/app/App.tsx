import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/navigation';
import { ScrollProgress } from './components/scroll-progress';
import { BackToTop } from './components/back-to-top';
import { EasterEgg } from './components/easter-egg';
import { Home } from './pages/home';
import { Work } from './pages/work';
import { CaseStudy } from './pages/case-study';
import { About } from './pages/about';
import { Contact } from './pages/contact';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/work" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Work />
            </motion.div>
          } 
        />
        <Route 
          path="/work/:id" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CaseStudy />
            </motion.div>
          } 
        />
        <Route 
          path="/about" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <About />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Contact />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <ScrollProgress />
        <BackToTop />
        <EasterEgg />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
