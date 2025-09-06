"use client";

import { Shield, Server, MessagesSquare, Settings2, SquarePlus, MonitorPlay, ShieldCheck, CheckCheck, Bot, Zap } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container">
        {/* Trust Banner */}
        <div className="text-center mb-16">
          <p className="text-xl lg:text-2xl text-white">
            Con la confianza de más de{" "}
            <span className="text-primary font-semibold">4 millones</span>{" "}
            de servidores
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-[var(--shinaky-card-bg)] border border-[var(--shinaky-card-border)] rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <MessagesSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Comunidad Creciente
            </h3>
            <p className="text-muted-foreground text-sm">
              Únete a una comunidad activa que crece cada día
            </p>
          </div>

          <div className="bg-[var(--shinaky-card-bg)] border border-[var(--shinaky-card-border)] rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Compañera Adorable
            </h3>
            <p className="text-muted-foreground text-sm">
              Una bot amigable y cariñosa para tu servidor
            </p>
          </div>

          <div className="bg-[var(--shinaky-card-bg)] border border-[var(--shinaky-card-border)] rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <MonitorPlay className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Experiencia Premium
            </h3>
            <p className="text-muted-foreground text-sm">
              Disfruta de funciones exclusivas y prioritarias
            </p>
          </div>

          <div className="bg-[var(--shinaky-card-bg)] border border-[var(--shinaky-card-border)] rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Settings2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Funciones Innovadoras
            </h3>
            <p className="text-muted-foreground text-sm">
              Herramientas avanzadas para gestionar tu comunidad
            </p>
          </div>
        </div>

        {/* Detailed Feature Explanations */}
        <div className="space-y-20">
          {/* AI Moderation Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                IA Avanzada
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Moderación Inteligente
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Protege tu servidor con moderación automática impulsada por IA. 
                Detecta spam, toxicidad y contenido inapropiado al instante, 
                manteniendo tu comunidad segura 24/7 sin intervención manual.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white">Detección automática de spam y raids</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white">Filtros de contenido personalizables</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white">Acciones automáticas configurables</span>
                </div>
              </div>
            </div>
            <div className="bg-[var(--shinaky-card-bg)] border border-[var(--shinaky-card-border)] rounded-lg p-6">
              {/* Discord Message Mockup */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Shinaky Bot</div>
                    <div className="text-xs text-muted-foreground">BOT • Hoy a las 14:15</div>
                  </div>
                </div>
                <div className="bg-red-500/10 border-l-4 border-red-500 rounded p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-red-400" />
                    <span className="text-white font-medium">Acción de Moderación</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    <strong className="text-white">@Usuario</strong> ha sido silenciado automáticamente por spam.
                  </p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>⚡ Detección: Mensajes repetitivos (5 en 10s)</div>
                    <div>🔇 Duración: 10 minutos</div>
                    <div>📊 Confianza: 95%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Roleplay Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[var(--shinaky-purple)]/10 text-[var(--shinaky-purple)] px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Server className="w-4 h-4" />
                Entretenimiento
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Roleplay
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sumérgete en aventuras interactivas con comandos de roleplay únicos. 
                Desde acciones simples hasta sistemas complejos de personajes, 
                Shinaky hace que el roleplay sea más divertido y dinámico.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCheck className="w-5 h-5 text-[var(--shinaky-purple)] flex-shrink-0" />
                  <span className="text-white">Comandos de acción interactivos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCheck className="w-5 h-5 text-[var(--shinaky-purple)] flex-shrink-0" />
                  <span className="text-white">Sistema de estadísticas de personaje</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCheck className="w-5 h-5 text-[var(--shinaky-purple)] flex-shrink-0" />
                  <span className="text-white">Respuestas dinámicas y divertidas</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="bg-[var(--shinaky-card-bg)] border border-[var(--shinaky-card-border)] rounded-lg p-6">
                {/* Discord Message Mockup for Roleplay */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[var(--shinaky-purple)] rounded-full flex items-center justify-center">
                      <Server className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Shinaky Bot</div>
                      <div className="text-xs text-muted-foreground">BOT • Hoy a las 15:20</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-muted-foreground text-sm">
                      <span className="text-white">@Usuario</span> usa <span className="bg-primary/20 text-primary px-1 rounded">/abrazo</span> con <span className="text-white">@Amigo</span>
                    </div>
                    <div className="bg-[var(--shinaky-dark-bg)] border-l-4 border-[var(--shinaky-purple)] rounded p-4">
                      <p className="text-white">
                        💜 <strong>Usuario</strong> le da un cálido abrazo a <strong>Amigo</strong>
                      </p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        ¡Qué momento tan dulce! (+5 puntos de amistad)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features List */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Y muchas más funciones...
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: ShieldCheck, label: "Moderación" },
              { icon: Server, label: "Utilidades" },
              { icon: MessagesSquare, label: "Diversión" },
              { icon: Settings2, label: "Configuración" },
              { icon: MonitorPlay, label: "Entretenimiento" },
              { icon: Shield, label: "Seguridad" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-[var(--shinaky-card-bg)] border border-[var(--shinaky-card-border)] rounded-lg hover:border-primary/50 transition-colors"
              >
                <feature.icon className="w-6 h-6 text-primary" />
                <span className="text-sm text-white">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}