
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                About Us
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Building Tomorrow's
                <span className="block text-purple-600">Digital Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2020, we are a passionate team of designers, developers, and strategists 
                committed to creating digital experiences that make a difference. Our mission is to 
                empower businesses through innovative technology solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in the power of collaboration, creativity, and cutting-edge technology 
                to transform ideas into reality. Every project is an opportunity to push boundaries 
                and deliver exceptional results.
              </p>
            </div>
            
            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-sm bg-blue-50">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Mission</h3>
                  <p className="text-sm text-gray-600">Deliver innovative solutions that drive business growth</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-sm bg-green-50">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Vision</h3>
                  <p className="text-sm text-gray-600">Be the leading digital transformation partner</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-sm bg-purple-50">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Values</h3>
                  <p className="text-sm text-gray-600">Innovation, integrity, and client success</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* About Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop" 
                  alt="Our team at work"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=250&fit=crop" 
                  alt="Development process"
                  className="rounded-xl shadow-lg w-full h-56 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=250&fit=crop" 
                  alt="Technology focus"
                  className="rounded-xl shadow-lg w-full h-56 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop" 
                  alt="Collaboration"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
