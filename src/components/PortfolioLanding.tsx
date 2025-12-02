import { motion } from 'motion/react';
import { useState } from 'react';
import exclamationImage from 'figma:asset/7f2611fb6f16c13922865d4d6fad3cbea0d42bc1.png';
import folderImage from 'figma:asset/c694b73a25fc1656ca4e4db492e28414c9bb556d.png';

interface Props {
  onOpen: () => void;
}

export function PortfolioLanding({ onOpen }: Props) {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const eyes = document.querySelector('.eyes-container');
    if (!eyes) return;

    const rect = eyes.getBoundingClientRect();
    const eyesCenterX = rect.left + rect.width / 2;
    const eyesCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - eyesCenterY, e.clientX - eyesCenterX);
    const distance = Math.min(12, Math.hypot(e.clientX - eyesCenterX, e.clientY - eyesCenterY) / 30);

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    setEyePosition({ x, y });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,200,150,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,150,100,0.1),transparent_50%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="text-black">Hi! I'm </span>
            <span className="italic text-black">Joice</span>
            <span className="text-black">, and this is </span>
            <span className="italic bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              what's in my portfolio.
            </span>
          </h1>
        </motion.div>

        {/* Animated Eyes */}
        <motion.div
          className="eyes-container flex items-center justify-center gap-4 mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="relative w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <div className="absolute inset-2 bg-white rounded-full">
                <motion.div
                  className="absolute top-1/2 left-1/2 w-8 h-8 bg-black rounded-full"
                  style={{
                    x: eyePosition.x,
                    y: eyePosition.y,
                    translateX: '-50%',
                    translateY: '-50%',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Exclamation marks image */}
          <motion.img
            src={exclamationImage}
            alt="Exclamation"
            className="w-16 h-auto ml-4"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: 'spring' }}
          />
        </motion.div>

        {/* Folder Image - Clickable */}
        <motion.div
          className="inline-block cursor-hover"
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
          whileHover={{ scale: 1.1, rotateY: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
        >
          <div className="relative group">
            {/* Folder stack effect */}
            <motion.div
              className="absolute -top-3 -left-3 w-96 h-80 opacity-40"
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: -10, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img src={folderImage} alt="Folder stack" className="w-full h-full object-contain transform -rotate-6" />
            </motion.div>
            <motion.div
              className="absolute -top-1.5 -left-1.5 w-96 h-80 opacity-60"
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: -5, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src={folderImage} alt="Folder stack" className="w-full h-full object-contain transform -rotate-3" />
            </motion.div>
            
            {/* Main folder */}
            <div className="relative w-96 h-80 drop-shadow-2xl">
              <img src={folderImage} alt="Portfolio Folder" className="w-full h-full object-contain" />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none"
                initial={{ x: '-100%', skewX: -20 }}
                animate={{ x: '200%' }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </div>

            {/* Click instruction */}
            <motion.div
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <motion.p
                className="text-gray-600"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Click to open →
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}