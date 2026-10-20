const BASE = "https://synora.es";

const RUTAS = [
  { ruta: "", prioridad: 1 },
  { ruta: "/crm", prioridad: 0.9 },
  { ruta: "/desarrollo", prioridad: 0.8 },
  { ruta: "/automatizaciones", prioridad: 0.8 },
  { ruta: "/precios", prioridad: 0.8 },
  { ruta: "/contacto", prioridad: 0.7 },
  { ruta: "/aviso-legal", prioridad: 0.2 },
  { ruta: "/privacidad", prioridad: 0.2 },
  { ruta: "/cookies", prioridad: 0.2 },
];

export default function sitemap() {
  return RUTAS.map(({ ruta, prioridad }) => ({
    url: `${BASE}${ruta}`,
    lastModified: new Date(),
    priority: prioridad,
  }));
}
