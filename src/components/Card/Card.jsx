import './Card.css';
import { useState } from 'react';
import { useCreaturesContext } from '../../Providers/CreaturesContext';
import downloadCreature from '../../utils/downloadCreature';
import Button from '../Button/Button';
import Favs from '../Favs/Favs';
import Modal from '../Modal/Modal';
import RatingBox from '../RatingBox/RatingBox';
import { useNavigate } from 'react-router-dom';

const Card = ({ creature, className = '' }) => {
  const { ratings, setRating, favorites, toggleFav } = useCreaturesContext();
  const [showModal, setShowModal] = useState(false);

  const handleClickBattle = (e) => {
    e.stopPropagation();
    if (creature.download) {
      setShowModal(true);
      console.log(e.target);
    }
  };

  const handleClickDownload = (e) => {
    e.stopPropagation();
    downloadCreature(creature);
  };

  const navigate = useNavigate();
  const creatureId = creature.name;

  return (
    <>
      <article
        className={`card flex-container ${className}`}
        style={{ backgroundColor: creature.beastType.color }}
      >
        <div className='card-container flex-container'>
          <header className='card-header flex-container'>
            {creature.beastType && (
              <p className='type-beast'>{creature.beastType.name}</p>
            )}
            <h2>{creature.name}</h2>
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
            <figcaption
              className='front-details flex-container'
              onClick={handleClickBattle}
              style={{ cursor: creature.download ? 'pointer' : 'default' }}
            >
              <Favs
                isFav={favorites}
                creatureName={creature.name}
                toggleFav={toggleFav}
              />

              <RatingBox
                id={creature.name}
                rating={ratings[creature.name] || 0}
                onChange={(value) => setRating(creature.name, value)}
              />

              <div
                className='stats flex-container'
                style={{ backgroundColor: creature.download ? 'red' : '' }}
              >
                <h2>Stats</h2>
                <p>
                  Vida <span>{creature.stats.vida}</span>
                </p>
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
                  Habilidad asignada ➡️ <span>{creature.assignedAbility}</span>
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
                  Principal Cualidad ➡️ <span>{creature.mainAttribute}</span>
                </p>
              </div>
              {creature.download && (
                <Button
                  className='download-btn'
                  text='Descargar'
                  onClick={handleClickDownload}
                />
              )}
            </figcaption>
          </figure>
        </div>
      </article>
      {creature.download && showModal && (
        <Modal
          className='battle-modal flex-container'
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          noBtn
        >
          <p>{`¿Quieres pelear usando a ${creature.name}?`}</p>
          <div className='btns-battle-modal flex-container '>
            <Button
              className='ok-battle-btn'
              text='Vamos'
              onClick={() => {
                console.log('Luchar');
                navigate(`/battle/${creatureId}`);
              }}
            />
            <Button
              className='no-battle-btn'
              text='No'
              onClick={() => setShowModal(false)}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Card;
