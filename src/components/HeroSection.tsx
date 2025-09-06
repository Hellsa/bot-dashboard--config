"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const handleAddBot = () => {
    // Discord bot invitation link - replace with your actual bot client ID
    const botInviteUrl = "https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&permissions=8&scope=bot%20applications.commands";
    window.open(botInviteUrl, '_blank');
  };

  const handleViewDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <section className="relative bg-[#0d0d0d] overflow-hidden">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #33a65b 1px, transparent 1px),
            linear-gradient(to bottom, #33a65b 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              {/* Main heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#33a65b] leading-tight">
                Shinaky
              </h1>
              
              {/* Tagline */}
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Tratando de volver tu servidor un ambiente más emocionante!
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleAddBot}
                variant="outline" 
                size="lg"
                className="border-[#33a65b] text-[#33a65b] hover:bg-[#33a65b] hover:text-white bg-transparent text-base font-medium px-6 py-3 h-auto transition-all duration-200"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  className="mr-2"
                  fill="currentColor"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189z"/>
                </svg>
                Añadir la Bot
              </Button>
              
              <Button 
                onClick={handleViewDashboard}
                size="lg"
                className="bg-[#33a65b] hover:bg-[#2a8d4f] text-white text-base font-medium px-6 py-3 h-auto transition-all duration-200"
              >
                Ver Dashboard
              </Button>
            </div>
          </div>
          
          {/* Right side - Avatar */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#33a65b] to-[#2a8d4f] p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-[#0d0d0d]"></div>
              </div>
              
              {/* Avatar image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#33a65b] shadow-2xl shadow-[#33a65b]/20">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=face"
                  alt="Shinaky Bot Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Additional glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#33a65b]/10 blur-xl scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}