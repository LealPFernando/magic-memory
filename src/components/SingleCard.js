import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="card front" />
        <img
          src="/img/cover.png"
          className="back"
          onClick={() => (!disabled ? handleChoice(card) : null)}
          alt="card back"
        />
      </div>
    </div>
  );
}
