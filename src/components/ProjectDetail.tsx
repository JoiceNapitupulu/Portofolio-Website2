import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import catalogImage1 from 'figma:asset/63850803c4932384a9f8aad2940ff350ced93866.png';
import catalogImage2 from 'figma:asset/631c9e115d86cb8b6b5e09293ea09069fa1e51a7.png';
import catalogImage3 from 'figma:asset/6c4ca59a60254dc45f4f1ecae2836d866aaf99d0.png';
import posterGoodFriday from 'figma:asset/5c0b887119761d2732bc4f26bf55414935d8a6c7.png';
import posterEaster from 'figma:asset/a28ca19540f34291ab5450a1226da8ce52e2ec89.png';
import posterKartini from 'figma:asset/7e36d0982bcc500df40bfaad6b1fe089cbcae348.png';
import soraLogoMain from 'figma:asset/9f4b3437e97a05c8a2d6c6697a260772f7148891.png';
import soraLogoElements from 'figma:asset/b4398db50b454ae1b722a3f11af68f59d92f1dad.png';
import pixelArtMain from 'figma:asset/bd177a042d98b716f994a779d02856dc1e24b545.png';
import joydeeLogo from 'figma:asset/b9edba1f80764b85c51923059a2602dd2741e109.png';
import joydeeMockup from 'figma:asset/016ab4a99108d4dae8ce81dc6822ff0b5ed60535.png';
import whooshOnboarding from 'figma:asset/91a36f9481bcf31a56dd23c826707ab48b105a05.png';
import whooshBooking from 'figma:asset/e89dbb84877b479909d516ff0b1bb785c723043b.png';
import whooshPayment from 'figma:asset/e03ff4b322ec97c417e8623f629d57d0ce7d8f52.png';
import crochetPawGloves from 'figma:asset/483aef9dd45ebb5d24b2dedf9ad4941bcd3cbb1b.png';
import crochetBeanie from 'figma:asset/173f0911b868f653fcbb08fa0371ab09f9df4c8d.png';
import crochetBucketHat from 'figma:asset/a53d04b23dd015e7dac4542d3ae55917762359a5.png';
import crochetFingerless from 'figma:asset/880fac0f0c5f638235b459e073bcd4d5583731ac.png';
import crochetPawBlack from 'figma:asset/bff7229fbed342e111621f87d727834f624e99b2.png';
import samosirPoster from 'figma:asset/e146529c98d29f6c630e969a06e67596c595d128.png';
import gsaVideoThumb from 'figma:asset/1bb285bdd6a62947bc159e0e2de65161ad65a9c9.png';

interface Props {
  projectId: string;
  onBack: () => void;
}

const projectData: Record<string, any> = {
  'gsa-video-content': {
    title: 'GSA Educational Video Content - GitHub Documentation Tips',
    category: 'Video Editing • Google Student Ambassador',
    description: 'Fast-paced educational TikTok content created as Google Student Ambassador to help students understand the importance of GitHub documentation and profile optimization.',
    images: [gsaVideoThumb],
    challenge: 'Create engaging short-form video content that educates tech students about GitHub best practices while maintaining viewer attention in TikTok\'s fast-scrolling environment. The content needs to be informative yet entertaining to maximize reach and impact.',
    solution: 'Produced a dynamic video addressing the common question "Males Bikin Dokumentasi?" (Too Lazy to Create Documentation?), combining screen recording, motion graphics, and fast-paced editing:',
    features: [
      'Hook title: "Males Bikin Dokumentasi?" to immediately connect with student struggles',
      'Screen recording demonstration of GitHub profile and documentation',
      'Fast-paced transitions and cuts to maintain engagement',
      'Text overlays with key points for easy comprehension',
      'Real GitHub profile showcase as practical example',
      'Educational content structured for 60-second attention span',
      'Optimized for TikTok vertical format (9:16 aspect ratio)',
      'Background music sync with editing rhythm',
      'Call-to-action encouraging viewers to improve their documentation',
      'Relatable content addressing real developer pain points',
    ],
    tools: ['CapCut'],
    deliverables: [
      'Published TikTok video: @pecugian',
      'Educational content about GitHub documentation importance',
      'Student-friendly tech tips in short-form format',
      'Google Student Ambassador community outreach',
    ],
    impact: 'As a Google Student Ambassador, this content helps bridge the gap between theoretical knowledge and practical skills, encouraging students to maintain proper documentation habits early in their developer journey. The fast-paced editing style resonates with Gen Z audience while delivering valuable educational content.',
    links: [
      { label: 'Watch on TikTok', url: 'https://www.tiktok.com/@pecugian/video/7562430370713570578' },
    ],
  },
  'samosir-innovation-lab': {
    title: 'Samosir Innovation Lab - Smart City Illustration',
    category: 'Illustration Design • PKM Competition',
    description: 'Comprehensive illustration poster showcasing smart city ecosystem for Samosir Island (Lake Toba region). Created for Program Kreativitas Mahasiswa (PKM) competition, featuring integration of technology and local Batak culture.',
    images: [samosirPoster],
    challenge: 'Design an infographic illustration that effectively communicates a complex smart city ecosystem while incorporating cultural elements of Samosir Island, making it accessible for competition judges and stakeholders to understand the technological innovation vision.',
    solution: 'Created a visually compelling poster centered around traditional Batak architecture with interconnected smart city technologies:',
    features: [
      'Central visual: Traditional Batak house (Rumah Adat) symbolizing cultural preservation',
      'Scenic Lake Toba background with mountains representing the actual Samosir location',
      'Nine interconnected smart city technology modules:',
      '  • Big Data & AI Analytics for data-driven decision making',
      '  • IoT Sensor + Lingkungan (Environmental IoT sensors)',
      '  • Digital Marketing Cerdas (Smart Digital Marketing)',
      '  • Aplikasi Mobile Wisata Cerdas (Smart Tourism Mobile App)',
      '  • Decision Support System for strategic planning',
      '  • Platform Data Terpadu Berbasis Cloud & Blockchain (Integrated Data Platform)',
      '  • Augmented Reality (AR) Interaktif for immersive experiences',
      '  • Produksi Konten Budaya Digital (Digital Cultural Content Production)',
      '  • Kewirausahaan Berbasis Budaya Lokal (Local Culture-based Entrepreneurship)',
      'Flowchart-style connectivity showing technology integration',
      'Consistent color palette: teal, navy blue, and natural landscape tones',
      'Icon-based visual language for each technology component',
      'Clean, modern design balanced with cultural authenticity',
    ],
    tools: ['Adobe Illustrator'],
    deliverables: [
      'Full poster illustration for PKM competition submission',
      'Smart city ecosystem visualization',
      'Technology integration flowchart',
      'Cultural heritage integration design',
    ],
    impact: 'The illustration successfully bridges traditional culture with modern technology, presenting a comprehensive vision for transforming Samosir Island into a smart tourism destination. The poster demonstrates understanding of both technical innovation and cultural sensitivity, key elements for sustainable smart city development.',
  },
  'crochet-catalog': {
    title: 'Crochet Product Catalog',
    category: 'Product Design • Small Business',
    description: 'Aesthetic product catalog designs for handmade crochet accessories featuring cat paw gloves, Taylor Swift inspired fingerless gloves, Sailor Moon beanies, and Anya Forger bucket hats. Created to showcase products for social media and online sales.',
    images: [crochetPawGloves, crochetPawBlack, crochetFingerless, crochetBeanie, crochetBucketHat],
    challenge: 'Design eye-catching product catalogs that highlight the cuteness and quality of handmade crochet items while clearly communicating product details, customization options, and pricing in a way that appeals to anime, kawaii culture, and pop music fans.',
    solution: 'Created five distinct catalog designs with consistent branding and aesthetic:',
    features: [
      'Elegant heart-shaped plate presentation creating premium feel',
      'Soft gradient pink-purple background matching kawaii aesthetic',
      'Clean serif typography for product names (Cat paw gloves, Fingerless gloves, Cat beanie, Bucket hat)',
      'Custom color availability badges (paw prints, star patterns, Sailor Moon cats, Anya character icons)',
      'Clear pricing display (only 50k) with decorative star elements',
      'High-quality product photography showing crochet texture and details',
      'Themed inspirations: Taylor Swift Folklore, Sailor Moon (Luna & Artemis cats), and Spy×Family (Anya Forger)',
      'Multiple cat paw glove variants showcasing color customization (pink paws, black with pink pads)',
      'Fingerless glove design with star appliqués inspired by Taylor Swift aesthetic',
      'Consistent visual language across all product catalogs',
    ],
    tools: ['Canva', 'Photo Editing'],
    deliverables: [
      'Cat Paw Gloves catalog - featuring customizable color options (multiple variants)',
      'Black Cat Paw Gloves - black base with pink paw pad details',
      'Fingerless Gloves - Taylor Swift Folklore inspired with star decorations',
      'Cat Beanie catalog - Sailor Moon inspired black and white variants',
      'Bucket Hat catalog - Anya Forger inspired with tiger ear details',
      'Social media ready format with square dimensions',
    ],
    impact: 'The catalog designs successfully showcase the handmade crochet products with a professional yet playful aesthetic that resonates with target customers. The clean presentation and pop culture references (Taylor Swift, anime) make the products highly shareable on social media platforms, appealing to diverse fandoms.',
  },
  'game-topup-catalog': {
    title: 'Game Top-Up Catalog Design',
    category: 'Graphic Design',
    description: 'Professional price catalog designs for game currency top-up services, featuring popular games like Honkai Star Rail, Genshin Impact, and Love and Deepspace.',
    images: [catalogImage1, catalogImage2, catalogImage3],
    challenge: 'Create visually appealing and informative price catalogs that clearly communicate pricing information while maintaining the aesthetic of each game brand.',
    solution: 'Designed three distinct catalog layouts, each featuring:',
    features: [
      'Game character artwork to establish brand identity',
      'Clear pricing tiers with currency icons',
      'Contact information across multiple platforms (WhatsApp, Twitter, Telegram)',
      'Payment method options (OVO, ShopeePay, GoPay, DANA, SeaBank)',
      'Legal transaction indicators (UID-based with invoice)',
      'Consistent purple gradient background for brand cohesion',
    ],
    tools: ['Canva'],
    deliverables: [
      'Honkai Star Rail catalog (Oneiric Shard pricing)',
      'Genshin Impact catalog (Genesis Crystal & Gnostic Hymn pricing)',
      'Love and Deepspace catalog (Genesis Crystal pricing)',
    ],
    impact: 'The catalogs provide a professional and trustworthy appearance for the game top-up service, making it easy for customers to understand pricing and payment options at a glance.',
  },
  'del-programming-posters': {
    title: 'Del Programming Social Media Posters',
    category: 'Graphic Design • Creative Team',
    description: 'Collection of social media posters created as part of the creative team for UKM Del Programming, a campus programming community organization.',
    images: [posterGoodFriday, posterEaster, posterKartini],
    challenge: 'Create engaging and meaningful social media content that represents the organization\'s values while commemorating important cultural and religious events.',
    solution: 'Designed a series of posters with distinct visual styles for different occasions:',
    features: [
      'Good Friday poster with dramatic sunset and three crosses illustration',
      'Easter Sunday poster featuring "He is Risen" message with empty tomb imagery',
      'Kartini Day poster with modern illustration celebrating Indonesian women',
      'Consistent branding with delpro and del logos',
      'Inspirational messages and biblical quotes',
      'Clean typography and thoughtful color palettes',
    ],
    tools: ['Canva'],
    deliverables: [
      'Good Friday commemoration poster',
      'Easter Sunday celebration poster',
      'Kartini Day (Indonesian Women\'s Day) poster',
    ],
    impact: 'The posters successfully engaged the campus community on social media, promoting inclusivity and cultural awareness while strengthening the organization\'s brand presence.',
  },
  'sora-branding': {
    title: 'Sora - Speed Boat Tourism Branding',
    category: 'Logo Design • Startup Project',
    description: 'Complete logo design and brand identity for Sora, a speed boat tourism startup at Lake Toba (Danau Toba). Created as part of entrepreneurship course project.',
    images: [soraLogoMain, soraLogoElements],
    challenge: 'Create a brand identity that authentically represents Batak culture while communicating modern, professional tourism services. The logo needs to balance cultural heritage with contemporary adventure tourism appeal.',
    solution: 'Developed a distinctive logo combining cultural and modern elements:',
    features: [
      'Name "Sora" inspired by the sounds of Lake Toba - waves, wind, and joyful laughter',
      'Batak script (Aksara Batak) integration representing cultural identity and authenticity',
      'Sleek speed boat icon symbolizing speed, efficiency, and modern adventure',
      'Wave motifs within the letterforms representing the flowing narrative of adventure',
      'Navy blue color palette symbolizing the depth and tranquility of Lake Toba',
      'Light blue accents representing light reflections, energy, and water freshness',
      'Professional yet approachable design distinguishing from traditional boats',
    ],
    tools: ['Adobe Illustrator'],
    deliverables: [
      'Main logo design with Batak script integration',
      'Logo elements breakdown (Aksara Batak, speed boat icon, wave patterns)',
      'Color palette specification (navy blue, light blue)',
      'Brand philosophy documentation',
    ],
    impact: 'The logo successfully establishes Sora as a culturally-rooted yet modern tourism brand, creating a memorable identity that honors Batak heritage while appealing to adventure-seeking tourists at Lake Toba.',
    philosophy: {
      name: 'The name "Sora" represents the voice of nature - the rhythm of waves, the whisper of wind, and the joyful laughter of adventurers. It\'s a call to explore the beauty of Lake Toba and create unforgettable memories.',
      batakScript: 'The Batak script is not mere ornament, but a representation of brand identity and authenticity. Its flowing lines symbolize the dynamic narrative and flow of adventure at Lake Toba.',
      speedBoat: 'The sleek speed boat icon represents speed, efficiency, and modern adventure. It\'s a clear visual message that Sora provides exciting, fast, and professional experiences, differentiating from traditional boats.',
      colorPalette: 'The dominant blue palette symbolizes the depth and tranquility of Lake Toba. Dark blue creates a professional and trustworthy impression, while light blue accents represent light reflections, energy, and water freshness. Together, they balance natural serenity with modern service.',
    },
  },
  'pixel-art-youtube': {
    title: 'Pixel Art YouTube Logo',
    category: 'Digital Art • Excel Art',
    description: 'Creative pixel art character designed using Microsoft Excel as the primary tool, created for YouTube channel branding and profile picture.',
    images: [pixelArtMain],
    challenge: 'Create a unique and recognizable YouTube channel logo using unconventional tools. The artwork needed to be pixel-perfect, expressive, and suitable for various sizes from thumbnails to profile pictures.',
    solution: 'Utilized Microsoft Excel\'s cell grid system as a natural pixel art canvas:',
    features: [
      'Excel cells used as individual pixels for precise control',
      'Anime/manga-inspired character design with blue hair',
      'Expressive purple eyes with highlights for personality',
      'Cute and approachable facial expression',
      'Clean black outlines for clarity at small sizes',
      'Limited color palette for consistency (blue, gray, peach, purple)',
      'Pixelated aesthetic that stands out in YouTube\'s platform',
      'Optimized for circular profile picture format',
    ],
    tools: ['Microsoft Excel'],
    deliverables: [
      'High-resolution pixel art character',
      'YouTube profile picture (optimized for circular crop)',
      'Channel branding asset',
      'Exportable PNG format for various uses',
    ],
    impact: 'The unconventional Excel-based approach resulted in a distinctive YouTube logo that showcases creativity and technical skills. The pixel art style is memorable and stands out among typical YouTube channel artwork.',
    uniqueAspect: 'Creating pixel art in Excel demonstrates innovative thinking and mastery of unexpected tools. Each Excel cell becomes a pixel, allowing for precise grid-based design that\'s perfect for retro-style artwork.',
  },
  'joydee-app': {
    title: 'Joydee - Dessert Delivery App',
    category: 'UI/UX Design • Bootcamp Project',
    description: 'Complete mobile app UI/UX design for Joydee, a dessert delivery service featuring signature products like strawberry mousse. Created as part of design bootcamp project.',
    images: [joydeeLogo, joydeeMockup],
    challenge: 'Design an intuitive and delightful mobile ordering experience for a dessert delivery service. The app needed to make the ordering process seamless while showcasing the product appeal and maintaining a sweet, friendly brand identity.',
    solution: 'Created a complete mobile app interface with user-centered design:',
    features: [
      'Clean order review interface with product imagery',
      'Clear pricing and quantity display (IDR 45,000)',
      'Editable shipping and payment details',
      'Visual payment method icons (Mastercard)',
      'Detailed address information display',
      'Order summary with subtotal and total breakdown',
      'Cute mascot character (Joydee bunny) for brand personality',
      'Soft pink color scheme matching dessert theme',
      'Mobile-optimized layouts with proper touch targets',
      'Professional iPhone mockup presentation',
    ],
    tools: ['Figma'],
    deliverables: [
      'Complete app prototype with interactive flows',
      'Order review screen design',
      'Shipping and payment details interface',
      'Joydee brand logo and mascot',
      'High-fidelity mockups in iPhone frame',
    ],
    impact: 'The design successfully creates a delightful user experience that reflects the sweetness of the product. The intuitive interface makes ordering desserts quick and enjoyable, while the cute branding establishes a memorable identity.',
    liveDemo: 'https://www.figma.com/proto/ZrDAwCkeWRblN75Ij1KFR2/JoyDee?node-id=0-1&t=PQhCRUXCDIguFGav-1',
  },
  'whoosh-app': {
    title: 'Whoosh - Train Ticket Booking App',
    category: 'UI/UX Design • High School Final Project',
    description: 'Complete mobile application design for Whoosh high-speed train ticket booking system. Created as final project for Informatics subject in high school, featuring end-to-end user journey from onboarding to payment.',
    images: [whooshOnboarding, whooshBooking, whooshPayment],
    challenge: 'Design a comprehensive train ticket booking application for Indonesia\'s high-speed rail service (Whoosh) that makes the entire booking process - from sign up to payment - intuitive and seamless for first-time users.',
    solution: 'Created a complete user flow with three main sections covering all aspects of the booking experience:',
    features: [
      'Onboarding flow: Loading screen, Sign In/Sign Up with social login options',
      'Personalized dashboard greeting users by name',
      'Ticket selection with route and time options (e.g., Rawa Buaya - Cibiru Hilir)',
      'Interactive seat selection for Economy and Business class',
      'Visual seat map showing available and occupied seats',
      'Multiple payment methods (Mastercard, BCA, Mandiri, OVO, DANA, ShopeePay, GoPay)',
      'Order review with journey details and pricing breakdown',
      'Payment success confirmation with ticket download option',
      'QR code for transaction verification',
      'Consistent green color scheme matching Whoosh brand identity',
    ],
    tools: ['Figma'],
    deliverables: [
      'Complete onboarding screens (Loading, Sign In, Sign Up, Dashboard)',
      'Ticket booking flow (Ticket Selection, Seat Selection for both classes)',
      'Payment features (Review Order, Payment Method, Success, Transaction Details)',
      'Interactive Figma prototype with clickable flows',
      'High-fidelity iPhone mockups',
    ],
    impact: 'The design demonstrates a complete understanding of mobile UX principles and user journey mapping. As a high school final project, it showcases ability to create professional-grade UI/UX solutions for real-world transportation services.',
    liveDemo: 'https://www.figma.com/proto/XM60BbIUaxIHjy90Lgsb4Z/whoosh?t=XZLiJv9ZRQCPZ64r-1',
  },
};

export function ProjectDetail({ projectId, onBack }: Props) {
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6">
        <div className="text-center">
          <h2 className="text-black mb-4">Project not found</h2>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors cursor-hover"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-12">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,200,150,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,150,100,0.1),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-700 hover:text-black mb-8 cursor-hover group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-orange-500 mb-2">{project.category}</p>
          <h1 className="text-black mb-4">{project.title}</h1>
          <p className="text-gray-700 text-lg max-w-3xl">{project.description}</p>
          
          {/* Live Demo Button */}
          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full hover:from-pink-600 hover:to-orange-600 transition-all cursor-hover shadow-lg"
            >
              <ExternalLink size={20} />
              <span>View Live Demo</span>
            </motion.a>
          )}
        </motion.div>

        {/* Project Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 space-y-6"
        >
          {project.images.map((image: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`rounded-2xl overflow-hidden shadow-2xl ${
                projectId === 'joydee-app' ? 'max-w-4xl mx-auto' : ''
              }`}
            >
              <img
                src={image}
                alt={`${project.title} - ${index + 1}`}
                className={`w-full h-auto ${
                  projectId === 'joydee-app' ? 'object-contain' : ''
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Challenge & Solution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-black mb-4">Challenge</h2>
            <p className="text-gray-700 mb-8">{project.challenge}</p>

            <h2 className="text-black mb-4">Solution</h2>
            <p className="text-gray-700 mb-4">{project.solution}</p>
            <ul className="space-y-2">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools & Deliverables */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-black mb-4">Tools Used</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tools.map((tool: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-900 text-white rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>

            <h2 className="text-black mb-4">Deliverables</h2>
            <ul className="space-y-2 mb-8">
              {project.deliverables.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-black mb-4">Impact</h2>
            <p className="text-gray-700">{project.impact}</p>
          </motion.div>
        </div>

        {/* Brand Philosophy Section (for Sora project) */}
        {project.philosophy && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-black mb-8 text-center">Brand Philosophy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-black mb-3">Name Origin</h3>
                <p className="text-gray-700">{project.philosophy.name}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-black mb-3">Batak Script (Aksara Batak)</h3>
                <p className="text-gray-700">{project.philosophy.batakScript}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-black mb-3">Speed Boat Icon</h3>
                <p className="text-gray-700">{project.philosophy.speedBoat}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-black mb-3">Color Palette</h3>
                <p className="text-gray-700">{project.philosophy.colorPalette}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Brand Philosophy Section (for Joydee project) */}
        {project.philosophy && project.title === 'Joydee - Online Store Branding' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-black mb-8 text-center">Brand Philosophy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-black mb-3">Name Origin</h3>
                <p className="text-gray-700">{project.philosophy.name}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-black mb-3">Leaf and Tree Motifs</h3>
                <p className="text-gray-700">{project.philosophy.leafTree}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-black mb-3">Modern Design Elements</h3>
                <p className="text-gray-700">{project.philosophy.modernDesign}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-black mb-3">Color Palette</h3>
                <p className="text-gray-700">{project.philosophy.colorPalette}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Unique Aspect Section (for Excel Pixel Art) */}
        {project.uniqueAspect && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16 bg-gradient-to-br from-purple-50 to-blue-100 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-black mb-4 text-center">Unique Approach</h2>
            <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
              {project.uniqueAspect}
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-12"
        >
          <h2 className="text-black mb-4">Interested in working together?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and creative opportunities.
          </p>
          <button className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors cursor-hover flex items-center gap-2 mx-auto">
            <span>Get in Touch</span>
            <ExternalLink size={20} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}