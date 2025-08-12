import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, Eye, Share2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CreateInvitation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    coupleName: "",
    eventType: "",
    date: "",
    time: "",
    venue: "",
    address: "",
    message: "",
    hosts: "",
    rsvpPhone: "",
    rsvpEmail: "",
    template: "",
    photo: null as File | null
  });

  const [previewUrl, setPreviewUrl] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const eventTypes = ["Wedding", "Engagement", "Baby Shower", "Birthday", "Anniversary", "Graduation"];
  const templates = ["Blossom", "Serenity", "Amour", "Harmony", "Twilight", "Petal", "Luna", "Radiance", "Eternity", "Opaline"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleCreateInvitation = () => {
    // Validate required fields
    if (!formData.coupleName || !formData.eventType || !formData.date) {
      toast({
        title: "Missing Information",
        description: "Please fill in the required fields.",
        variant: "destructive"
      });
      return;
    }

    // Generate unique ID (in real app, this would be handled by backend)
    const invitationId = `${formData.coupleName.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
    const shareableLink = `${window.location.origin}/invitation/${invitationId}`;
    
    setIsCreated(true);
    toast({
      title: "Invitation Created!",
      description: "Your beautiful e-invitation is ready to share.",
    });
    
    // In real app, save to database here
  };

  const copyLink = () => {
    const link = `${window.location.origin}/invitation/sample-wedding`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Link Copied!",
      description: "Invitation link copied to clipboard.",
    });
  };

  if (isCreated) {
    return (
      <div className="min-h-screen bg-surface">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">Invitation Created Successfully!</h1>
              <p className="text-muted-foreground">Your beautiful e-invitation is ready to share with your guests.</p>
            </div>

            <Card className="p-6 bg-gradient-card">
              <h3 className="text-lg font-semibold mb-4">Share Your Invitation</h3>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg mb-4">
                <code className="flex-1 text-sm">{window.location.origin}/invitation/sample-wedding</code>
                <Button size="sm" variant="outline" onClick={copyLink}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button onClick={() => window.open('/invitation/sample-wedding', '_blank')}>
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Invitation
                </Button>
                <Button variant="outline" onClick={copyLink}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Link
                </Button>
              </div>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">
              Create Your E-Invitation
            </h1>
            <p className="text-xl text-muted-foreground">
              Design a beautiful digital invitation to share with your guests
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Event Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="coupleName">Names *</Label>
                    <Input
                      id="coupleName"
                      placeholder="e.g., Sarah & Michael"
                      value={formData.coupleName}
                      onChange={(e) => handleInputChange('coupleName', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="eventType">Event Type *</Label>
                    <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="venue">Venue</Label>
                    <Input
                      id="venue"
                      placeholder="e.g., Grand Palace Hotel"
                      value={formData.venue}
                      onChange={(e) => handleInputChange('venue', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      placeholder="Full venue address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Personal Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Share a personal message with your guests..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="hosts">Hosted By</Label>
                    <Input
                      id="hosts"
                      placeholder="e.g., The Johnson & Smith Families"
                      value={formData.hosts}
                      onChange={(e) => handleInputChange('hosts', e.target.value)}
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">RSVP Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="rsvpPhone">RSVP Phone</Label>
                    <Input
                      id="rsvpPhone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.rsvpPhone}
                      onChange={(e) => handleInputChange('rsvpPhone', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="rsvpEmail">RSVP Email</Label>
                    <Input
                      id="rsvpEmail"
                      type="email"
                      placeholder="rsvp@example.com"
                      value={formData.rsvpEmail}
                      onChange={(e) => handleInputChange('rsvpEmail', e.target.value)}
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Design & Preview */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Design & Photo</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="template">Template</Label>
                    <Select value={formData.template} onValueChange={(value) => handleInputChange('template', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a template" />
                      </SelectTrigger>
                      <SelectContent>
                        {templates.map(template => (
                          <SelectItem key={template} value={template}>{template}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="photo">Upload Photo</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                      {previewUrl ? (
                        <div className="space-y-4">
                          <img src={previewUrl} alt="Preview" className="w-32 h-32 object-cover rounded-full mx-auto" />
                          <Button variant="outline" onClick={() => document.getElementById('photo')?.click()}>
                            Change Photo
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                          <div>
                            <Button variant="outline" onClick={() => document.getElementById('photo')?.click()}>
                              Upload Photo
                            </Button>
                            <p className="text-sm text-muted-foreground mt-2">
                              Upload a photo of the couple or event
                            </p>
                          </div>
                        </div>
                      )}
                      <input
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Preview</h3>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-6 text-center">
                    <Badge className="mb-2">{formData.eventType || "Event Type"}</Badge>
                    <h4 className="text-xl font-bold">{formData.coupleName || "Names"}</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      {formData.date} {formData.time && `at ${formData.time}`}
                    </p>
                    {formData.venue && (
                      <p className="text-sm text-muted-foreground">{formData.venue}</p>
                    )}
                  </div>
                  
                  <Button 
                    onClick={handleCreateInvitation}
                    className="w-full"
                    size="lg"
                  >
                    Create E-Invitation
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CreateInvitation;