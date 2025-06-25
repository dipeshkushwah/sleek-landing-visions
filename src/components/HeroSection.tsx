
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            animationDelay: '1s'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium group hover:scale-105 transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Welcome to Innovation
                <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Transform Your
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-fade-in hover:scale-105 transition-transform duration-500 cursor-default" style={{ animationDelay: '0.4s' }}>
                  Digital Future
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed animate-fade-in max-w-lg" style={{ animationDelay: '0.6s' }}>
                We create exceptional digital experiences that drive growth and innovation. 
                Our team combines creativity with cutting-edge technology to deliver results that matter.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>
            
            {/* Animated Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: '1s' }}>
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "99%", label: "Success Rate" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group hover:scale-110 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${1.2 + index * 0.2}s` }}
                >
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
          
          {/* Hero Image with Floating Elements */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:scale-105 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-all duration-500"></div>
            </div>
            
            {/* Floating Cards with Enhanced Animations */}
            <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:scale-110 hover:rotate-3 transition-all duration-500 group cursor-default">
              <div className="text-3xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">
                ↗ 150%
              </div>
              <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                Growth Rate
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:scale-110 hover:-rotate-3 transition-all duration-500 group cursor-default">
              <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                ⚡ Fast
              </div>
              <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                Delivery
              </div>
            </div>
            
            {/* Additional Floating Elements */}
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/4 -left-4 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute bottom-1/4 right-4 w-2 h-2 bg-pink-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
