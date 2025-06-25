
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Zap, Heart, Star, Award } from 'lucide-react';

const AboutSection = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const coreValues = [
    {
      icon: Target,
      title: "Mission",
      description: "Deliver innovative solutions that drive business growth",
      color: "from-blue-500 to-cyan-500",
      delay: "0s"
    },
    {
      icon: Users,
      title: "Vision", 
      description: "Be the leading digital transformation partner",
      color: "from-green-500 to-emerald-500",
      delay: "0.2s"
    },
    {
      icon: Zap,
      title: "Values",
      description: "Innovation, integrity, and client success",
      color: "from-purple-500 to-pink-500",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
                <Heart className="w-4 h-4 mr-2 text-purple-600" />
                About Us
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block hover:scale-105 transition-transform duration-500 cursor-default">
                  Building Tomorrow's
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:from-blue-600 hover:to-purple-600 transition-all duration-500 cursor-default">
                  Digital Solutions
                </span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                  Founded in 2020, we are a passionate team of designers, developers, and strategists 
                  committed to creating digital experiences that make a difference. Our mission is to 
                  empower businesses through innovative technology solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                  We believe in the power of collaboration, creativity, and cutting-edge technology 
                  to transform ideas into reality. Every project is an opportunity to push boundaries 
                  and deliver exceptional results.
                </p>
              </div>
            </div>
            
            {/* Animated Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card 
                    key={index}
                    className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden relative"
                    onMouseEnter={() => setHoveredValue(index)}
                    onMouseLeave={() => setHoveredValue(null)}
                    style={{ animationDelay: value.delay }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <CardContent className="p-6 text-center relative z-10">
                      <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>

                    {/* Sparkle Effect */}
                    {hoveredValue === index && (
                      <div className="absolute top-2 right-2">
                        <Star className="w-4 h-4 text-yellow-400 animate-spin" />
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>

            {/* Achievement Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              {[
                { icon: Award, number: "5+", label: "Years Experience" },
                { icon: Users, number: "50+", label: "Team Members" },
                { icon: Target, number: "20+", label: "Countries Served" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 group hover:scale-110 transition-all duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Enhanced About Images */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="group relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop" 
                    alt="Our team at work"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-transparent transition-all duration-500"></div>
                </div>
                <div className="group relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=250&fit=crop" 
                    alt="Development process"
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-transparent transition-all duration-500"></div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="group relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=250&fit=crop" 
                    alt="Technology focus"
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-transparent transition-all duration-500"></div>
                </div>
                <div className="group relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop" 
                    alt="Collaboration"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-transparent transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badges */}
            <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 hover:scale-110 hover:rotate-3 transition-all duration-500 group">
              <Award className="w-6 h-6 text-yellow-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-sm font-semibold text-gray-900">Award Winner</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 hover:scale-110 hover:-rotate-3 transition-all duration-500 group">
              <Star className="w-6 h-6 text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-sm font-semibold text-gray-900">Top Rated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
