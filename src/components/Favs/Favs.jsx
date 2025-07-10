import './Favs.css';

const Favs = ({ isFav, creatureName, toggleFav }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    toggleFav(creatureName);
  };
  return (
    <section
      className={`favHeart ${isFav[creatureName] ? 'fav' : ''}`}
      onClick={handleClick}
    ></section>
  );
};

export default Favs;
