
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DesignCardProps {
  title: string;
  description: string;
  style: string;
  features: string[];
  imageUrl: string;
  inspiration: string;
}

const DesignCard = ({ title, description, style, features, imageUrl, inspiration }: DesignCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge className="absolute top-3 right-3 bg-white/90 text-black hover:bg-white">
          {style}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm text-gray-800 mb-2">Key Features:</h4>
            <div className="flex flex-wrap gap-1">
              {features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          <div className="pt-2 border-t">
            <p className="text-xs text-gray-500">
              <span className="font-medium">Inspiration:</span> {inspiration}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DesignCard;
