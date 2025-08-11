import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import template images
import template1 from "@/assets/template-1.jpg";
import template2 from "@/assets/template-2.jpg";
import template3 from "@/assets/template-3.jpg";
import template4 from "@/assets/template-4.jpg";
import template5 from "@/assets/template-5.jpg";
import template6 from "@/assets/template-6.jpg";
import template7 from "@/assets/template-7.jpg";
import template8 from "@/assets/template-8.jpg";
import template9 from "@/assets/template-9.jpg";
import template10 from "@/assets/template-10.jpg";

const templates = [
  {
    id: 1,
    name: "Blossom",
    category: "Wedding",
    image: template1,
    likes: 247,
    popular: true,
    tier: "Basic"
  },
  {
    id: 2,
    name: "Serenity",
    category: "Wedding",
    image: template2,
    likes: 298,
    popular: true,
    tier: "Basic"
  },
  {
    id: 3,
    name: "Amour",
    category: "Wedding",
    image: template3,
    likes: 342,
    popular: true,
    tier: "Basic"
  },
  {
    id: 4,
    name: "Harmony",
    category: "Wedding",
    image: template4,
    likes: 276,
    popular: true,
    tier: "Basic"
  },
  {
    id: 5,
    name: "Twilight",
    category: "Wedding",
    image: template5,
    likes: 198,
    popular: false,
    tier: "Standard"
  },
  {
    id: 6,
    name: "Petal",
    category: "Wedding",
    image: template6,
    likes: 167,
    popular: false,
    tier: "Standard"
  },
  {
    id: 7,
    name: "Luna",
    category: "Wedding",
    image: template7,
    likes: 223,
    popular: true,
    tier: "Standard"
  },
  {
    id: 8,
    name: "Radiance",
    category: "Wedding",
    image: template8,
    likes: 189,
    popular: false,
    tier: "Premium"
  },
  {
    id: 9,
    name: "Eternity",
    category: "Wedding",
    image: template9,
    likes: 298,
    popular: true,
    tier: "Premium"
  },
  {
    id: 10,
    name: "Opaline",
    category: "Wedding",
    image: template10,
    likes: 267,
    popular: true,
    tier: "Premium"
  }
];

const TemplateShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Premium Templates
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Stunning Templates for Every
            <span className="text-gradient-primary"> Occasion</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our curated collection of beautiful, professionally designed templates. 
            Each one is crafted to make your special moments unforgettable.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {templates.map((template, index) => (
            <Card 
              key={template.id} 
              className="group cursor-pointer transition-smooth hover:shadow-elegant hover:-translate-y-2 bg-gradient-card border-border animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => navigate(`/template/${template.id}`)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                {template.popular && (
                  <Badge className="absolute top-3 left-3 z-10 bg-gold text-white">
                    Popular
                  </Badge>
                )}
                
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth flex items-center justify-center">
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="opacity-0 group-hover:opacity-100 transition-smooth scale-90 group-hover:scale-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/template/${template.id}`);
                    }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {template.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Heart className="w-3 h-3" />
                    {template.likes}
                  </div>
                </div>
                
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {template.name}
                </h3>
                
                <Button 
                  variant="soft" 
                  size="sm" 
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/template/${template.id}`);
                  }}
                >
                  Select Template
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up" style={{animationDelay: '1s'}}>
          <Button variant="hero" size="lg">
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
