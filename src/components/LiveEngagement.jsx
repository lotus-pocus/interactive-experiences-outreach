import skyF1Img from "../assets/images/SkyF1.jpg";
import skyMinionImg from "../assets/images/SkyMinion.jpg";
import skyHundredImg from "../assets/images/SkyHundred.jpg";
import skyPiggyBankImg from "../assets/images/SkyPiggyBank.jpg";

const games = [
  { title: "Motion Tracking Design your own F1 car", image: skyF1Img },
  { title: "Character-Based Photobooth Game", image: skyMinionImg },
  { title: "Timed Sports Challenge Experience", image: skyHundredImg },
  { title: "Interactive Endless Runner Rewards Game", image: skyPiggyBankImg }
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
          <article className="live-card" key={index}>
            <img src={game.image} alt={game.title} />
            <span>{game.title}</span>
          </article>
        ))}
      </div>
    </section>
  );
}