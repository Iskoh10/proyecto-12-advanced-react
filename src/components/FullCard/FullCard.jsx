import './FullCard.css';
import { useEffect, useState } from 'react';
import typeNames from '../../data/typeNames';
import iconNames from '../../data/iconNames';
import Modal from '../Modal/Modal';
import statsGenerator from '../../utils/statsGenerator';
import symbolAndTypeGenerator from '../../utils/symbolAndTypeGenerator';

const FullCard = ({
  isOpen,
  onClose,
  name,
  atkName,
  defName,
  description,
  mainAttribute,
  onCreatureGenerated
}) => {
  const [creature, setCreature] = useState({
    imgUrl: '',
    assignedAbility: '',
    beastType: '',
    name: '',
    atkName: '',
    defName: '',
    description: '',
    mainAttribute: '',
    stats: {
      vida: ''
    }
  });
  const [error, setError] = useState();

  useEffect(() => {
    if (!isOpen) return;

    const fetchApi = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=150'
        );
        const data = await response.json();
        const results = data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        const randomBeast = results[randomIndex];
        console.log(randomBeast.name);

        const responseBeast = await fetch(randomBeast.url);
        const dataBeast = await responseBeast.json();
        const imgUrl = dataBeast.sprites.other.dream_world.front_default;
        const hpValue = dataBeast.stats[0].base_stat;
        console.log(dataBeast);
        console.log(imgUrl);
        console.log(dataBeast.abilities);
        const randomIdx = Math.floor(
          Math.random() * dataBeast.abilities.length
        );
        const ability = dataBeast.abilities[randomIdx];
        const assignedAbility = ability.ability.name;

        const generatedSymbol = symbolAndTypeGenerator(iconNames);
        const generatedType = symbolAndTypeGenerator(typeNames);
        const generatedStats = statsGenerator(mainAttribute);

        const newCreature = {
          imgUrl,
          assignedAbility,
          beastType: generatedType,
          symbol: generatedSymbol,
          name,
          atkName,
          defName,
          description,
          mainAttribute,
          stats: {
            ...generatedStats,
            vida: hpValue
          },
          download: true
        };

        setCreature(newCreature);
        onCreatureGenerated?.(newCreature);
      } catch (error) {
        setError('Hubo un problema con tu Criatura, intentalo de nuevo');
      }
    };
    fetchApi();
  }, [isOpen, mainAttribute]);

  console.log('Datos de la Criatura creada:', creature);
  return (
    <>
      <Modal className='full-card-modal' isOpen={isOpen} onClose={onClose}>
        <section className='full-card flex-container'>
          <div
            className='card-container flex-container'
            style={{ backgroundColor: creature.beastType.color }}
          >
            <div className='card-front flex-container'>
              <header className='card-header flex-container'>
                {creature.beastType && (
                  <p className='type-beast'>{creature.beastType.name}</p>
                )}
                <h2>{name}</h2>
                <p className='health'>Hp {creature.hp}</p>
                <div className='symbol-container flex-container'>
                  <img
                    src={`/family-icons/${creature.symbol}`}
                    alt={
                      creature.symbol
                        ? creature.symbol.replace('.svg', '')
                        : 'criatura'
                    }
                  />
                </div>
              </header>
              <figure className='beast-img-container'>
                {creature.imgUrl && (
                  <img src={creature.imgUrl} alt={creature.name} />
                )}
                <figcaption className='front-details flex-container'>
                  <div className='stats flex-container'>
                    <h2>Stats</h2>
                    <p>
                      Fuerza <span>{creature.stats.fuerza}</span>
                    </p>
                    <p>
                      Defensa <span>{creature.stats.defensa}</span>
                    </p>
                    <p>
                      Velocidad <span>{creature.stats.velocidad}</span>
                    </p>
                    <p>
                      Inteligencia <span>{creature.stats.inteligencia}</span>
                    </p>
                    <p>
                      Agilidad <span>{creature.stats.agilidad}</span>
                    </p>
                  </div>
                  <div className='details'>
                    <p>
                      Habilidad asignada ➡️{' '}
                      <span>{creature.assignedAbility}</span>
                    </p>
                    <p>
                      Ataque ➡️ <span>{creature.atkName}</span>
                    </p>
                    <p>
                      Defensa ➡️ <span>{creature.defName}</span>
                    </p>
                    <p>
                      Descripción ➡️ <span>{creature.description}</span>
                    </p>
                    <p>
                      Principal Cualidad ➡️{' '}
                      <span>{creature.mainAttribute}</span>
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        {error && (
          <div className='fetch-error-container'>
            <p className='error-msg'>{error}</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default FullCard;
