import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#333333] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Shinaky Bot Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Shinaky Bot</h3>
            <p className="text-[#808080] leading-relaxed">
              Un bot de Discord multifuncional diseñado para mejorar tu servidor con comandos útiles, 
              moderación automática y entretenimiento para tu comunidad.
            </p>
          </div>

          {/* Páginas del Sitio Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Páginas del Sitio</h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-[#33a65b] hover:text-[#33a65b]/80 transition-colors text-sm"
              >
                Inicio
              </Link>
              <Link 
                href="/dashboard" 
                className="text-[#33a65b] hover:text-[#33a65b]/80 transition-colors text-sm"
              >
                Panel de control
              </Link>
              <Link 
                href="/comandos" 
                className="text-[#33a65b] hover:text-[#33a65b]/80 transition-colors text-sm"
              >
                Comandos
              </Link>
              <div className="flex items-center gap-2">
                <Link 
                  href="/premium" 
                  className="text-[#33a65b] hover:text-[#33a65b]/80 transition-colors text-sm"
                >
                  Premium
                </Link>
                <span className="bg-[#ff5e3b] text-white text-xs px-2 py-0.5 rounded-full font-medium">
                  NUEVO
                </span>
              </div>
            </nav>
          </div>

          {/* Redes Sociales Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Redes Sociales</h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="https://discord.gg/shinaky" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#33a65b] hover:text-[#33a65b]/80 transition-colors text-sm"
              >
                Discord
              </Link>
              <Link 
                href="https://twitter.com/shinaky" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#33a65b] hover:text-[#33a65b]/80 transition-colors text-sm"
              >
                Twitter
              </Link>
              <Link 
                href="https://top.gg/bot/shinaky" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#33a65b] hover:text-[#33a65b]/80 transition-colors text-sm"
              >
                Top.gg
              </Link>
            </nav>
          </div>

          {/* Legales Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Legales</h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/terms" 
                className="text-[#33a65b] hover:text-[#33a65b]/80 transition-colors text-sm"
              >
                Términos y condiciones
              </Link>
              <Link 
                href="/privacy" 
                className="text-[#33a65b] hover:text-[#33a65b]/80 transition-colors text-sm"
              >
                Política de privacidad
              </Link>
              <Link 
                href="/refund" 
                className="text-[#33a65b] hover:text-[#33a65b]/80 transition-colors text-sm"
              >
                Política de reembolso
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Branding Line */}
        <div className="mt-12 pt-8 border-t border-[#333333]">
          <p className="text-[#808080] text-sm text-center">
            Parte de{" "}
            <Link 
              href="https://shinaky.dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#33a65b] hover:text-[#33a65b]/80 transition-colors"
            >
              shinaky.dev Network
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}