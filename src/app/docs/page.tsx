"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { 
  Search, 
  Copy, 
  ChevronDown, 
  ChevronRight, 
  ArrowUp, 
  Book, 
  Zap, 
  Settings, 
  Crown, 
  Code, 
  HelpCircle,
  ExternalLink,
  Check,
  Hash,
  MessageCircle,
  Shield,
  Users,
  Bot,
  Webhook,
  AlertTriangle,
  Home,
  ChevronRight as ChevronRightIcon
} from "lucide-react";
import { toast } from "sonner";

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("getting-started");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      toast.error("Failed to copy");
    }
    };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sidebarSections = [
    { id: "getting-started", label: "Getting Started", icon: Book },
    { id: "commands", label: "Commands", icon: Hash },
    { id: "configuration", label: "Configuration", icon: Settings },
    { id: "premium", label: "Premium Features", icon: Crown },
    { id: "api", label: "API", icon: Code },
    { id: "troubleshooting", label: "Troubleshooting", icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-[var(--shinaky-dark-bg)]">
      {/* Hero Section */}
      <div className="border-b border-[var(--shinaky-card-border)]">
        <div className="container py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Shinaky Documentation
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] mb-8">
              Complete guide to setting up and using the Shinaky Discord bot
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-foreground)] w-4 h-4" />
              <Input
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[var(--shinaky-card-bg)] border-[var(--shinaky-card-border)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-8">
              <ScrollArea className="h-[calc(100vh-8rem)]">
                <nav className="space-y-2">
                  {sidebarSections.map((section) => (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        activeSection === section.id 
                          ? "bg-[var(--primary)] text-white" 
                          : "hover:bg-[var(--shinaky-card-bg)]"
                      }`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      <section.icon className="w-4 h-4 mr-2" />
                      {section.label}
                    </Button>
                  ))}
                </nav>
              </ScrollArea>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-[var(--muted-foreground)] mb-6">
              <Home className="w-4 h-4" />
              <ChevronRightIcon className="w-4 h-4" />
              <span>Documentation</span>
              <ChevronRightIcon className="w-4 h-4" />
              <span className="text-white">
                {sidebarSections.find(s => s.id === activeSection)?.label}
              </span>
            </div>

            {/* Content Sections */}
            {activeSection === "getting-started" && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">Getting Started</h2>
                  <p className="text-[var(--muted-foreground)] mb-6">
                    Welcome to Shinaky! Follow these steps to add the bot to your Discord server and get started.
                  </p>

                  <Card className="bg-[var(--shinaky-card-bg)] border-[var(--shinaky-card-border)]">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                        <Bot className="w-5 h-5 mr-2 text-[var(--primary)]" />
                        Quick Start Guide
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                            1
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Invite Shinaky to Your Server</h4>
                            <p className="text-[var(--muted-foreground)] text-sm">
                              Click the button below to invite Shinaky with all necessary permissions.
                            </p>
                            <Button className="mt-2 bg-[var(--shinaky-discord-blue)] hover:bg-[var(--shinaky-discord-blue)]/80">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Add to Discord
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                            2
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Configure Permissions</h4>
                            <p className="text-[var(--muted-foreground)] text-sm">
                              Ensure Shinaky has the following permissions for optimal functionality:
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {["Read Messages", "Send Messages", "Manage Messages", "Embed Links", "Use Slash Commands"].map((perm) => (
                                <span key={perm} className="px-2 py-1 bg-[var(--primary)]/20 text-[var(--primary)] text-xs rounded">
                                  {perm}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                            3
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Run Your First Command</h4>
                            <p className="text-[var(--muted-foreground)] text-sm">
                              Try the help command to see all available features:
                            </p>
                            <div className="mt-2 bg-black/50 p-3 rounded font-mono text-sm flex items-center justify-between">
                              <code className="text-[var(--primary)]">/help</code>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => copyToClipboard("/help")}
                                className="h-6 w-6 p-0"
                              >
                                {copiedText === "/help" ? (
                                  <Check className="w-3 h-3 text-green-500" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>
            )}

            {activeSection === "commands" && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">Commands</h2>
                  <p className="text-[var(--muted-foreground)] mb-6">
                    Comprehensive list of all Shinaky commands organized by category.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        category: "General Commands",
                        icon: MessageCircle,
                        commands: [
                          { name: "/help", description: "Show all available commands", example: "/help" },
                          { name: "/ping", description: "Check bot latency", example: "/ping" },
                          { name: "/serverinfo", description: "Display server information", example: "/serverinfo" },
                          { name: "/userinfo", description: "Show user information", example: "/userinfo @user" }
                        ]
                      },
                      {
                        category: "Moderation",
                        icon: Shield,
                        commands: [
                          { name: "/ban", description: "Ban a user from the server", example: "/ban @user reason" },
                          { name: "/kick", description: "Kick a user from the server", example: "/kick @user reason" },
                          { name: "/mute", description: "Mute a user for specified duration", example: "/mute @user 10m spamming" },
                          { name: "/clear", description: "Delete multiple messages", example: "/clear 50" }
                        ]
                      },
                      {
                        category: "Utility",
                        icon: Settings,
                        commands: [
                          { name: "/avatar", description: "Show user's avatar", example: "/avatar @user" },
                          { name: "/remind", description: "Set a reminder", example: "/remind 1h Take a break" },
                          { name: "/poll", description: "Create a poll", example: "/poll 'Question?' 'Option 1' 'Option 2'" },
                          { name: "/weather", description: "Get weather information", example: "/weather Tokyo" }
                        ]
                      }
                    ].map((category) => (
                      <Card key={category.category} className="bg-[var(--shinaky-card-bg)] border-[var(--shinaky-card-border)]">
                        <Collapsible defaultOpen>
                          <CollapsibleTrigger asChild>
                            <CardContent className="p-6 cursor-pointer hover:bg-[var(--shinaky-card-bg)]/80 transition-colors">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <category.icon className="w-6 h-6 text-[var(--primary)]" />
                                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                                </div>
                                <ChevronDown className="w-5 h-5 text-[var(--muted-foreground)]" />
                              </div>
                            </CardContent>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="px-6 pb-6 space-y-4">
                              {category.commands.map((command) => (
                                <div key={command.name} className="border-l-2 border-[var(--primary)] pl-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <code className="text-[var(--primary)] font-semibold">{command.name}</code>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => copyToClipboard(command.example)}
                                      className="h-6 w-6 p-0"
                                    >
                                      {copiedText === command.example ? (
                                        <Check className="w-3 h-3 text-green-500" />
                                      ) : (
                                        <Copy className="w-3 h-3" />
                                      )}
                                    </Button>
                                  </div>
                                  <p className="text-[var(--muted-foreground)] text-sm mb-2">{command.description}</p>
                                  <div className="bg-black/50 p-2 rounded text-sm">
                                    <span className="text-[var(--muted-foreground)]">Example: </span>
                                    <code className="text-[var(--primary)]">{command.example}</code>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </Card>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeSection === "configuration" && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">Configuration</h2>
                  <p className="text-[var(--muted-foreground)] mb-6">
                    Learn how to configure Shinaky for your server using the web dashboard.
                  </p>

                  <Card className="bg-[var(--shinaky-card-bg)] border-[var(--shinaky-card-border)]">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                        <Settings className="w-5 h-5 mr-2 text-[var(--primary)]" />
                        Dashboard Setup
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-white mb-2">Accessing the Dashboard</h4>
                          <p className="text-[var(--muted-foreground)] text-sm mb-3">
                            Visit the Shinaky dashboard to configure your server settings through a user-friendly interface.
                          </p>
                          <Button className="bg-[var(--primary)] hover:bg-[var(--primary)]/80">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Open Dashboard
                          </Button>
                        </div>

                        <div>
                          <h4 className="font-medium text-white mb-2">Auto-Moderation</h4>
                          <p className="text-[var(--muted-foreground)] text-sm mb-3">
                            Configure automatic moderation rules to keep your server clean.
                          </p>
                          <div className="bg-black/50 p-4 rounded space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-white">Anti-Spam Protection</span>
                              <span className="text-[var(--primary)]">Enabled</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-white">Word Filter</span>
                              <span className="text-[var(--primary)]">Configurable</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-white">Auto-Role Assignment</span>
                              <span className="text-[var(--primary)]">Available</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-white mb-2">Welcome & Goodbye Messages</h4>
                          <p className="text-[var(--muted-foreground)] text-sm mb-3">
                            Customize messages for when users join or leave your server.
                          </p>
                          <div className="bg-black/50 p-3 rounded font-mono text-sm">
                            <div className="text-[var(--muted-foreground)] mb-1">Welcome message example:</div>
                            <code className="text-white">
                              Welcome {"{user}"} to {"{server}"}! Make sure to read the rules.
                            </code>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>
            )}

            {activeSection === "premium" && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">Premium Features</h2>
                  <p className="text-[var(--muted-foreground)] mb-6">
                    Unlock advanced features and enhanced functionality with Shinaky Premium.
                  </p>

                  <Card className="bg-gradient-to-br from-[var(--primary)]/20 to-[var(--shinaky-purple)]/20 border-[var(--primary)]">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Crown className="w-6 h-6 text-[var(--primary)] mr-2" />
                        <h3 className="text-xl font-semibold text-white">Shinaky Premium</h3>
                        <span className="ml-auto bg-[var(--primary)] text-white px-2 py-1 rounded text-sm">
                          $4.99/month
                        </span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-white mb-3">Enhanced Features</h4>
                          <ul className="space-y-2 text-[var(--muted-foreground)] text-sm">
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-[var(--primary)] mr-2" />
                              Custom command prefixes
                            </li>
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-[var(--primary)] mr-2" />
                              Advanced auto-moderation
                            </li>
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-[var(--primary)] mr-2" />
                              Priority support
                            </li>
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-[var(--primary)] mr-2" />
                              Custom welcome cards
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-3">Advanced Tools</h4>
                          <ul className="space-y-2 text-[var(--muted-foreground)] text-sm">
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-[var(--primary)] mr-2" />
                              Detailed analytics dashboard
                            </li>
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-[var(--primary)] mr-2" />
                              Custom bot status
                            </li>
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-[var(--primary)] mr-2" />
                              Webhook integrations
                            </li>
                            <li className="flex items-center">
                              <Check className="w-4 h-4 text-[var(--primary)] mr-2" />
                              No cooldowns on commands
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-6 bg-[var(--primary)] hover:bg-[var(--primary)]/80">
                        <Crown className="w-4 h-4 mr-2" />
                        Upgrade to Premium
                      </Button>
                    </CardContent>
                  </Card>
                </section>
              </div>
            )}

            {activeSection === "api" && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">API Documentation</h2>
                  <p className="text-[var(--muted-foreground)] mb-6">
                    Integrate with Shinaky's API for custom applications and advanced server management.
                  </p>

                  <div className="space-y-6">
                    <Card className="bg-[var(--shinaky-card-bg)] border-[var(--shinaky-card-border)]">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                          <Code className="w-5 h-5 mr-2 text-[var(--primary)]" />
                          Authentication
                        </h3>
                        <p className="text-[var(--muted-foreground)] text-sm mb-4">
                          All API requests require authentication using your server's API key.
                        </p>
                        <div className="bg-black/50 p-4 rounded">
                          <div className="text-[var(--muted-foreground)] text-sm mb-2">Request Header:</div>
                          <div className="flex items-center justify-between">
                            <code className="text-[var(--primary)]">Authorization: Bearer YOUR_API_KEY</code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard("Authorization: Bearer YOUR_API_KEY")}
                              className="h-6 w-6 p-0"
                            >
                              {copiedText === "Authorization: Bearer YOUR_API_KEY" ? (
                                <Check className="w-3 h-3 text-green-500" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-[var(--shinaky-card-bg)] border-[var(--shinaky-card-border)]">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                          <Webhook className="w-5 h-5 mr-2 text-[var(--primary)]" />
                          Endpoints
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center mb-2">
                              <span className="bg-green-500 text-white px-2 py-1 rounded text-xs mr-2">GET</span>
                              <code className="text-[var(--primary)]">/api/v1/server/{"{server_id}"}</code>
                            </div>
                            <p className="text-[var(--muted-foreground)] text-sm">Get server information and statistics</p>
                          </div>
                          <div>
                            <div className="flex items-center mb-2">
                              <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-2">POST</span>
                              <code className="text-[var(--primary)]">/api/v1/moderation/ban</code>
                            </div>
                            <p className="text-[var(--muted-foreground)] text-sm">Ban a user from the server</p>
                          </div>
                          <div>
                            <div className="flex items-center mb-2">
                              <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs mr-2">PUT</span>
                              <code className="text-[var(--primary)]">/api/v1/settings/update</code>
                            </div>
                            <p className="text-[var(--muted-foreground)] text-sm">Update server configuration</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              </div>
            )}

            {activeSection === "troubleshooting" && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">Troubleshooting</h2>
                  <p className="text-[var(--muted-foreground)] mb-6">
                    Common issues and their solutions to help you get the most out of Shinaky.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        question: "Shinaky is not responding to commands",
                        answer: "Check that Shinaky has the necessary permissions and that you're using the correct command syntax. Ensure the bot is online and has Read Messages and Send Messages permissions."
                      },
                      {
                        question: "Auto-moderation is not working",
                        answer: "Verify that auto-moderation is enabled in the dashboard and that Shinaky has Manage Messages and other required moderation permissions. Check that the bot's role is higher than the users you want to moderate."
                      },
                      {
                        question: "Dashboard shows 'Server Not Found'",
                        answer: "Make sure you're logged in with the correct Discord account and that you have administrator permissions on the server. Try refreshing the page or logging out and back in."
                      },
                      {
                        question: "Welcome messages are not appearing",
                        answer: "Check that welcome messages are enabled in the dashboard and that you've selected the correct welcome channel. Ensure Shinaky has permission to send messages in that channel."
                      },
                      {
                        question: "Commands are slow or timing out",
                        answer: "This usually indicates high server load or network issues. Try again in a few minutes. If the problem persists, contact support through our Discord server."
                      }
                    ].map((faq, index) => (
                      <Card key={index} className="bg-[var(--shinaky-card-bg)] border-[var(--shinaky-card-border)]">
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <CardContent className="p-6 cursor-pointer hover:bg-[var(--shinaky-card-bg)]/80 transition-colors">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <AlertTriangle className="w-5 h-5 text-[var(--primary)]" />
                                  <h3 className="font-medium text-white">{faq.question}</h3>
                                </div>
                                <ChevronRight className="w-5 h-5 text-[var(--muted-foreground)]" />
                              </div>
                            </CardContent>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="px-6 pb-6">
                              <p className="text-[var(--muted-foreground)]">{faq.answer}</p>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </Card>
                    ))}
                  </div>

                  <Card className="bg-[var(--shinaky-card-bg)] border-[var(--shinaky-card-border)]">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                        <Users className="w-5 h-5 mr-2 text-[var(--primary)]" />
                        Need More Help?
                      </h3>
                      <p className="text-[var(--muted-foreground)] mb-4">
                        Join our support server for direct assistance from our team and community.
                      </p>
                      <Button className="bg-[var(--shinaky-discord-blue)] hover:bg-[var(--shinaky-discord-blue)]/80">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Join Support Server
                      </Button>
                    </CardContent>
                  </Card>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[var(--primary)] hover:bg-[var(--primary)]/80 shadow-lg"
          size="sm"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}