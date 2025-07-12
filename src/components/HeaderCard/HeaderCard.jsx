import './HeaderCard.css';

const HeaderCard = ({ beast }) => {
  return (
    <header className='card-header flex-container'>
      {beast.beastType && <p className='type-beast'>{beast.beastType.name}</p>}
      <h2>{beast.name}</h2>
      <div className='symbol-container flex-container'>
        <img
          src={`/family-icons/${beast.symbol}`}
          alt={beast.symbol ? beast.symbol.replace('.svg', '') : 'criatura'}
        />
        <div
          className='type-color-bg'
          style={{ backgroundColor: beast.beastType.color }}
        ></div>
      </div>
      <div
        className='beast-type-color flex-container'
        style={{ backgroundColor: beast.beastType.color }}
      ></div>
    </header>
  );
};

export default HeaderCard;
