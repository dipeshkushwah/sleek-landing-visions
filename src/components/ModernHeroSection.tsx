
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles, Zap, Star, Rocket } from 'lucide-react';

const ModernHeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Particles */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-32 right-16 w-16 h-16 border border-purple-500/30 rotate-45 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full animate-bounce" />
      </div>

      {/* Dynamic Gradient Orbs with Parallax */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.05 + scrollY * 0.1}px, ${mousePosition.y * 0.05}px)`
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03 + scrollY * 0.05}px)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            animationDelay: '2s'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              {/* Animated Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium group hover:scale-105 transition-all duration-300 cursor-pointer">
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Next.js Ready Design
                <Rocket className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              {/* Main Heading with Typewriter Effect */}
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Build Modern
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-fade-in hover:scale-105 transition-transform duration-500 cursor-default" style={{ animationDelay: '0.4s' }}>
                  Web Experiences
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  That Convert
                </span>
              </h1>
              
              {/* Enhanced Description */}
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Transform your ideas into stunning digital experiences with our cutting-edge 
                  development solutions. Built for performance, designed for impact.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Next.js 14</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-blue-400" />
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-purple-400" />
                    <span>Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25 text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm group hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>
            
            {/* Enhanced Stats with Icons */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              {[
                { icon: "🚀", number: "500+", label: "Projects Launched" },
                { icon: "⚡", number: "99.9%", label: "Uptime SLA" },
                { icon: "🏆", number: "50+", label: "Awards Won" },
                { icon: "🌟", number: "24/7", label: "Expert Support" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group hover:scale-110 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Hero Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover:scale-105 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                alt="Modern web development team"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">Performance</div>
                      <div className="text-green-400 text-sm">98/100 Score</div>
                    </div>
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Cards */}
            <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 hover:scale-110 hover:rotate-3 transition-all duration-500 group cursor-default">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">↗</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">
                    +150%
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    Growth Rate
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 hover:scale-110 hover:-rotate-3 transition-all duration-500 group cursor-default">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    Fast
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    Deployment
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/4 -right-12 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 hover:scale-110 transition-all duration-500 group cursor-default">
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  24/7
                </div>
                <div className="text-xs text-gray-300 group-hover:text-white transition-colors duration-300">
                  Support
                </div>
              </div>
            </div>
            
            {/* Additional Floating Elements */}
            <div className="absolute top-1/2 -right-4 w-4 h-4 bg-purple-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/4 -left-6 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute bottom-1/4 right-4 w-2 h-2 bg-pink-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-3/4 left-8 w-5 h-5 bg-green-500 rounded-full animate-pulse opacity-70" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
