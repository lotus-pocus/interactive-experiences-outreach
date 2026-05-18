import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 13500, suffix: "+", label: "Delegates reached" },
  { value: 190, suffix: "+", label: "HCP interactions" },
  { value: 11000, suffix: "+", label: "Interactive plays" },
  { value: 130, suffix: "", label: "Countries represented" }
];

function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime;
    const duration = 2800;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * end);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [started, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-copy">
        <p>Delivered at scale</p>

        <h2>
          Interactive experiences designed for real audiences, live events and measurable engagement.
        </h2>

        <span>
          From immersive pharma congress experiences to multiplayer interactive activations, our work has been deployed internationally across exhibitions, retail environments and audience engagement campaigns.
        </span>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3>
              <CountUp end={stat.value} suffix={stat.suffix} />
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}