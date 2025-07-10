import './FillGallery.css';
import Card from '../Card/Card';

const FillGallery = ({ creatures }) => {
  console.log(creatures);

  return (
    <section className='gallery-grid'>
      {creatures &&
        creatures.map((creature) => (
          <Card key={creature.name} creature={creature} />
        ))}
    </section>
  );
};

export default FillGallery;
