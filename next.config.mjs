/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    /* El CSS de la web es pequeño (~13 KB). Va dentro del HTML en vez de en
       ficheros aparte: en una 4G lenta cada fichero que bloquea el pintado
       cuesta ~0,5 s de espera, y eran dos. Medido con Lighthouse y la red
       frenada de verdad: ver README. */
    inlineCss: true,
  },
};
export default nextConfig;
