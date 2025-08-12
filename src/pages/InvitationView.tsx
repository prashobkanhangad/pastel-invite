import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Heart, Share2, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Sample invitation data - in real app this would come from API
const invitationData = {
  "sample-wedding": {
    id: "sample-wedding",
    type: "Wedding",
    coupleName: "Sarah & Michael",
    couplePhoto: "/placeholder.svg",
    date: "December 15, 2024",
    time: "4:00 PM",
    venue: "Grand Palace Hotel",
    address: "123 Royal Street, Downtown City",
    message: "Join us as we celebrate our love and begin this beautiful journey together. Your presence would make our special day even more memorable.",
    hosts: "The Johnson & Smith Families",
    rsvp: {
      phone: "+1 (555) 123-4567",
      email: "rsvp@sarahandmichael.com"
    },
    template: "Blossom",
    colors: {
      primary: "hsl(var(--primary))",
      accent: "hsl(var(--accent))"
    }
  }
};

const InvitationView = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const invitation = invitationData[id as keyof typeof invitationData];
  
  if (!invitation) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-foreground mb-4">Invitation Not Found</h1>
          <p className="text-muted-foreground">This invitation link may be invalid or expired.</p>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${invitation.coupleName} - ${invitation.type} Invitation`,
          text: `You're invited to ${invitation.coupleName}'s ${invitation.type.toLowerCase()}!`,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Invitation link has been copied to clipboard.",
      });
    }
  };

  const handleRSVP = (method: 'phone' | 'email') => {
    if (method === 'phone') {
      window.open(`tel:${invitation.rsvp.phone}`);
    } else {
      window.open(`mailto:${invitation.rsvp.email}?subject=RSVP for ${invitation.coupleName} ${invitation.type}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            {invitation.type} Invitation
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            {invitation.coupleName}
          </h1>
          
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-elegant">
              <img 
                src={invitation.couplePhoto} 
                alt={invitation.coupleName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {invitation.message}
          </p>
          
          <Button 
            onClick={handleShare}
            variant="outline"
            className="bg-white/20 text-white border-white/30 hover:bg-white/30"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share Invitation
          </Button>
        </div>
      </div>

      {/* Event Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Date & Time */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-elegant">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold text-foreground">When</h3>
            </div>
            <p className="text-2xl font-bold text-foreground mb-2">{invitation.date}</p>
            <div className="flex items-center text-muted-foreground">
              <Clock className="w-4 h-4 mr-2" />
              {invitation.time}
            </div>
          </Card>

          {/* Location */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-elegant">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold text-foreground">Where</h3>
            </div>
            <p className="text-xl font-bold text-foreground mb-2">{invitation.venue}</p>
            <p className="text-muted-foreground">{invitation.address}</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(invitation.address)}`)}
            >
              <MapPin className="w-4 h-4 mr-2" />
              View on Map
            </Button>
          </Card>
        </div>

        {/* RSVP Section */}
        <Card className="mt-12 p-8 bg-gradient-card border-0 shadow-elegant max-w-2xl mx-auto text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">Please RSVP</h3>
          <p className="text-muted-foreground mb-6">
            Your presence would mean the world to us. Please let us know if you can make it!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleRSVP('phone')}
              className="flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call to RSVP
            </Button>
            <Button 
              variant="outline"
              onClick={() => handleRSVP('email')}
              className="flex items-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email RSVP
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            Hosted by {invitation.hosts}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default InvitationView;