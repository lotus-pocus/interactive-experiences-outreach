import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 35000, suffix: "+", label: "Audience interactions" },
  { value: 11, suffix: "", label: "Live activations tracked" },
  { value: 10000, suffix: "+", label: "Plays in a single activation series" },
  {
    value: null,
    suffix: "",
    label: "Audience analytics",
    text: "Built-in",
    compact: true,
  },
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
      { threshold: 0.4 },
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
        <p>Measured engagement</p>

        <h2>
          Interactive experiences that don’t just attract attention, they
          generate useful engagement data.
        </h2>

        <span>
          From participation rates and interaction volumes to audience behaviour
          and repeat engagement, analytics help teams understand what resonates
          most and where engagement is highest. The metrics shown here are drawn
          from a selection of live retail and event activations, including Sky
          engagement experiences and other interactive campaigns.
        </span>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3 className={stat.compact ? "compact-stat" : ""}>
              {stat.value !== null ? (
                <CountUp end={stat.value} suffix={stat.suffix} />
              ) : (
                stat.text
              )}
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
