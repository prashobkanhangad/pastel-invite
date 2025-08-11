
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Eye, MessageCircle, Calendar } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "Sarah & John Wilson",
    email: "sarah.wilson@email.com",
    phone: "+1 (555) 123-4567",
    event: "Wedding",
    eventDate: "2024-06-15",
    template: "Blossom",
    status: "Completed",
    createdAt: "2024-01-10"
  },
  {
    id: 2,
    name: "Emily & David Chen",
    email: "emily.chen@email.com",
    phone: "+1 (555) 987-6543",
    event: "Wedding",
    eventDate: "2024-07-20",
    template: "Serenity",
    status: "In Progress",
    createdAt: "2024-01-12"
  },
  {
    id: 3,
    name: "Lisa & Michael Brown",
    email: "lisa.brown@email.com",
    phone: "+1 (555) 456-7890",
    event: "Wedding",
    eventDate: "2024-08-10",
    template: "Amour",
    status: "Pending",
    createdAt: "2024-01-14"
  }
];

const ClientManager = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    phone: "",
    event: "Wedding",
    eventDate: "",
    template: "Blossom"
  });

  const handleAddClient = () => {
    console.log("Adding client:", newClient);
    setIsAddDialogOpen(false);
    setNewClient({
      name: "",
      email: "",
      phone: "",
      event: "Wedding",
      eventDate: "",
      template: "Blossom"
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground">Client Manager</h2>
          <p className="text-muted-foreground">Manage your client projects and invitations</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="hero">
              <Plus className="w-4 h-4 mr-2" />
              Add Client
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Client</DialogTitle>
              <DialogDescription>
                Create a new client project for invitation customization
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client-name">Client Name(s)</Label>
                <Input
                  id="client-name"
                  placeholder="e.g., Sarah & John Wilson"
                  value={newClient.name}
                  onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="client-email">Email</Label>
                <Input
                  id="client-email"
                  type="email"
                  placeholder="client@email.com"
                  value={newClient.email}
                  onChange={(e) => setNewClient({...newClient, email: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="client-phone">Phone</Label>
                <Input
                  id="client-phone"
                  placeholder="+1 (555) 123-4567"
                  value={newClient.phone}
                  onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="event-type">Event Type</Label>
                <select 
                  id="event-type"
                  className="w-full p-2 border border-border rounded-md bg-background"
                  value={newClient.event}
                  onChange={(e) => setNewClient({...newClient, event: e.target.value})}
                >
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Baby Shower">Baby Shower</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="event-date">Event Date</Label>
                <Input
                  id="event-date"
                  type="date"
                  value={newClient.eventDate}
                  onChange={(e) => setNewClient({...newClient, eventDate: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="template">Template</Label>
                <select 
                  id="template"
                  className="w-full p-2 border border-border rounded-md bg-background"
                  value={newClient.template}
                  onChange={(e) => setNewClient({...newClient, template: e.target.value})}
                >
                  <option value="Blossom">Blossom</option>
                  <option value="Serenity">Serenity</option>
                  <option value="Amour">Amour</option>
                  <option value="Harmony">Harmony</option>
                  <option value="Twilight">Twilight</option>
                </select>
              </div>
              
              <Button onClick={handleAddClient} variant="hero" className="w-full">
                Create Client Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Clients List */}
      <div className="space-y-4">
        {clients.map((client) => (
          <Card key={client.id} className="bg-gradient-card">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{client.name}</h3>
                    <Badge 
                      variant={client.status === "Completed" ? "default" : 
                               client.status === "In Progress" ? "secondary" : "outline"}
                    >
                      {client.status}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                    <div>
                      <p><strong>Email:</strong> {client.email}</p>
                      <p><strong>Phone:</strong> {client.phone}</p>
                    </div>
                    <div>
                      <p><strong>Event:</strong> {client.event}</p>
                      <p><strong>Event Date:</strong> {new Date(client.eventDate).toLocaleDateString()}</p>
                      <p><strong>Template:</strong> {client.template}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 ml-4">
                  <Button variant="soft" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button variant="soft" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="soft" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  Created: {new Date(client.createdAt).toLocaleDateString()}
                </span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {Math.ceil((new Date(client.eventDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days until event
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClientManager;
