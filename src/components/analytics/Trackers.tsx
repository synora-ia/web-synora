"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analyticsStore";

/**
 * Componente invisible para medir visitas a una página.
 * Úsalo pasándole un nombre, ej: <PageViewTracker name="Home" />
 */
export function PageViewTracker({ name }: { name: string }) {
  useEffect(() => {
    trackEvent("pageview", "view", name);
  }, [name]);
  
  return null;
}

/**
 * Componente global que se pone en el layout principal.
 * Escucha los cambios de ruta y trackea automáticamente todas las páginas públicas
 * (excluyendo /admin y /dashboard).
 */
export function GlobalPageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    
    // Excluir áreas privadas/administrativas
    if (pathname.startsWith("/admin") || pathname.startsWith("/dashboard")) {
      return;
    }

    // Formatear el nombre para que se vea limpio en el panel
    // '/' -> 'Home'
    // '/contacto' -> 'contacto'
    // '/blog/mi-post' -> 'blog/mi-post'
    const pageName = pathname === "/" ? "Home" : pathname.slice(1);
    
    trackEvent("pageview", "view", pageName);
  }, [pathname]);

  return null;
}

/**
 * Componente envoltorio para botones o elementos clickeables.
 * Mide automáticamente cuando alguien hace clic.
 */
export function TrackedClick({ 
  name, 
  children 
}: { 
  name: string; 
  children: React.ReactNode 
}) {
  return (
    <div 
      className="inline-block"
      onClick={() => trackEvent("click", "button", name)}
      onAuxClick={() => trackEvent("click", "button", name)}
    >
      {children}
    </div>
  );
}
