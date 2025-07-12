import './DetailsCard.css';

const DetailsCard = ({ beast }) => {
  return (
    <div className='details flex-container'>
      <p>Descripción</p>
      <p>
        {beast.description.length > 65
          ? beast.description.slice(0, 65) + '...'
          : beast.description}
      </p>
      <div className='atk-def flex-container'>
        <div className='atk-name-value flex-container'>
          <p>Ataque</p>
          <p>
            {beast.atkName.length > 15
              ? beast.atkName.slice(0, 15) + '...'
              : beast.atkName}
          </p>
        </div>
        <div className='def-name-value flex-container'>
          <p>Defensa</p>
          <p>
            {beast.defName.length > 15
              ? beast.defName.slice(0, 15) + '...'
              : beast.defName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
