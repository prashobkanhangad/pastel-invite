import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Edit3, Share2, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Palette,
    title: "Choose Template",
    description: "Browse our collection of stunning templates and select the perfect design for your event.",
    color: "text-primary"
  },
  {
    step: "02", 
    icon: Edit3,
    title: "Customize Details",
    description: "Add your event information, upload photos, and personalize every detail to match your style.",
    color: "text-secondary"
  },
  {
    step: "03",
    icon: Share2,
    title: "Share Instantly",
    description: "Generate your beautiful invitation and share it via WhatsApp, email, or social media.",
    color: "text-accent"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="secondary" className="mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Simple Process
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creating beautiful invitations has never been easier. Follow these three simple steps 
            to design and share your perfect invitation in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={step.step}
              className="relative p-8 text-center bg-gradient-card border-border shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 ${step.color} bg-surface rounded-full flex items-center justify-center`}>
                <step.icon className="w-8 h-8" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-border to-transparent"></div>
              )}
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up" style={{animationDelay: '0.6s'}}>
          {[
            { title: "10+ Templates", subtitle: "Beautiful designs" },
            { title: "Easy Customization", subtitle: "Drag & drop editor" },
            { title: "Instant Sharing", subtitle: "WhatsApp ready" },
            { title: "Mobile Optimized", subtitle: "Perfect on any device" }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-surface rounded-lg border border-border">
              <div className="font-display font-semibold text-foreground">{feature.title}</div>
              <div className="text-sm text-muted-foreground">{feature.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;