const benefits = [
  {
    title: "No app download",
    text: "Launch from a link or QR code, reducing friction for event audiences, sales teams and campaign users."
  },
  {
    title: "Realtime interaction",
    text: "Create responsive 3D experiences, product demos, games and interactive storytelling directly in the browser."
  },
  {
    title: "Built for multiple devices",
    text: "Designed for desktop, mobile, touchscreens and shared-screen activations depending on the experience."
  },
  {
    title: "Easy to share",
    text: "Browser-based experiences are simple to send, demo, present and reuse across events, campaigns and sales conversations."
  }
];

export default function BrowserBenefits() {
  return (
    <section className="browser-benefits">
      <div className="browser-benefits-inner">
        <div className="browser-benefits-copy">
          <p>Why browser-based?</p>

          <h2>
            Interactive experiences without the download barrier.
          </h2>

          <span>
            Technologies like WebGL and WebGPU make it possible to deliver rich realtime 3D and interactive content through the browser, helping audiences access experiences faster and engage more easily.
          </span>
        </div>

        <div className="browser-benefits-grid">
          {benefits.map((item, index) => (
            <div className="browser-benefit-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}