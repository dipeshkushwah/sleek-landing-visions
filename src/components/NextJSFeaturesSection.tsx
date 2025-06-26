
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Server, Image, Zap, Database, Shield, Rocket, Globe } from 'lucide-react';

const NextJSFeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Server,
      title: "Server Components",
      description: "Build faster applications with React Server Components and automatic code splitting.",
      features: ["Zero Bundle Size", "Automatic Optimization", "Improved Performance"],
      color: "from-blue-500 to-cyan-500",
      nextjsVersion: "App Router"
    },
    {
      icon: Image,
      title: "Image Optimization",
      description: "Automatic image optimization with lazy loading and modern formats support.",
      features: ["WebP/AVIF Support", "Lazy Loading", "Responsive Images"],
      color: "from-green-500 to-emerald-500",
      nextjsVersion: "Built-in"
    },
    {
      icon: Zap,
      title: "Static Generation",
      description: "Generate static pages at build time for ultimate performance and SEO.",
      features: ["ISR Support", "Edge Runtime", "CDN Optimized"],
      color: "from-yellow-500 to-orange-500",
      nextjsVersion: "SSG/ISR"
    },
    {
      icon: Database,
      title: "API Routes",
      description: "Build full-stack applications with serverless API endpoints.",
      features: ["Serverless Functions", "Middleware Support", "Database Integration"],
      color: "from-purple-500 to-pink-500",
      nextjsVersion: "Full-Stack"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Built-in security features including CSP, CSRF protection, and more.",
      features: ["CSP Headers", "CSRF Protection", "Secure Headers"],
      color: "from-red-500 to-rose-500",
      nextjsVersion: "Enterprise"
    },
    {
      icon: Globe,
      title: "Internationalization",
      description: "Built-in i18n support for multi-language applications.",
      features: ["Automatic Routing", "Locale Detection", "Sub-path Routing"],
      color: "from-indigo-500 to-blue-500",
      nextjsVersion: "i18n Ready"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white rounded-full text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300">
            <Code2 className="w-4 h-4 mr-2" />
            Next.js 14 Features
            <Rocket className="w-4 h-4 ml-2" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 hover:scale-105 transition-transform duration-500 cursor-default">
            Powered by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
              Next.js 14
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leverage the most advanced React framework for production-ready applications 
            with built-in optimizations, security, and performance features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-none bg-white/80 backdrop-blur-sm overflow-hidden relative cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Version Badge */}
                <div className="absolute top-4 right-4 px-2 py-1 bg-black/10 backdrop-blur-sm rounded-full text-xs font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.nextjsVersion}
                </div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    {feature.features.map((item, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-all duration-300"
                        style={{ 
                          transform: hoveredCard === index ? `translateX(${featureIndex * 2}px)` : 'translateX(0)',
                          transitionDelay: `${featureIndex * 0.1}s`
                        }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Hover Effect Particles */}
                {hoveredCard === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-black rounded-full animate-ping opacity-75"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </>
                )}
              </Card>
            );
          })}
        </div>

        {/* Tech Stack Showcase */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Complete Tech Stack</h3>
            <p className="text-gray-300">Everything you need for modern web development</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Next.js 14", icon: "⚡", desc: "React Framework" },
              { name: "TypeScript", icon: "🔷", desc: "Type Safety" },
              { name: "Tailwind CSS", icon: "🎨", desc: "Utility-First CSS" },
              { name: "Vercel", icon: "▲", desc: "Deployment" }
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 rounded-xl hover:bg-white/10 transition-colors duration-300 group cursor-default">
                <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="font-semibold group-hover:text-blue-400 transition-colors duration-300">
                  {tech.name}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {tech.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextJSFeaturesSection;
