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
  const [downloadMsg, setDownloadMsg] = useState(false);

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
    setDownloadMsg(true);
    setTimeout(() => {
      setDownloadMsg(false);
    }, 3000);
  };

  const navigate = useNavigate();
  const creatureId = creature.name;

  return (
    <>
      <article className={`card flex-container ${className}`}>
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
              <div
                className='type-color-bg'
                style={{ backgroundColor: creature.beastType.color }}
              ></div>
            </div>
            <div
              className='beast-type-color flex-container'
              style={{ backgroundColor: creature.beastType.color }}
            ></div>
          </header>
          <div className='details flex-container'>
            <p>Descripción</p>
            <p>
              {creature.description.length > 65
                ? creature.description.slice(0, 65) + '...'
                : creature.description}
            </p>
            <div className='atk-def flex-container'>
              <div className='atk-name-value flex-container'>
                <p>Ataque</p>
                <p>
                  {creature.atkName.length > 15
                    ? creature.atkName.slice(0, 15) + '...'
                    : creature.atkName}
                </p>
              </div>
              <div className='def-name-value flex-container'>
                <p>Defensa</p>
                <p>
                  {' '}
                  {creature.defName.length > 15
                    ? creature.defName.slice(0, 15) + '...'
                    : creature.defName}
                </p>
              </div>
            </div>
          </div>
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
                className={`stats flex-container ${
                  creature.download ? 'is-download' : ''
                }`}
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
      {downloadMsg && (
        <>
          <div className='backdrop'>
            <div className='download-msg'>
              <p>Los datos de tu criatura han sido descargados</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
