import './StatsCard.css';

const StatsCard = ({ beast, className = '' }) => {
  return (
    <div
      className={`stats flex-container ${
        beast.download ? 'is-download' : ''
      } ${className}`}
    >
      <h2>Stats</h2>
      <p>
        Vida <span>{beast.stats.vida}</span>
      </p>
      <p>
        Fuerza <span>{beast.stats.fuerza}</span>
      </p>
      <p>
        Defensa <span>{beast.stats.defensa}</span>
      </p>
      <p>
        Velocidad <span>{beast.stats.velocidad}</span>
      </p>
      <p>
        Inteligencia <span>{beast.stats.inteligencia}</span>
      </p>
      <p>
        Agilidad <span>{beast.stats.agilidad}</span>
      </p>
    </div>
  );
};

export default StatsCard;
