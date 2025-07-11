import './NewCard.css';
import { useEffect, useState } from 'react';
import typeNames from '../../data/typeNames';
import iconNames from '../../data/iconNames';
import Modal from '../Modal/Modal';
import statsGenerator from '../../utils/statsGenerator';
import symbolAndTypeGenerator from '../../utils/symbolAndTypeGenerator';
import fetchApi from '../../utils/fetchApi';
import Card from '../Card/Card';

const NewCard = ({
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

    fetchApi({
      setCreature,
      onCreatureGenerated,
      setError,
      symbolAndTypeGenerator,
      statsGenerator,
      iconNames,
      typeNames,
      mainAttribute,
      name,
      atkName,
      defName,
      description
    });
  }, [isOpen, mainAttribute]);

  console.log('Datos de la Criatura creada:', creature);
  return (
    <>
      <Modal className='new-card-modal' isOpen={isOpen} onClose={onClose}>
        <Card creature={creature} className='new-card' />
        {error && (
          <div className='fetch-error-container'>
            <p className='error-msg'>{error}</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default NewCard;
