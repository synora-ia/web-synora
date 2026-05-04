import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tight">
          Synora<span className="text-slate-400">.</span>
        </Link>
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <Link href="/#inicio" className="hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1">
            Inicio
          </Link>
          <Link href="/#que-hacemos" className="hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1">
            ¿Qué hacemos?
          </Link>
          <Link href="/#sectores" className="hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1">
            Sectores
          </Link>
          <Link href="/#precios" className="hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1">
            Precios
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/contacto" className="hidden md:flex items-center px-6 py-2.5 bg-black text-white rounded-full text-sm font-medium btn-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
            Contactar
            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
