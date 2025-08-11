import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    avatar: "SJ",
    rating: 5,
    content: "InviteMe made creating our wedding invitations so easy! The templates are absolutely gorgeous and the customization options are perfect. Our guests loved the elegant design.",
    event: "Wedding Invitations"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Event Organizer",
    avatar: "MC",
    rating: 5,
    content: "I've used InviteMe for multiple corporate events. The professional templates and quick turnaround time have impressed both me and my clients every single time.",
    event: "Corporate Events"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Mom of 2",
    avatar: "ER",
    rating: 5,
    content: "Perfect for my daughter's birthday party! The kid-friendly templates were colorful and fun. The WhatsApp sharing feature made it so convenient to invite everyone.",
    event: "Birthday Party"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Groom",
    avatar: "DT", 
    rating: 5,
    content: "The team was incredibly helpful with customizing our engagement party invitations. The quality exceeded our expectations and the process was seamless.",
    event: "Engagement Party"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Graduate",
    avatar: "LP",
    rating: 5,
    content: "Amazing service! Created beautiful graduation invitations that perfectly captured the significance of the moment. Highly recommend to anyone looking for quality designs.",
    event: "Graduation Ceremony"
  },
  {
    id: 6,
    name: "Robert Wilson",
    role: "Anniversary Celebration",
    avatar: "RW",
    rating: 5,
    content: "InviteMe helped us create the most beautiful 25th anniversary invitations. The vintage templates were exactly what we were looking for. Outstanding service!",
    event: "Silver Anniversary"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Client Love
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            What Our <span className="text-gradient-primary">Clients Say</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our happy clients have to say 
            about their experience creating beautiful invitations with InviteMe.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="p-6 bg-card/80 backdrop-blur-sm border-border shadow-soft hover:shadow-elegant transition-smooth animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="#" alt={testimonial.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up" style={{animationDelay: '0.6s'}}>
          {[
            { number: "4.9", label: "Average Rating", suffix: "/5" },
            { number: "1000+", label: "Happy Clients", suffix: "" },
            { number: "10k+", label: "Invitations Created", suffix: "" },
            { number: "98%", label: "Satisfaction Rate", suffix: "" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-lg border border-border">
              <div className="text-3xl font-display font-bold text-foreground mb-2">
                {stat.number}<span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;