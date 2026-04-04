import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Portfolio from './Portfolio';

function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d1117]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        className="flex flex-col items-center"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" 
          alt="Flutter Logo" 
          className="w-32 h-32 object-contain mb-8"
        />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white tracking-widest text-center"
        >
          SENIOR<span className="text-[#02569B] ml-2">PORTFOLIO</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-gray-400 mt-4 text-sm tracking-[0.2em] uppercase"
        >
          Eslam Abd_Elrahman
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" onFinish={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Portfolio />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;