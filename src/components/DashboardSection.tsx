"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  Settings2, 
  PanelsLeftBottom, 
  LayoutDashboard, 
  PanelTop, 
  PanelRight, 
  ServerCog 
} from "lucide-react";

interface DashboardSectionProps {
  className?: string;
}

interface GuildData {
  id: string;
  name: string;
  icon?: string;
  hasBot: boolean;
}

const mockGuilds: GuildData[] = [
  { id: "1", name: "Mi Servidor Principal", icon: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64&h=64&fit=crop&crop=face", hasBot: true },
  { id: "2", name: "Gaming Community", hasBot: true },
  { id: "3", name: "Desarrollo y Coding", hasBot: false },
  { id: "4", name: "Anime & Manga", hasBot: true },
];

export default function DashboardSection({ className = "" }: DashboardSectionProps) {
  const [selectedGuild, setSelectedGuild] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  
  // Configuration states
  const [prefix, setPrefix] = useState("!");
  const [dmMessages, setDmMessages] = useState(true);
  const [welcomeEnabled, setWelcomeEnabled] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("¡Bienvenido {user} a {server}!");
  const [moderationEnabled, setModerationEnabled] = useState(true);
  const [antiSpamEnabled, setAntiSpamEnabled] = useState(true);
  const [levelSystemEnabled, setLevelSystemEnabled] = useState(false);
  const [economyEnabled, setEconomyEnabled] = useState(false);
  const [loggingEnabled, setLoggingEnabled] = useState(false);

  const handleLogin = () => {
    // Simulate Discord OAuth login
    setIsAuthenticated(true);
  };

  const handleSave = () => {
    console.log("Saving configuration...");
    // Handle save logic here
  };

  const handleReset = () => {
    setPrefix("!");
    setDmMessages(true);
    setWelcomeEnabled(false);
    setWelcomeMessage("¡Bienvenido {user} a {server}!");
    setModerationEnabled(true);
    setAntiSpamEnabled(true);
    setLevelSystemEnabled(false);
    setEconomyEnabled(false);
    setLoggingEnabled(false);
  };

  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen bg-background flex items-center justify-center p-4 ${className}`}>
        <Card className="w-full max-w-md bg-card border-border">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
              <ServerCog className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl text-foreground">Dashboard de Shinaky</CardTitle>
            <CardDescription className="text-muted-foreground">
              Inicia sesión con Discord para configurar tu bot
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleLogin}
              className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Iniciar sesión con Discord
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <LayoutDashboard className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard de Shinaky</h1>
              <p className="text-muted-foreground">Configura tu bot para cada servidor</p>
            </div>
          </div>

          {/* Server Selector */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <ServerCog className="w-5 h-5" />
                Seleccionar Servidor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedGuild} onValueChange={setSelectedGuild}>
                <SelectTrigger className="w-full bg-input border-border text-foreground">
                  <SelectValue placeholder="Selecciona un servidor para configurar" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  {mockGuilds.map((guild) => (
                    <SelectItem key={guild.id} value={guild.id} className="text-popover-foreground">
                      <div className="flex items-center gap-3">
                        {guild.icon ? (
                          <img 
                            src={guild.icon} 
                            alt={guild.name}
                            className="w-8 h-8 rounded-full"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                            <ServerCog className="w-4 h-4" />
                          </div>
                        )}
                        <span>{guild.name}</span>
                        {guild.hasBot && (
                          <Badge variant="secondary" className="ml-auto">
                            Bot añadido
                          </Badge>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {selectedGuild && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="bg-card border-border sticky top-6">
                <CardHeader>
                  <CardTitle className="text-sm text-foreground">Configuración</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Tabs value={activeTab} onValueChange={setActiveTab} orientation="vertical">
                    <TabsList className="grid w-full grid-cols-1 bg-transparent h-auto">
                      <TabsTrigger 
                        value="general" 
                        className="justify-start gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        <Settings className="w-4 h-4" />
                        General
                      </TabsTrigger>
                      <TabsTrigger 
                        value="moderation" 
                        className="justify-start gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        <Settings2 className="w-4 h-4" />
                        Moderación
                      </TabsTrigger>
                      <TabsTrigger 
                        value="welcome" 
                        className="justify-start gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        <PanelsLeftBottom className="w-4 h-4" />
                        Bienvenidas
                      </TabsTrigger>
                      <TabsTrigger 
                        value="levels" 
                        className="justify-start gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        <PanelTop className="w-4 h-4" />
                        Niveles
                      </TabsTrigger>
                      <TabsTrigger 
                        value="economy" 
                        className="justify-start gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        <PanelRight className="w-4 h-4" />
                        Economía
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsContent value="general" className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Configuración General</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Ajusta la configuración básica del bot
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="prefix" className="text-foreground">Prefijo del Bot</Label>
                        <Input
                          id="prefix"
                          value={prefix}
                          onChange={(e) => setPrefix(e.target.value)}
                          placeholder="!"
                          className="bg-input border-border text-foreground"
                        />
                        <p className="text-xs text-muted-foreground">
                          Carácter que debe preceder a los comandos (ej: !help)
                        </p>
                      </div>

                      <Separator className="bg-border" />

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-foreground">Mensajes DM</Label>
                          <p className="text-xs text-muted-foreground">
                            Permitir que el bot envíe mensajes directos
                          </p>
                        </div>
                        <Switch
                          checked={dmMessages}
                          onCheckedChange={setDmMessages}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-foreground">Registro de Actividad</Label>
                          <p className="text-xs text-muted-foreground">
                            Registrar acciones del bot en un canal
                          </p>
                        </div>
                        <Switch
                          checked={loggingEnabled}
                          onCheckedChange={setLoggingEnabled}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="moderation" className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Sistema de Moderación</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Configura las herramientas de moderación automática
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-foreground">Moderación Automática</Label>
                          <p className="text-xs text-muted-foreground">
                            Activar herramientas de moderación automática
                          </p>
                        </div>
                        <Switch
                          checked={moderationEnabled}
                          onCheckedChange={setModerationEnabled}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-foreground">Anti-Spam</Label>
                          <p className="text-xs text-muted-foreground">
                            Detectar y prevenir spam automáticamente
                          </p>
                        </div>
                        <Switch
                          checked={antiSpamEnabled}
                          onCheckedChange={setAntiSpamEnabled}
                        />
                      </div>

                      {moderationEnabled && (
                        <div className="space-y-4 p-4 bg-muted rounded-lg">
                          <h4 className="text-sm font-medium text-foreground">Configuración Avanzada</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="text-sm text-foreground">Canal de Moderación</Label>
                              <Select>
                                <SelectTrigger className="bg-input border-border text-foreground">
                                  <SelectValue placeholder="Seleccionar canal" />
                                </SelectTrigger>
                                <SelectContent className="bg-popover border-border">
                                  <SelectItem value="general">general</SelectItem>
                                  <SelectItem value="mod-log">mod-log</SelectItem>
                                  <SelectItem value="admin">admin</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm text-foreground">Límite de Advertencias</Label>
                              <Input 
                                type="number" 
                                placeholder="3" 
                                className="bg-input border-border text-foreground" 
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="welcome" className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Mensajes de Bienvenida</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Configura mensajes automáticos para nuevos miembros
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-foreground">Activar Bienvenidas</Label>
                          <p className="text-xs text-muted-foreground">
                            Enviar mensaje cuando alguien se una al servidor
                          </p>
                        </div>
                        <Switch
                          checked={welcomeEnabled}
                          onCheckedChange={setWelcomeEnabled}
                        />
                      </div>

                      {welcomeEnabled && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="welcomeMsg" className="text-foreground">Mensaje de Bienvenida</Label>
                            <Textarea
                              id="welcomeMsg"
                              value={welcomeMessage}
                              onChange={(e) => setWelcomeMessage(e.target.value)}
                              placeholder="¡Bienvenido {user} a {server}!"
                              className="bg-input border-border text-foreground"
                              rows={4}
                            />
                            <p className="text-xs text-muted-foreground">
                              Usa {"{user}"} para mencionar al usuario y {"{server}"} para el nombre del servidor
                            </p>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-foreground">Canal de Bienvenida</Label>
                            <Select>
                              <SelectTrigger className="bg-input border-border text-foreground">
                                <SelectValue placeholder="Seleccionar canal" />
                              </SelectTrigger>
                              <SelectContent className="bg-popover border-border">
                                <SelectItem value="general">general</SelectItem>
                                <SelectItem value="bienvenidas">bienvenidas</SelectItem>
                                <SelectItem value="lobby">lobby</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="levels" className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-foreground">
                        Sistema de Niveles
                        <Badge variant="secondary">Premium</Badge>
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Gamifica tu servidor con un sistema de experiencia y niveles
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-foreground">Activar Sistema de Niveles</Label>
                          <p className="text-xs text-muted-foreground">
                            Los usuarios ganarán XP por participar en el servidor
                          </p>
                        </div>
                        <Switch
                          checked={levelSystemEnabled}
                          onCheckedChange={setLevelSystemEnabled}
                        />
                      </div>

                      {!levelSystemEnabled && (
                        <div className="p-4 bg-muted rounded-lg text-center">
                          <p className="text-sm text-muted-foreground mb-3">
                            Activa el sistema de niveles para configurar las opciones avanzadas
                          </p>
                          <Button variant="outline" size="sm">
                            Obtener Premium
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="economy" className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-foreground">
                        Sistema de Economía
                        <Badge variant="secondary">Premium</Badge>
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Añade un sistema económico con monedas virtuales
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-foreground">Activar Sistema de Economía</Label>
                          <p className="text-xs text-muted-foreground">
                            Los usuarios podrán ganar y gastar monedas virtuales
                          </p>
                        </div>
                        <Switch
                          checked={economyEnabled}
                          onCheckedChange={setEconomyEnabled}
                        />
                      </div>

                      {!economyEnabled && (
                        <div className="p-4 bg-muted rounded-lg text-center">
                          <p className="text-sm text-muted-foreground mb-3">
                            Activa el sistema de economía para configurar tiendas, trabajos y más
                          </p>
                          <Button variant="outline" size="sm">
                            Obtener Premium
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Guardar Cambios
                </Button>
                <Button onClick={handleReset} variant="outline" className="border-border text-foreground">
                  Restablecer
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}