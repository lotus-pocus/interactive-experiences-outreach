import heroVideo from "../assets/video/interactiveExperiences.mp4";
import logo from "../assets/images/gamoola_logo_white.png";

export default function Hero() {
  return (
    <section className="hero">
      <a
        href="https://www.gamoola.com"
        className="hero-logo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} alt="Gamoola" />
      </a>
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="hero-heading">
          <p className="hero-kicker">Real-time Interactive Experiences</p>

          <h1>Realtime Interactive Experiences</h1>
        </div>

        <div className="hero-copy">
          <p className="hero-description">
            WebGL, WebGPU, VR and multiplayer interaction designed for events, pharma and brand engagement.
          </p>

          <div className="hero-buttons">
            <a href="https://www.gamoola.com/our-work/" className="hero-button">
              View Work
            </a>

            <a href="#contact" className="hero-button secondary">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
