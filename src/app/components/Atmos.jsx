/* Luz ambiental: tres orbes derivando, viñeta y grano.
   Sin estado y sin interacción, así que se queda en el servidor. */
export default function Atmos() {
  return (
    <>
      <div className="atmos" aria-hidden="true">
        <div className="orb a" />
        <div className="orb b" />
        <div className="orb c" />
      </div>
      <div className="vignette" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
