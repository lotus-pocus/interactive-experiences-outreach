import gotoImg from "../assets/images/GoTo.png";
import samsungImg from "../assets/images/Samsung.jpg";
import havasVrImg from "../assets/images/HavasVR.jpg";

import gotoHover from "../assets/video/GoToHover.mp4";
import samsungHover from "../assets/video/SamsungHover.mp4";
import tavneosHover from "../assets/video/TavneosHover.mp4";

const projects = [
  {
    title: "Interactive Incentive Platform",
    type: "WEBGL / BROWSER EXPERIENCE",
    text: "A realtime browser-based platform designed to increase engagement through interactive experiences, rewards and gamified participation.",
    image: gotoImg,
    hoverVideo: gotoHover,
    mediaClass: ""
  },
  {
    title: "Enterprise Interactive Platform",
    type: "ENTERPRISE / WEBGL",
    text: "An interactive 3D sales platform helping teams explore products, workflows and business scenarios through realtime interaction.",
    image: samsungImg,
    hoverVideo: samsungHover,
    mediaClass: "samsung-media"
  },
  {
    title: "Immersive VR Experience",
    type: "VR / PHARMA / HEALTHCARE",
    text: "A cinematic immersive experience designed to help communicate complex treatment stories and healthcare messaging in engaging ways.",
    image: havasVrImg,
    hoverVideo: tavneosHover,
    mediaClass: ""
  }
];

export default function WorkSection() {
  const handleVideoEnter = (event) => {
    event.currentTarget.play();
  };

  const handleVideoLeave = (event) => {
    event.currentTarget.pause();
    event.currentTarget.currentTime = 0;
  };

  return (
    <section className="work">
      <div className="work-header">
        <h2>
          Real projects built for interaction, storytelling and attention.
        </h2>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <article className="work-card" key={index}>
            <div className="work-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className={project.mediaClass}
              />

              <video
                src={project.hoverVideo}
                className={project.mediaClass}
                muted
                loop
                playsInline
                preload="none"
                aria-hidden="true"
                onMouseEnter={handleVideoEnter}
                onMouseLeave={handleVideoLeave}
              />
            </div>

            <div className="work-card-content">
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <span>{project.text}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}