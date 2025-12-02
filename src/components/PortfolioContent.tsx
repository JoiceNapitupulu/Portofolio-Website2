import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import exclamationImage from 'figma:asset/7f2611fb6f16c13922865d4d6fad3cbea0d42bc1.png';
import catalogImage from 'figma:asset/63850803c4932384a9f8aad2940ff350ced93866.png';
import posterGoodFriday from 'figma:asset/5c0b887119761d2732bc4f26bf55414935d8a6c7.png';
import soraLogo from 'figma:asset/9f4b3437e97a05c8a2d6c6697a260772f7148891.png';
import pixelArt from 'figma:asset/bd177a042d98b716f994a779d02856dc1e24b545.png';
import joydeePreview from 'figma:asset/016ab4a99108d4dae8ce81dc6822ff0b5ed60535.png';
import whooshPreview from 'figma:asset/91a36f9481bcf31a56dd23c826707ab48b105a05.png';
import crochetPawGloves from 'figma:asset/483aef9dd45ebb5d24b2dedf9ad4941bcd3cbb1b.png';
import samosirPoster from 'figma:asset/e146529c98d29f6c630e969a06e67596c595d128.png';
import gsaVideoThumb from 'figma:asset/1bb285bdd6a62947bc159e0e2de65161ad65a9c9.png';

interface Props {
  onProjectClick: (projectId: string) => void;
}

const projects = [
  {
    id: 'whoosh-app',
    title: 'Whoosh Train Booking',
    category: 'UI/UX Design • High School Final Project',
    description: 'Complete train ticket booking app for Whoosh high-speed rail service',
    image: whooshPreview,
    type: 'mobile',
  },
  {
    id: 'joydee-app',
    title: 'Joydee App',
    category: 'UI/UX Design • Bootcamp Project',
    description: 'Mobile app design for dessert delivery service',
    image: joydeePreview,
    type: 'mobile',
  },
  {
    id: 'crochet-catalog',
    title: 'Crochet Product Catalog',
    category: 'Product Design • Small Business',
    description: 'Aesthetic product catalog for handmade crochet accessories',
    image: crochetPawGloves,
    type: 'design',
  },
  {
    id: 'game-topup-catalog',
    title: 'Game Top-Up Catalog',
    category: 'Graphic Design',
    description: 'Price catalog design for game currency top-up service',
    image: catalogImage,
    type: 'design',
  },
  {
    id: 'gsa-video-content',
    title: 'GSA Educational Content',
    category: 'Video Editing • Google Student Ambassador',
    description: 'Fast-paced educational video content about GitHub documentation for tech students',
    image: gsaVideoThumb,
    type: 'design',
    externalLink: 'https://www.tiktok.com/@pecugian/video/7562430370713570578',
  },
  {
    id: 'samosir-innovation-lab',
    title: 'Samosir Innovation Lab',
    category: 'Illustration • PKM Competition',
    description: 'Smart city illustration poster for Program Kreativitas Mahasiswa competition',
    image: samosirPoster,
    type: 'design',
  },
  {
    id: 'del-programming-posters',
    title: 'Del Programming Posters',
    category: 'Graphic Design • Creative Team',
    description: 'Social media posters for UKM Del Programming campus organization',
    image: posterGoodFriday,
    type: 'design',
  },
  {
    id: 'sora-branding',
    title: 'Sora Branding',
    category: 'Logo Design • Startup Project',
    description: 'Logo and brand identity for Danau Toba speed boat tourism startup',
    image: soraLogo,
    type: 'design',
  },
  {
    id: 'pixel-art-youtube',
    title: 'Pixel Art YouTube Logo',
    category: 'Digital Art • Excel Art',
    description: 'Pixel art character created using Excel for YouTube channel branding',
    image: pixelArt,
    type: 'design',
  },
];

export function PortfolioContent({ onProjectClick }: Props) {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<string | number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const eyes = document.querySelector('.eyes-container');
    if (!eyes) return;

    const rect = eyes.getBoundingClientRect();
    const eyesCenterX = rect.left + rect.width / 2;
    const eyesCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - eyesCenterY, e.clientX - eyesCenterX);
    const distance = Math.min(8, Math.hypot(e.clientX - eyesCenterX, e.clientY - eyesCenterY) / 40);

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    setEyePosition({ x, y });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-12"
      onMouseMove={handleMouseMove}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,200,150,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,150,100,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Eyes */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-8 mb-8">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-black">Hi! I'm </span>
              <span className="italic text-black">Joice</span>
              <span className="text-black">, and this is </span>
              <span className="italic bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                what's in my portfolio.
              </span>
            </motion.h1>
          </div>

          {/* Animated Eyes - Smaller */}
          <motion.div
            className="eyes-container flex items-center justify-center gap-3 mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          >
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className="relative w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-md"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-1 bg-white rounded-full">
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-5 h-5 bg-black rounded-full"
                    style={{
                      x: eyePosition.x,
                      y: eyePosition.y,
                      translateX: '-50%',
                      translateY: '-50%',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Exclamation marks image */}
            <motion.img
              src={exclamationImage}
              alt="Exclamation"
              className="w-10 h-auto ml-2"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: 'spring' }}
            />
          </motion.div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.8 + index * 0.1,
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group cursor-hover"
              onClick={() => {
                if ('externalLink' in project && project.externalLink) {
                  window.open(project.externalLink, '_blank', 'noopener,noreferrer');
                } else if (typeof project.id === 'string') {
                  onProjectClick(project.id);
                }
              }}
            >
              <motion.div
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-gray-900 ${
                  project.type === 'mobile' ? 'aspect-[9/16]' : project.type === 'design' ? 'aspect-square' : 'aspect-[9/14]'
                }`}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ perspective: '1000px' }}
              >
                {/* Phone/Screen notch for mobile */}
                {project.type === 'mobile' && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                )}

                {typeof project.image === 'string' && project.image.startsWith('http') ? (
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-orange-400 mb-1">{project.category}</p>
                  <h3 className="text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-white text-black rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center gap-1">
                      <ExternalLink size={14} />
                      {'externalLink' in project ? 'Watch Video' : 'View'}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl text-black mb-6">About Me</h2>
          <p className="text-gray-700 mb-8 text-lg">
            I'm a passionate designer and developer who loves creating beautiful, functional digital experiences. 
            With expertise in UI/UX design, web development, and branding, I bring ideas to life through thoughtful design and clean code.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {[
              { icon: Mail, href: 'mailto:joice@example.com', label: 'Email', color: 'hover:bg-orange-500' },
              { icon: Linkedin, href: 'https://www.linkedin.com/m/in/jooicean/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
              { icon: Github, href: 'https://github.com/JoiceNapitupulu', label: 'GitHub', color: 'hover:bg-gray-800' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-gray-900 text-white rounded-full ${social.color} transition-all cursor-hover group`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-center text-gray-500 pb-8"
        >
          <p>© 2025 Joice Portfolio. Made with ♥</p>
        </motion.div>
      </div>
    </div>
  );
}