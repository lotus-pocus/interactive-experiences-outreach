const items = [
  {
    title: "WebGL & WebGPU",
    text: "Browser-based realtime experiences with no app download required."
  },
  {
    title: "Interactive Event Experiences",
    text: "Multiplayer games, touchscreen interactives and live installations."
  },
  {
    title: "VR & Immersive",
    text: "Immersive storytelling and realtime 3D experiences for events and congresses."
  },
  {
    title: "Motion Graphics & 3D",
    text: "Launch visuals, cinematic trailers and realtime product storytelling."
  }
];

export default function Capabilities() {
  return (
    <section className="capabilities">
      <div className="capabilities-header">
        <p>Capabilities</p>

        <h2>
          Designed for engagement,
          interaction and real-world audiences.
        </h2>
      </div>

      <div className="capabilities-grid">
        {items.map((item, index) => (
          <div className="capability-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}