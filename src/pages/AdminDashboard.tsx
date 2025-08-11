
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Users, 
  FileImage, 
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  Eye,
  Download
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import TemplateManager from "@/components/admin/TemplateManager";
import ClientManager from "@/components/admin/ClientManager";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Total Templates", value: "10", icon: FileImage, color: "text-blue-500" },
    { label: "Active Clients", value: "24", icon: Users, color: "text-green-500" },
    { label: "Invitations Created", value: "156", icon: Calendar, color: "text-purple-500" },
    { label: "This Month", value: "43", icon: BarChart3, color: "text-orange-500" }
  ];

  const recentInvitations = [
    { id: 1, client: "Sarah & John", template: "Blossom", status: "Completed", date: "2024-01-15" },
    { id: 2, client: "Emily & David", template: "Serenity", status: "In Progress", date: "2024-01-14" },
    { id: 3, client: "Lisa & Michael", template: "Amour", status: "Pending", date: "2024-01-13" }
  ];

  return (
    <div className="min-h-screen bg-surface">
      <AdminHeader />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage your invitation templates and client projects
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="clients">Clients</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-gradient-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        </div>
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Invitations</CardTitle>
                    <CardDescription>Latest client projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentInvitations.map((invitation) => (
                        <div key={invitation.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div>
                            <p className="font-medium text-foreground">{invitation.client}</p>
                            <p className="text-sm text-muted-foreground">Template: {invitation.template}</p>
                            <p className="text-xs text-muted-foreground">{invitation.date}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={invitation.status === "Completed" ? "default" : 
                                     invitation.status === "In Progress" ? "secondary" : "outline"}
                            >
                              {invitation.status}
                            </Badge>
                            <Button variant="ghost" size="icon">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common tasks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="hero" className="w-full justify-start">
                      <Plus className="w-4 h-4 mr-2" />
                      Create New Invitation
                    </Button>
                    <Button variant="soft" className="w-full justify-start">
                      <FileImage className="w-4 h-4 mr-2" />
                      Upload Template
                    </Button>
                    <Button variant="soft" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Add New Client
                    </Button>
                    <Button variant="soft" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Export Reports
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="templates">
              <TemplateManager />
            </TabsContent>

            <TabsContent value="clients">
              <ClientManager />
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Manage your account and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Settings panel coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
