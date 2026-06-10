import skyF1Img from "../assets/images/SkyF1.jpg";
import skyMinionImg from "../assets/images/SkyMinion.jpg";
import skyHundredImg from "../assets/images/SkyHundred.jpg";
import skyPiggyBankImg from "../assets/images/SkyPiggyBank.jpg";

const games = [
  {
    title: "Motion Tracking Design your own F1 car",
    image: skyF1Img,
    url: "https://www.youtube.com/watch?v=r-OOmb30DwE"
  },
  {
    title: "Character-Based Photobooth Game",
    image: skyMinionImg,
    url: "https://www.gamoola.com/lab_projects/sky-instore-minion-photobooth/"
  },
  {
    title: "Timed Sports Challenge Experience",
    image: skyHundredImg,
    url: "https://www.gamoola.com/lab_projects/sky-instore-the-hundred/"
  },
  {
    title: "Interactive Endless Runner Rewards Game",
    image: skyPiggyBankImg,
    url: "https://www.gamoola.com/lab_projects/sky-instore-piggybank-racers/"
  }
];

export default function LiveEngagement() {
  return (
    <section className="live-engagement">
      <div className="live-header">
        <p>Live Engagement</p>
        <h2>Interactive games built for movement, participation and shared moments.</h2>
      </div>

      <div className="live-grid">
        {games.map((game, index) => (
          <a
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="live-card-link"
            key={index}
          >
            <article className="live-card">
              <img src={game.image} alt={game.title} />
              <span>{game.title}</span>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}