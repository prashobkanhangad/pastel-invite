
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Download, Share2, Eye } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  { id: 1, name: "Blossom", category: "Wedding", image: template1, likes: 247, popular: true, tier: "Basic" },
  { id: 2, name: "Serenity", category: "Wedding", image: template2, likes: 298, popular: true, tier: "Basic" },
  { id: 3, name: "Amour", category: "Wedding", image: template3, likes: 342, popular: true, tier: "Basic" },
  { id: 4, name: "Harmony", category: "Wedding", image: template4, likes: 276, popular: true, tier: "Basic" },
  { id: 5, name: "Twilight", category: "Wedding", image: template5, likes: 198, popular: false, tier: "Standard" },
  { id: 6, name: "Petal", category: "Wedding", image: template6, likes: 167, popular: false, tier: "Standard" },
  { id: 7, name: "Luna", category: "Wedding", image: template7, likes: 223, popular: true, tier: "Standard" },
  { id: 8, name: "Radiance", category: "Wedding", image: template8, likes: 189, popular: false, tier: "Premium" },
  { id: 9, name: "Eternity", category: "Wedding", image: template9, likes: 298, popular: true, tier: "Premium" },
  { id: 10, name: "Opaline", category: "Wedding", image: template10, likes: 267, popular: true, tier: "Premium" }
];

const TemplatePreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const template = templates.find(t => t.id === parseInt(id || "1"));
  
  if (!template) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Template not found</h1>
          <Button onClick={() => navigate("/")} variant="hero">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Back Navigation */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Templates
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Template Preview */}
            <div className="space-y-6">
              <Card className="overflow-hidden bg-gradient-card">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-auto object-cover"
                />
              </Card>
              
              {/* Actions */}
              <div className="flex gap-4">
                <Button variant="hero" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Use This Template
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Template Details */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">{template.category}</Badge>
                  {template.popular && (
                    <Badge className="bg-gold text-white">Popular</Badge>
                  )}
                  <Badge variant="secondary">{template.tier}</Badge>
                </div>
                
                <h1 className="text-4xl font-display font-bold text-foreground mb-4">
                  {template.name}
                </h1>
                
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {template.likes} likes
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    1.2k views
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  A beautiful and elegant {template.name.toLowerCase()} design perfect for your special day. 
                  This template features a sophisticated layout with careful attention to typography and spacing, 
                  making it ideal for creating memorable invitations that your guests will cherish.
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fully customizable text and colors</li>
                  <li>• High-resolution print quality</li>
                  <li>• Mobile-optimized design</li>
                  <li>• WhatsApp sharing ready</li>
                  <li>• Professional typography</li>
                </ul>
              </div>

              {/* Pricing */}
              <Card className="p-6 bg-gradient-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">Get This Template</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Template Usage</span>
                    <span className="text-2xl font-bold text-foreground">Free</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Customization Service</span>
                    <span className="text-lg font-semibold text-foreground">$29</span>
                  </div>
                  <Button variant="hero" className="w-full">
                    Start Customization
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TemplatePreview;
