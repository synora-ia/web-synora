/* Avisa a Bing (y al resto de buscadores con IndexNow: Yandex, Seznam, Naver…)
   de que las páginas del sitemap han cambiado, para que las vuelvan a leer ya.
   Uso, DESPUÉS de publicar:   node scripts/indexnow.mjs
   o solo algunas:             node scripts/indexnow.mjs crm precios   ("" = portada)
   (sin barra delante: Git Bash convierte «/crm» en una ruta de Windows) 
   La clave es el archivo public/618df3d6edf6ab62aed851581dd285f4.txt: no lo borres. */
const SITIO = "https://synora.es";
const CLAVE = "618df3d6edf6ab62aed851581dd285f4";

let urls = process.argv.slice(2).map((r) => `${SITIO}/${r.replace(/^.*?\/?([^/]*)$/, "$1")}`.replace(/\/$/, ""));
if (!urls.length) {
  const xml = await fetch(`${SITIO}/sitemap.xml`).then((r) => r.text());
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const r = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITIO).host,
    key: CLAVE,
    keyLocation: `${SITIO}/${CLAVE}.txt`,
    urlList: urls,
  }),
});
console.log(r.status, r.statusText, "·", urls.length, "páginas");
for (const u of urls) console.log(" ", u);
/* 200 o 202 = recibido. 403 = la clave no está publicada en la web.
   422 = alguna URL no es de synora.es. 429 = demasiados avisos seguidos. */
