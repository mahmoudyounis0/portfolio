import React, { useState, useEffect, lazy, Suspense } from "react";
import "./assets/styles/main.css";
import "aos/dist/aos.css";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import DefaultLayout from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import Skills from "./pages/Skills";
import { AnimatePresence, motion } from "framer-motion";

const Works = lazy(() => import("./components/Works"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
      <div className="h-full bg-morning transition-all duration-150" style={{ width: `${progress * 100}%` }} />
    </div>
  );
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    AOS.init({ disable: prefersReducedMotion });
    if (!prefersReducedMotion) AOS.refresh();
  }, []);
  
  return (
    <div>
      <ScrollProgress />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-primary focus:z-50">
        Skip to content
      </a>

      <Suspense fallback={<div className="flex items-center justify-center h-screen text-primary font-mono">Loading...</div>}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="projects" element={<PageTransition><Works /></PageTransition>} />
              <Route path="skill" element={<PageTransition><Skills /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;
