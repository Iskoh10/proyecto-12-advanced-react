import './Favorites.css';
import Card from '../../components/Card/Card';
import { useCreaturesContext } from '../../Providers/CreaturesContext';

const Favorites = ({ creatures }) => {
  const { favorites } = useCreaturesContext();

  if (!creatures)
    return (
      <main className='favorites flex-container'>
        <p>Cargando criaturas favoritas...</p>
      </main>
    );

  const favsCreatures = creatures.filter(
    (creature) => favorites[creature.name]
  );

  return (
    <main className='favorites flex-container'>
      <h2>Criaturas Favoritas</h2>
      <section className='favs-gallery'>
        {favsCreatures.length === 0 && (
          <p className='no-favs-creatures'>
            No tienes Criaturas favoritas aún.
          </p>
        )}

        {favsCreatures.map((creature) => (
          <Card key={creature.name} creature={creature} />
        ))}
      </section>
    </main>
  );
};

export default Favorites;
