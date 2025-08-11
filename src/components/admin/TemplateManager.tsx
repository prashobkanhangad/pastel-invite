
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Upload, Eye } from "lucide-react";

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
  { id: 1, name: "Blossom", category: "Wedding", image: template1, tier: "Basic", active: true },
  { id: 2, name: "Serenity", category: "Wedding", image: template2, tier: "Basic", active: true },
  { id: 3, name: "Amour", category: "Wedding", image: template3, tier: "Basic", active: true },
  { id: 4, name: "Harmony", category: "Wedding", image: template4, tier: "Basic", active: true },
  { id: 5, name: "Twilight", category: "Wedding", image: template5, tier: "Standard", active: true },
  { id: 6, name: "Petal", category: "Wedding", image: template6, tier: "Standard", active: false },
  { id: 7, name: "Luna", category: "Wedding", image: template7, tier: "Standard", active: true },
  { id: 8, name: "Radiance", category: "Wedding", image: template8, tier: "Premium", active: true },
  { id: 9, name: "Eternity", category: "Wedding", image: template9, tier: "Premium", active: true },
  { id: 10, name: "Opaline", category: "Wedding", image: template10, tier: "Premium", active: true }
];

const TemplateManager = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newTemplate, setNewTemplate] = useState({
    name: "",
    category: "Wedding",
    tier: "Basic"
  });

  const handleAddTemplate = () => {
    console.log("Adding template:", newTemplate);
    setIsAddDialogOpen(false);
    setNewTemplate({ name: "", category: "Wedding", tier: "Basic" });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground">Template Manager</h2>
          <p className="text-muted-foreground">Manage your invitation templates</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="hero">
              <Plus className="w-4 h-4 mr-2" />
              Add Template
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Template</DialogTitle>
              <DialogDescription>
                Upload a new invitation template to your collection
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="template-name">Template Name</Label>
                <Input
                  id="template-name"
                  placeholder="Enter template name"
                  value={newTemplate.name}
                  onChange={(e) => setNewTemplate({...newTemplate, name: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="template-category">Category</Label>
                <select 
                  id="template-category"
                  className="w-full p-2 border border-border rounded-md bg-background"
                  value={newTemplate.category}
                  onChange={(e) => setNewTemplate({...newTemplate, category: e.target.value})}
                >
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Baby Shower">Baby Shower</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="template-tier">Tier</Label>
                <select 
                  id="template-tier"
                  className="w-full p-2 border border-border rounded-md bg-background"
                  value={newTemplate.tier}
                  onChange={(e) => setNewTemplate({...newTemplate, tier: e.target.value})}
                >
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label>Template Image</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                </div>
              </div>
              
              <Button onClick={handleAddTemplate} variant="hero" className="w-full">
                Add Template
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="group bg-gradient-card">
            <div className="relative">
              <img 
                src={template.image} 
                alt={template.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-smooth flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {template.category}
                </Badge>
                <Badge 
                  variant={template.active ? "default" : "secondary"}
                  className="text-xs"
                >
                  {template.active ? "Active" : "Inactive"}
                </Badge>
              </div>
              
              <h3 className="font-display font-semibold text-foreground mb-1">
                {template.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3">
                {template.tier} Template
              </p>
              
              <div className="flex gap-2">
                <Button variant="soft" size="sm" className="flex-1">
                  Edit
                </Button>
                <Button 
                  variant={template.active ? "outline" : "hero"} 
                  size="sm"
                >
                  {template.active ? "Disable" : "Enable"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplateManager;
