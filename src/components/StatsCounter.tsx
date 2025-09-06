"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Users } from "lucide-react";

interface StatCounterProps {
  targetCount?: number;
  className?: string;
}

export default function StatsCounter({ 
  targetCount = 15847, 
  className = "" 
}: StatCounterProps) {
  const [currentCount, setCurrentCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds animation
    const steps = 60; // 60 FPS animation
    const increment = targetCount / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newCount = Math.round(targetCount * easeOut);
      
      setCurrentCount(newCount);

      if (currentStep >= steps) {
        clearInterval(interval);
        setCurrentCount(targetCount); // Ensure exact final value
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, targetCount]);

  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto max-w-4xl text-center">
        {/* Stats Display */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-96 h-96 rounded-full border-2 border-[var(--color-accent)]" />
          </div>
          
          {/* Main content */}
          <div className="relative z-10">
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
                <TrendingUp className="w-8 h-8 text-[var(--color-accent)]" />
              </div>
            </div>

            {/* Counter */}
            <div className="mb-4">
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight">
                <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent)]/80 bg-clip-text text-transparent">
                  {currentCount.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-[var(--color-accent)] font-medium text-lg">
                <Users className="w-5 h-5" />
                <span>Usuarios Activos</span>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto">
              <p className="text-[var(--color-muted-foreground)] text-lg mb-6 leading-relaxed">
                Shinaky está creciendo rápidamente con usuarios de todo el mundo disfrutando de sus funciones avanzadas y experiencia superior.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 rounded-lg bg-[var(--color-shinaky-card-bg)] border border-[var(--color-shinaky-card-border)]">
                  <div className="text-2xl font-bold text-[var(--color-accent)] mb-1">
                    {Math.floor(currentCount / 100)}+
                  </div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    Servidores Activos
                  </div>
                </div>
                
                <div className="p-6 rounded-lg bg-[var(--color-shinaky-card-bg)] border border-[var(--color-shinaky-card-border)]">
                  <div className="text-2xl font-bold text-[var(--color-accent)] mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    Tiempo de Actividad
                  </div>
                </div>
                
                <div className="p-6 rounded-lg bg-[var(--color-shinaky-card-bg)] border border-[var(--color-shinaky-card-border)]">
                  <div className="text-2xl font-bold text-[var(--color-accent)] mb-1">
                    {Math.floor(currentCount / 1000)}M+
                  </div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    Comandos Ejecutados
                  </div>
                </div>
              </div>
            </div>

            {/* Growth indicator */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
              <TrendingUp className="w-4 h-4 text-[var(--color-accent)]" />
              <span className="text-sm font-medium text-[var(--color-accent)]">
                Crecimiento activo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}