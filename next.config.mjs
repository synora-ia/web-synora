/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    /* El CSS de la web es pequeño (~13 KB). Va dentro del HTML en vez de en
       ficheros aparte: en una 4G lenta cada fichero que bloquea el pintado
       cuesta ~0,5 s de espera, y eran dos. Medido con Lighthouse y la red
       frenada de verdad: ver README. */
    inlineCss: true,
  },
  /* La dirección principal es synora.es (sin www): es la de las canónicas,
     el sitemap, los datos estructurados y llms.txt. www.synora.es redirige
     aquí de forma permanente (308) para que Google y las IA no vean dos
     copias de la misma web. */
  async redirects() {
    return [
      {
        source: "/:ruta*",
        has: [{ type: "host", value: "www.synora.es" }],
        destination: "https://synora.es/:ruta*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
