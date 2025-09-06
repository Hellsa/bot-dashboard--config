"use client";

import { useState } from "react";
import { Settings, Shield, MessageCircle, TrendingUp, Coins, Users, Crown, Check, Save, RotateCcw, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

// Mock data for servers
const mockServers = [
  {
    id: "1",
    name: "Gaming Community",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=64&h=64&fit=crop&crop=face",
    memberCount: 1250,
    botAdded: true,
    hasPermissions: true
  },
  {
    id: "2", 
    name: "Anime Lovers",
    icon: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=64&h=64&fit=crop&crop=face",
    memberCount: 850,
    botAdded: true,
    hasPermissions: true
  },
  {
    id: "3",
    name: "Tech Hub",
    icon: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=64&h=64&fit=crop&crop=face", 
    memberCount: 2100,
    botAdded: false,
    hasPermissions: true
  }
];

// Mock configuration data
const defaultConfig = {
  general: {
    prefix: "!",
    dmOnJoin: true,
    logging: true,
    logChannel: "mod-logs"
  },
  moderation: {
    autoMod: true,
    antiSpam: true,
    warningLimit: 3,
    muteRole: "Muted"
  },
  welcome: {
    enabled: true,
    channel: "welcome",
    message: "¡Bienvenido {user} a nuestro servidor! 🎉"
  },
  levels: {
    enabled: false, // Premium feature
    channel: "level-ups",
    multiplier: 1.0
  },
  economy: {
    enabled: false, // Premium feature
    dailyAmount: 100,
    currency: "coins"
  }
};

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedServer, setSelectedServer] = useState(null);
  const [activeTab, setActiveTab] = useState("general");
  const [config, setConfig] = useState(defaultConfig);
  const [hasChanges, setHasChanges] = useState(false);

  // Mock authentication
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleServerSelect = (server) => {
    setSelectedServer(server);
  };

  const updateConfig = (section, key, value) => {
    setConfig(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // Mock save functionality
    console.log("Saving configuration:", config);
    setHasChanges(false);
  };

  const handleReset = () => {
    setConfig(defaultConfig);
    setHasChanges(false);
  };

  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "moderation", label: "Moderación", icon: Shield },
    { id: "welcome", label: "Bienvenida", icon: MessageCircle },
    { id: "levels", label: "Niveles", icon: TrendingUp, premium: true },
    { id: "economy", label: "Economía", icon: Coins, premium: true }
  ];

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-[#1a1a1a] border-[#333333]">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Shinaky Dashboard</CardTitle>
            <CardDescription>
              Inicia sesión con Discord para gestionar tus servidores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleLogin}
              className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white font-medium py-3 h-auto"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Iniciar sesión con Discord
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Server selection screen
  if (!selectedServer) {
    return (
      <div className="min-h-screen bg-black p-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Selecciona un Servidor</h1>
            <p className="text-muted-foreground">Elige un servidor para configurar Shinaky Bot</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockServers.map((server) => (
              <Card 
                key={server.id} 
                className={`bg-[#1a1a1a] border-[#333333] transition-all duration-200 hover:border-primary/50 ${
                  server.botAdded && server.hasPermissions 
                    ? 'cursor-pointer hover:scale-105' 
                    : 'opacity-60 cursor-not-allowed'
                }`}
                onClick={() => server.botAdded && server.hasPermissions && handleServerSelect(server)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={server.icon} 
                      alt={server.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg text-white truncate">
                        {server.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {server.memberCount.toLocaleString()} miembros
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    {server.botAdded ? (
                      <Badge className="bg-primary text-white">
                        <Check className="w-3 h-3 mr-1" />
                        Bot Añadido
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-muted text-muted-foreground">
                        Bot No Añadido
                      </Badge>
                    )}
                    
                    {server.hasPermissions ? (
                      <Badge variant="outline" className="border-green-500 text-green-400">
                        Admin
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-red-500 text-red-400">
                        Sin Permisos
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              Añadir Bot a Nuevo Servidor
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard configuration screen
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-[#333333] bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => setSelectedServer(null)}
                className="text-muted-foreground hover:text-white"
              >
                ← Volver
              </Button>
              <div className="flex items-center space-x-3">
                <img 
                  src={selectedServer.icon} 
                  alt={selectedServer.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h1 className="text-xl font-bold text-white">{selectedServer.name}</h1>
                  <p className="text-sm text-muted-foreground">Dashboard de Configuración</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {hasChanges && (
                <Badge variant="outline" className="border-yellow-500 text-yellow-400">
                  Cambios sin guardar
                </Badge>
              )}
              <Button
                onClick={handleReset}
                variant="outline"
                disabled={!hasChanges}
                className="border-muted text-muted-foreground hover:text-white"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Resetear
              </Button>
              <Button
                onClick={handleSave}
                disabled={!hasChanges}
                className="bg-primary hover:bg-primary/90"
              >
                <Save className="w-4 h-4 mr-2" />
                Guardar Cambios
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 flex gap-6">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <Card className="bg-[#1a1a1a] border-[#333333] sticky top-4">
            <CardContent className="p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <Button
                      key={tab.id}
                      variant={activeTab === tab.id ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        activeTab === tab.id 
                          ? "bg-primary text-white" 
                          : "text-muted-foreground hover:text-white hover:bg-muted/10"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {tab.label}
                      {tab.premium && (
                        <Crown className="w-3 h-3 ml-auto text-yellow-500" />
                      )}
                    </Button>
                  );
                })}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {activeTab === "general" && (
            <Card className="bg-[#1a1a1a] border-[#333333]">
              <CardHeader>
                <CardTitle className="text-white">Configuración General</CardTitle>
                <CardDescription>
                  Ajusta la configuración básica del bot
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="prefix" className="text-white">Prefijo del Bot</Label>
                    <Input
                      id="prefix"
                      value={config.general.prefix}
                      onChange={(e) => updateConfig("general", "prefix", e.target.value)}
                      className="bg-[#333333] border-[#555555] text-white mt-2"
                      placeholder="!"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Mensaje DM al unirse</Label>
                      <p className="text-sm text-muted-foreground">
                        Enviar mensaje privado cuando alguien se une
                      </p>
                    </div>
                    <Switch
                      checked={config.general.dmOnJoin}
                      onCheckedChange={(checked) => updateConfig("general", "dmOnJoin", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Sistema de Logs</Label>
                      <p className="text-sm text-muted-foreground">
                        Registrar acciones del servidor
                      </p>
                    </div>
                    <Switch
                      checked={config.general.logging}
                      onCheckedChange={(checked) => updateConfig("general", "logging", checked)}
                    />
                  </div>

                  {config.general.logging && (
                    <div>
                      <Label className="text-white">Canal de Logs</Label>
                      <Select 
                        value={config.general.logChannel}
                        onValueChange={(value) => updateConfig("general", "logChannel", value)}
                      >
                        <SelectTrigger className="bg-[#333333] border-[#555555] text-white mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#333333] border-[#555555]">
                          <SelectItem value="mod-logs">#mod-logs</SelectItem>
                          <SelectItem value="admin-logs">#admin-logs</SelectItem>
                          <SelectItem value="general">#general</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "moderation" && (
            <Card className="bg-[#1a1a1a] border-[#333333]">
              <CardHeader>
                <CardTitle className="text-white">Configuración de Moderación</CardTitle>
                <CardDescription>
                  Configura las herramientas de moderación automática
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Auto-moderación</Label>
                    <p className="text-sm text-muted-foreground">
                      Filtrar automáticamente contenido inapropiado
                    </p>
                  </div>
                  <Switch
                    checked={config.moderation.autoMod}
                    onCheckedChange={(checked) => updateConfig("moderation", "autoMod", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Anti-Spam</Label>
                    <p className="text-sm text-muted-foreground">
                      Detectar y prevenir spam automáticamente
                    </p>
                  </div>
                  <Switch
                    checked={config.moderation.antiSpam}
                    onCheckedChange={(checked) => updateConfig("moderation", "antiSpam", checked)}
                  />
                </div>

                <div>
                  <Label className="text-white">Límite de Advertencias</Label>
                  <Input
                    type="number"
                    value={config.moderation.warningLimit}
                    onChange={(e) => updateConfig("moderation", "warningLimit", parseInt(e.target.value))}
                    className="bg-[#333333] border-[#555555] text-white mt-2"
                    min="1"
                    max="10"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Número de advertencias antes de acción automática
                  </p>
                </div>

                <div>
                  <Label className="text-white">Rol de Silenciado</Label>
                  <Select 
                    value={config.moderation.muteRole}
                    onValueChange={(value) => updateConfig("moderation", "muteRole", value)}
                  >
                    <SelectTrigger className="bg-[#333333] border-[#555555] text-white mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#333333] border-[#555555]">
                      <SelectItem value="Muted">@Muted</SelectItem>
                      <SelectItem value="Silenciado">@Silenciado</SelectItem>
                      <SelectItem value="Timeout">@Timeout</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "welcome" && (
            <Card className="bg-[#1a1a1a] border-[#333333]">
              <CardHeader>
                <CardTitle className="text-white">Mensajes de Bienvenida</CardTitle>
                <CardDescription>
                  Personaliza cómo se recibe a los nuevos miembros
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Mensajes de Bienvenida</Label>
                    <p className="text-sm text-muted-foreground">
                      Activar mensajes automáticos para nuevos miembros
                    </p>
                  </div>
                  <Switch
                    checked={config.welcome.enabled}
                    onCheckedChange={(checked) => updateConfig("welcome", "enabled", checked)}
                  />
                </div>

                {config.welcome.enabled && (
                  <>
                    <div>
                      <Label className="text-white">Canal de Bienvenida</Label>
                      <Select 
                        value={config.welcome.channel}
                        onValueChange={(value) => updateConfig("welcome", "channel", value)}
                      >
                        <SelectTrigger className="bg-[#333333] border-[#555555] text-white mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#333333] border-[#555555]">
                          <SelectItem value="welcome">#welcome</SelectItem>
                          <SelectItem value="general">#general</SelectItem>
                          <SelectItem value="lobby">#lobby</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-white">Mensaje Personalizado</Label>
                      <Textarea
                        value={config.welcome.message}
                        onChange={(e) => updateConfig("welcome", "message", e.target.value)}
                        className="bg-[#333333] border-[#555555] text-white mt-2"
                        rows={3}
                        placeholder="¡Bienvenido {user} a nuestro servidor! 🎉"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Usa {"{user}"} para mencionar al usuario, {"{server}"} para el nombre del servidor
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          )}

          {(activeTab === "levels" || activeTab === "economy") && (
            <Card className="bg-[#1a1a1a] border-[#333333] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10" />
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-medium">
                  <Crown className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              </div>
              <CardHeader className="relative">
                <CardTitle className="text-white flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-yellow-500" />
                  {activeTab === "levels" ? "Sistema de Niveles" : "Sistema de Economía"}
                </CardTitle>
                <CardDescription>
                  Esta función requiere Shinaky Premium para ser utilizada
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="text-center py-8">
                  <Crown className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Desbloquea {activeTab === "levels" ? "Niveles" : "Economía"} Premium
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Accede a funciones avanzadas con Shinaky Premium
                  </p>
                  <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-medium hover:from-yellow-600 hover:to-orange-600">
                    <Crown className="w-4 h-4 mr-2" />
                    Obtener Premium
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}