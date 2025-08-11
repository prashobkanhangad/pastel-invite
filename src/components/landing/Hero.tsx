import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-transparent to-accent-light/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-border shadow-soft">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-muted-foreground">Create Beautiful Invitations</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
              <span className="text-gradient-primary">Beautiful</span><br />
              <span className="text-foreground">Invitations</span><br />
              <span className="text-muted-dark">Made Simple</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Design stunning digital invitations for weddings, birthdays, and special celebrations. 
              Choose from elegant templates, customize in minutes, and share instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Create Your Invitation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="soft" size="xl">
                View Templates
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Invitations Created</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-up" style={{animationDelay: '0.3s'}}>
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="People celebrating with beautiful digital invitations"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-elegant animate-float">
              <div className="text-sm font-semibold text-foreground">Easy Design</div>
              <div className="text-xs text-muted-foreground">Drag & Drop</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-elegant animate-float" style={{animationDelay: '1s'}}>
              <div className="text-sm font-semibold text-foreground">Instant Share</div>
              <div className="text-xs text-muted-foreground">WhatsApp Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;