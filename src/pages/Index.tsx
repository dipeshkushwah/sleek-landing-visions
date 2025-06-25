
import React from 'react';
import Header from '@/components/Header';
import DesignCard from '@/components/DesignCard';

const designInspiration = [
  {
    title: "Modern Minimalist",
    description: "Clean lines, plenty of white space, and focused content hierarchy",
    style: "Minimal",
    features: ["Clean Typography", "White Space", "Subtle Animations", "Card-based Layout"],
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=500&h=300&fit=crop",
    inspiration: "Apple.com, Stripe.com - Focus on simplicity and content"
  },
  {
    title: "Tech Startup",
    description: "Bold gradients, modern UI elements, and dynamic visual effects",
    style: "Modern",
    features: ["Gradient Backgrounds", "Glass Morphism", "Interactive Elements", "Bold CTAs"],
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
    inspiration: "Linear.app, Vercel.com - Modern SaaS aesthetics"
  },
  {
    title: "Corporate Professional",
    description: "Traditional business layout with trust-building elements",
    style: "Corporate",
    features: ["Blue Color Scheme", "Professional Imagery", "Testimonials", "Trust Badges"],
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
    inspiration: "IBM.com, Microsoft.com - Enterprise-grade presentation"
  },
  {
    title: "Creative Agency",
    description: "Bold typography, vibrant colors, and portfolio-focused design",
    style: "Creative",
    features: ["Bold Typography", "Vibrant Colors", "Portfolio Grid", "Creative Layouts"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop",
    inspiration: "Behance.net, Dribbble.com - Creative showcases"
  },
  {
    title: "Animated Interactive",
    description: "Rich animations, scroll-triggered effects, and micro-interactions",
    style: "Animated",
    features: ["Scroll Animations", "Micro-interactions", "Loading Effects", "Parallax"],
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop",
    inspiration: "Framer.com, Principle.design - Motion-first design"
  },
  {
    title: "Dark Mode Premium",
    description: "Sophisticated dark theme with premium feel and neon accents",
    style: "Dark",
    features: ["Dark Theme", "Neon Accents", "Premium Feel", "High Contrast"],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
    inspiration: "GitHub.com, Discord.com - Dark UI mastery"
  },
  {
    title: "Product Showcase",
    description: "Product-focused layout with detailed feature presentations",
    style: "Product",
    features: ["Product Heroes", "Feature Comparison", "Screenshots", "Demo Videos"],
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop",
    inspiration: "Notion.so, Figma.com - Product-centric design"
  },
  {
    title: "Geometric Modern",
    description: "Geometric shapes, abstract patterns, and contemporary design",
    style: "Geometric",
    features: ["Geometric Shapes", "Abstract Patterns", "Modern Layout", "Color Blocking"],
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop",
    inspiration: "Awwwards.com winners - Contemporary web design"
  },
  {
    title: "Mobile-First Design",
    description: "Optimized for mobile with thumb-friendly navigation",
    style: "Mobile",
    features: ["Mobile Optimized", "Touch Friendly", "Swipe Gestures", "Progressive Web"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
    inspiration: "Instagram.com, TikTok.com - Mobile-native experience"
  },
  {
    title: "Environmental/Organic",
    description: "Nature-inspired design with organic shapes and earth tones",
    style: "Organic",
    features: ["Natural Colors", "Organic Shapes", "Environmental Theme", "Sustainability"],
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&h=300&fit=crop",
    inspiration: "Patagonia.com, Ecosia.org - Environmental consciousness"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Landing Page
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Design Inspirations
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore 10 different UI design inspirations for your Next.js landing page. 
            Each design represents a unique approach to modern web development.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
              <span className="text-sm font-medium text-gray-700">🏠 Hero Section</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
              <span className="text-sm font-medium text-gray-700">📖 About</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
              <span className="text-sm font-medium text-gray-700">⚡ Services</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
              <span className="text-sm font-medium text-gray-700">📊 Statistics</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
              <span className="text-sm font-medium text-gray-700">❓ FAQs</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
              <span className="text-sm font-medium text-gray-700">📞 Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Design Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              10 Design Inspirations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each design below showcases a different approach to creating modern, 
              responsive landing pages with all the essential sections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designInspiration.map((design, index) => (
              <DesignCard
                key={index}
                title={design.title}
                description={design.description}
                style={design.style}
                features={design.features}
                imageUrl={design.imageUrl}
                inspiration={design.inspiration}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Notes */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Implementation Guidelines
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Essential Sections Structure:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span><strong>Hero:</strong> Compelling headline + CTA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span><strong>About:</strong> Company story + mission</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span><strong>Services:</strong> Icon + description grid</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span><strong>Statistics:</strong> Number counters</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span><strong>FAQs:</strong> Accordion component</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span><strong>Contact:</strong> Form + contact info</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Next.js Best Practices:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Use Next.js Image component for optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Implement proper SEO meta tags</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Add loading states and animations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Ensure mobile responsiveness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Use Tailwind for consistent spacing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Add accessibility features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Use these inspirations as a starting point for your Next.js + Tailwind CSS landing page
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
