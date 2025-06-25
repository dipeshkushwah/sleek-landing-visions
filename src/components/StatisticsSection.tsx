
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const StatisticsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Businesses trust us with their digital transformation",
      color: "blue"
    },
    {
      icon: Award,
      number: "1000+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
      color: "green"
    },
    {
      icon: TrendingUp,
      number: "99%",
      label: "Satisfaction Rate",
      description: "Client satisfaction and retention rate",
      color: "purple"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock support for all our clients",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          iconBg: 'bg-blue-500',
          text: 'text-blue-600'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          iconBg: 'bg-green-500',
          text: 'text-green-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          iconBg: 'bg-purple-500',
          text: 'text-purple-600'
        };
      case 'orange':
        return {
          bg: 'bg-orange-50',
          iconBg: 'bg-orange-500',
          text: 'text-orange-600'
        };
      default:
        return {
          bg: 'bg-gray-50',
          iconBg: 'bg-gray-500',
          text: 'text-gray-600'
        };
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Numbers That
            <span className="block text-green-600">Speak for Themselves</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record demonstrates our commitment to excellence and the trust 
            our clients place in our expertise.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const colorClasses = getColorClasses(stat.color);
            
            return (
              <Card key={index} className={`${colorClasses.bg} border-none hover:shadow-lg transition-all duration-300 group`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${colorClasses.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-4xl md:text-5xl font-bold ${colorClasses.text} mb-2`}>
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-gray-600">Industries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
