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
    
    if (pathname.startsWith("/admin") || pathname.startsWith("/dashboard")) {
      return;
    }

    const pageName = pathname === "/" ? "Home" : pathname.slice(1);
    trackEvent("pageview", "view", pageName);
  }, [pathname]);

  // Nuevo: Escuchador Global de Clics
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Buscamos el botón o enlace más cercano al clic
      const interactiveElement = target.closest('button, a');
      
      if (interactiveElement) {
        // Obtenemos un nombre descriptivo (texto, aria-label o título)
        const label = interactiveElement.getAttribute('aria-label') || 
                      interactiveElement.getAttribute('title') || 
                      interactiveElement.textContent?.trim().substring(0, 30) || 
                      "unnamed_interaction";

        // No trackeamos clics en áreas administrativas
        if (window.location.pathname.startsWith("/admin")) return;

        trackEvent("click", "interaction", label);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

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
