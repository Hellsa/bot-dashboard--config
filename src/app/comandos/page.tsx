"use client";

import { useState, useMemo } from "react";
import { Search, Copy, Crown, Settings, Users, Music, Gamepad2, TrendingUp, DollarSign, Heart, Shield, Hash, CheckCircle, AlertCircle, Slash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

interface Command {
  name: string;
  description: string;
  usage: string;
  aliases?: string[];
  permissions: "Everyone" | "Moderator" | "Admin";
  premium?: boolean;
  example?: string;
}

interface CommandCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  commands: Command[];
}

const commandCategories: CommandCategory[] = [
  {
    id: "general",
    name: "General/Utility",
    icon: Hash,
    description: "Basic bot commands and server utilities",
    commands: [
      {
        name: "help",
        description: "Display help information about bot commands",
        usage: "/help [command]",
        aliases: ["h"],
        permissions: "Everyone",
        example: "/help ping"
      },
      {
        name: "ping",
        description: "Check the bot's response time and latency",
        usage: "/ping",
        permissions: "Everyone"
      },
      {
        name: "info",
        description: "Display information about the bot",
        usage: "/info",
        aliases: ["botinfo"],
        permissions: "Everyone"
      },
      {
        name: "serverinfo",
        description: "Display detailed information about the current server",
        usage: "/serverinfo",
        aliases: ["server"],
        permissions: "Everyone"
      },
      {
        name: "userinfo",
        description: "Display information about a user",
        usage: "/userinfo [user]",
        aliases: ["user"],
        permissions: "Everyone",
        example: "/userinfo @username"
      },
      {
        name: "avatar",
        description: "Display a user's avatar in full size",
        usage: "/avatar [user]",
        permissions: "Everyone",
        example: "/avatar @username"
      }
    ]
  },
  {
    id: "moderation",
    name: "Moderation",
    icon: Shield,
    description: "Server moderation and management tools",
    commands: [
      {
        name: "ban",
        description: "Ban a user from the server",
        usage: "/ban <user> [reason]",
        permissions: "Moderator",
        example: "/ban @user Spamming in chat"
      },
      {
        name: "kick",
        description: "Kick a user from the server",
        usage: "/kick <user> [reason]",
        permissions: "Moderator",
        example: "/kick @user Breaking rules"
      },
      {
        name: "mute",
        description: "Temporarily mute a user",
        usage: "/mute <user> <duration> [reason]",
        permissions: "Moderator",
        example: "/mute @user 1h Inappropriate behavior"
      },
      {
        name: "unmute",
        description: "Remove mute from a user",
        usage: "/unmute <user>",
        permissions: "Moderator"
      },
      {
        name: "warn",
        description: "Issue a warning to a user",
        usage: "/warn <user> <reason>",
        permissions: "Moderator",
        example: "/warn @user Please follow server rules"
      },
      {
        name: "clear",
        description: "Delete multiple messages at once",
        usage: "/clear <amount> [user]",
        aliases: ["purge"],
        permissions: "Moderator",
        example: "/clear 10 @user"
      },
      {
        name: "slowmode",
        description: "Set channel slowmode delay",
        usage: "/slowmode <seconds>",
        permissions: "Moderator",
        example: "/slowmode 5"
      }
    ]
  },
  {
    id: "fun",
    name: "Fun/Entertainment",
    icon: Gamepad2,
    description: "Games, jokes, and entertainment commands",
    commands: [
      {
        name: "8ball",
        description: "Ask the magic 8-ball a question",
        usage: "/8ball <question>",
        permissions: "Everyone",
        example: "/8ball Will I win today?"
      },
      {
        name: "dice",
        description: "Roll one or more dice",
        usage: "/dice [sides] [count]",
        aliases: ["roll"],
        permissions: "Everyone",
        example: "/dice 6 2"
      },
      {
        name: "coinflip",
        description: "Flip a coin",
        usage: "/coinflip",
        aliases: ["flip"],
        permissions: "Everyone"
      },
      {
        name: "joke",
        description: "Get a random joke",
        usage: "/joke",
        permissions: "Everyone"
      },
      {
        name: "meme",
        description: "Get a random meme from popular subreddits",
        usage: "/meme [subreddit]",
        permissions: "Everyone",
        example: "/meme dankmemes"
      },
      {
        name: "quote",
        description: "Get an inspirational quote",
        usage: "/quote",
        permissions: "Everyone"
      },
      {
        name: "trivia",
        description: "Start a trivia question",
        usage: "/trivia [category] [difficulty]",
        permissions: "Everyone",
        example: "/trivia science easy"
      }
    ]
  },
  {
    id: "music",
    name: "Music",
    icon: Music,
    description: "Music player controls and features",
    commands: [
      {
        name: "play",
        description: "Play a song from YouTube, Spotify, or other sources",
        usage: "/play <song/url>",
        aliases: ["p"],
        permissions: "Everyone",
        example: "/play Never Gonna Give You Up"
      },
      {
        name: "pause",
        description: "Pause the current song",
        usage: "/pause",
        permissions: "Everyone"
      },
      {
        name: "resume",
        description: "Resume the paused song",
        usage: "/resume",
        permissions: "Everyone"
      },
      {
        name: "skip",
        description: "Skip the current song",
        usage: "/skip",
        aliases: ["next"],
        permissions: "Everyone"
      },
      {
        name: "stop",
        description: "Stop playing music and clear the queue",
        usage: "/stop",
        permissions: "Everyone"
      },
      {
        name: "queue",
        description: "Display the current music queue",
        usage: "/queue",
        aliases: ["q"],
        permissions: "Everyone"
      },
      {
        name: "nowplaying",
        description: "Show information about the current song",
        usage: "/nowplaying",
        aliases: ["np"],
        permissions: "Everyone"
      },
      {
        name: "shuffle",
        description: "Shuffle the music queue",
        usage: "/shuffle",
        permissions: "Everyone"
      },
      {
        name: "loop",
        description: "Loop the current song or queue",
        usage: "/loop [song/queue/off]",
        permissions: "Everyone",
        example: "/loop song"
      }
    ]
  },
  {
    id: "levels",
    name: "Levels/XP",
    icon: TrendingUp,
    description: "Level system and experience tracking",
    commands: [
      {
        name: "level",
        description: "Check your or another user's level and XP",
        usage: "/level [user]",
        aliases: ["rank"],
        permissions: "Everyone",
        premium: true,
        example: "/level @username"
      },
      {
        name: "leaderboard",
        description: "Display the server's level leaderboard",
        usage: "/leaderboard",
        aliases: ["lb", "top"],
        permissions: "Everyone",
        premium: true
      },
      {
        name: "setlevel",
        description: "Set a user's level (admin only)",
        usage: "/setlevel <user> <level>",
        permissions: "Admin",
        premium: true,
        example: "/setlevel @user 10"
      },
      {
        name: "addxp",
        description: "Add XP to a user",
        usage: "/addxp <user> <amount>",
        permissions: "Admin",
        premium: true,
        example: "/addxp @user 1000"
      },
      {
        name: "levelconfig",
        description: "Configure level system settings",
        usage: "/levelconfig",
        permissions: "Admin",
        premium: true
      }
    ]
  },
  {
    id: "economy",
    name: "Economy",
    icon: DollarSign,
    description: "Virtual economy and currency system",
    commands: [
      {
        name: "balance",
        description: "Check your or another user's balance",
        usage: "/balance [user]",
        aliases: ["bal", "money"],
        permissions: "Everyone",
        premium: true,
        example: "/balance @username"
      },
      {
        name: "daily",
        description: "Claim your daily currency reward",
        usage: "/daily",
        permissions: "Everyone",
        premium: true
      },
      {
        name: "work",
        description: "Work to earn currency",
        usage: "/work",
        permissions: "Everyone",
        premium: true
      },
      {
        name: "shop",
        description: "View the server shop",
        usage: "/shop",
        permissions: "Everyone",
        premium: true
      },
      {
        name: "buy",
        description: "Purchase an item from the shop",
        usage: "/buy <item> [quantity]",
        permissions: "Everyone",
        premium: true,
        example: "/buy premium_role 1"
      },
      {
        name: "inventory",
        description: "View your inventory",
        usage: "/inventory",
        aliases: ["inv"],
        permissions: "Everyone",
        premium: true
      },
      {
        name: "give",
        description: "Give currency to another user",
        usage: "/give <user> <amount>",
        aliases: ["pay"],
        permissions: "Everyone",
        premium: true,
        example: "/give @user 500"
      },
      {
        name: "gamble",
        description: "Gamble your currency",
        usage: "/gamble <amount>",
        aliases: ["bet"],
        permissions: "Everyone",
        premium: true,
        example: "/gamble 100"
      }
    ]
  },
  {
    id: "roleplay",
    name: "Roleplay",
    icon: Heart,
    description: "Interactive roleplay and social commands",
    commands: [
      {
        name: "hug",
        description: "Give someone a hug",
        usage: "/hug <user>",
        permissions: "Everyone",
        example: "/hug @friend"
      },
      {
        name: "kiss",
        description: "Give someone a kiss",
        usage: "/kiss <user>",
        permissions: "Everyone",
        example: "/kiss @someone"
      },
      {
        name: "pat",
        description: "Pat someone on the head",
        usage: "/pat <user>",
        permissions: "Everyone",
        example: "/pat @user"
      },
      {
        name: "slap",
        description: "Playfully slap someone",
        usage: "/slap <user>",
        permissions: "Everyone",
        example: "/slap @annoying_friend"
      },
      {
        name: "dance",
        description: "Show off your dance moves",
        usage: "/dance [user]",
        permissions: "Everyone",
        example: "/dance @partner"
      },
      {
        name: "cry",
        description: "Express sadness",
        usage: "/cry [reason]",
        permissions: "Everyone",
        example: "/cry I'm sad"
      },
      {
        name: "laugh",
        description: "Share a laugh",
        usage: "/laugh [user]",
        permissions: "Everyone",
        example: "/laugh @comedian"
      }
    ]
  },
  {
    id: "admin",
    name: "Admin",
    icon: Settings,
    description: "Administrative server management commands",
    commands: [
      {
        name: "config",
        description: "Configure bot settings for the server",
        usage: "/config",
        permissions: "Admin"
      },
      {
        name: "prefix",
        description: "Change the bot's command prefix",
        usage: "/prefix <new_prefix>",
        permissions: "Admin",
        example: "/prefix !"
      },
      {
        name: "autorole",
        description: "Configure automatic role assignment",
        usage: "/autorole <role>",
        permissions: "Admin",
        example: "/autorole @Member"
      },
      {
        name: "welcome",
        description: "Configure welcome messages",
        usage: "/welcome <channel> [message]",
        permissions: "Admin",
        example: "/welcome #general Welcome {user}!"
      },
      {
        name: "goodbye",
        description: "Configure goodbye messages",
        usage: "/goodbye <channel> [message]",
        permissions: "Admin",
        example: "/goodbye #general Goodbye {user}!"
      },
      {
        name: "automod",
        description: "Configure automatic moderation settings",
        usage: "/automod",
        permissions: "Admin"
      },
      {
        name: "logs",
        description: "Configure server logging",
        usage: "/logs <channel>",
        permissions: "Admin",
        example: "/logs #mod-logs"
      },
      {
        name: "backup",
        description: "Create a server backup",
        usage: "/backup create [name]",
        permissions: "Admin",
        example: "/backup create weekly_backup"
      }
    ]
  }
];

const getPermissionColor = (permission: string) => {
  switch (permission) {
    case "Everyone":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Moderator":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Admin":
      return "bg-red-500/20 text-red-400 border-red-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

const getPermissionIcon = (permission: string) => {
  switch (permission) {
    case "Everyone":
      return <Users className="w-3 h-3" />;
    case "Moderator":
      return <AlertCircle className="w-3 h-3" />;
    case "Admin":
      return <Shield className="w-3 h-3" />;
    default:
      return <Users className="w-3 h-3" />;
  }
};

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Command copied to clipboard!");
};

export default function CommandsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCommands = useMemo(() => {
    const filtered = commandCategories.map(category => ({
      ...category,
      commands: category.commands.filter(command =>
        command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        command.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        command.aliases?.some(alias => alias.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    })).filter(category => 
      selectedCategory === "all" || category.id === selectedCategory
    );

    return filtered.filter(category => category.commands.length > 0);
  }, [searchTerm, selectedCategory]);

  const totalCommands = commandCategories.reduce((total, category) => total + category.commands.length, 0);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <Navigation />
      
      {/* Header */}
      <div className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Bot Commands
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore all {totalCommands} commands available in Shinaky bot. From moderation to fun activities, find everything you need to enhance your Discord server.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search commands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zinc-900 border-zinc-700 text-white placeholder-gray-400 focus:border-[#33a65b] focus:ring-[#33a65b]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 lg:sticky lg:top-8 h-fit">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedCategory === "all" ? "default" : "ghost"}
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full justify-start ${
                    selectedCategory === "all" 
                      ? "bg-[#33a65b] hover:bg-[#2d8f50] text-white" 
                      : "text-gray-300 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  <Hash className="w-4 h-4 mr-2" />
                  All Commands
                </Button>
                {commandCategories.map((category) => {
                  const Icon = category.icon;
                  const commandCount = category.commands.length;
                  const premiumCount = category.commands.filter(cmd => cmd.premium).length;
                  
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full justify-start ${
                        selectedCategory === category.id 
                          ? "bg-[#33a65b] hover:bg-[#2d8f50] text-white" 
                          : "text-gray-300 hover:text-white hover:bg-zinc-800"
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      <span className="flex-1 text-left">{category.name}</span>
                      <span className="text-xs opacity-70">
                        {commandCount}
                        {premiumCount > 0 && (
                          <Crown className="w-3 h-3 ml-1 inline text-yellow-500" />
                        )}
                      </span>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {filteredCommands.length === 0 ? (
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="py-12 text-center">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No commands found</h3>
                  <p className="text-gray-400">
                    Try adjusting your search terms or browse different categories.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-8">
                {filteredCommands.map((category) => (
                  <div key={category.id} className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-[#33a65b]/20 rounded-lg">
                        <category.icon className="w-6 h-6 text-[#33a65b]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                        <p className="text-gray-400">{category.description}</p>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {category.commands.map((command) => (
                        <Card key={command.name} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors group">
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-2">
                                <Slash className="w-4 h-4 text-[#33a65b]" />
                                <CardTitle className="text-lg text-white">
                                  {command.name}
                                </CardTitle>
                                {command.premium && (
                                  <Crown className="w-4 h-4 text-yellow-500" />
                                )}
                              </div>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => copyToClipboard(command.usage)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white hover:bg-zinc-800"
                              >
                                <Copy className="w-4 h-4" />
                              </Button>
                            </div>
                            <CardDescription className="text-gray-300">
                              {command.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <p className="text-sm text-gray-400 mb-1">Usage:</p>
                              <code className="px-2 py-1 bg-zinc-800 rounded text-sm text-[#33a65b] font-mono">
                                {command.usage}
                              </code>
                            </div>

                            {command.example && (
                              <div>
                                <p className="text-sm text-gray-400 mb-1">Example:</p>
                                <code className="px-2 py-1 bg-zinc-800 rounded text-sm text-gray-300 font-mono">
                                  {command.example}
                                </code>
                              </div>
                            )}

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Badge 
                                  variant="outline" 
                                  className={`text-xs ${getPermissionColor(command.permissions)}`}
                                >
                                  {getPermissionIcon(command.permissions)}
                                  <span className="ml-1">{command.permissions}</span>
                                </Badge>
                                {command.premium && (
                                  <Badge variant="outline" className="text-xs bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                                    <Crown className="w-3 h-3 mr-1" />
                                    Premium
                                  </Badge>
                                )}
                              </div>

                              {command.aliases && command.aliases.length > 0 && (
                                <div className="text-xs text-gray-400">
                                  Aliases: {command.aliases.join(", ")}
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-zinc-800 mt-16">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-6">
            Add Shinaky to your Discord server and start using these powerful commands today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white">
              Add to Discord
            </Button>
            <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}