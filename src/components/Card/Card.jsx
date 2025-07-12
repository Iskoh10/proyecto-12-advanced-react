import './Card.css';
import { useState } from 'react';
import { useCreaturesContext } from '../../Providers/CreaturesContext';
import downloadCreature from '../../utils/downloadCreature';
import Button from '../Button/Button';
import Favs from '../Favs/Favs';
import Modal from '../Modal/Modal';
import RatingBox from '../RatingBox/RatingBox';
import { useNavigate } from 'react-router-dom';
import StatsCard from '../StatsCard/StatsCard';
import HeaderCard from '../HeaderCard/HeaderCard';
import DetailsCard from '../DetailsCard/DetailsCard';

const Card = ({ creature, className = '' }) => {
  const { ratings, setRating, favorites, toggleFav } = useCreaturesContext();
  const [showModal, setShowModal] = useState(false);
  const [downloadMsg, setDownloadMsg] = useState(false);

  const handleClickBattle = (e) => {
    e.stopPropagation();
    if (creature.download) {
      setShowModal(true);
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
          <HeaderCard beast={creature} />
          <DetailsCard beast={creature} />
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

              <StatsCard beast={creature} />
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
