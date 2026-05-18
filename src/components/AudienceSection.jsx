const audiences = [
  {
    title: "Events & Exhibitions",
    text: "Interactive experiences for stands, launches, showcases and live audience engagement."
  },
  {
    title: "Pharma & Healthcare",
    text: "Immersive tools that help explain complex science, treatment stories and congress messaging."
  },
  {
    title: "Brands & Agencies",
    text: "Realtime content, games and digital activations that make campaigns more memorable."
  }
];

export default function AudienceSection() {
  return (
    <section className="audience">
      <div className="audience-header">
        <p>Who we help</p>
        <h2>Built for teams who need people to stop, understand and engage.</h2>
      </div>

      <div className="audience-grid">
        {audiences.map((item, index) => (
          <div className="audience-card" key={index}>
            <span>0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}