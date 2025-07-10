import './Battle.css';
import { useParams } from 'react-router-dom';
import { useCreaturesContext } from '../../Providers/CreaturesContext';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import useBattle from '../../hooks/useBattle/useBattle';
import UseReducer from '../../components/UseReducer/UseReducer';
import { useMemo } from 'react';

const Battle = () => {
  const { creatureId } = useParams();
  const { creatures, updateCreature } = useCreaturesContext();

  const { creature, enemy, isBattling, battleResult, startBattle } = useBattle({
    creatures,
    creatureId
  });

  const rewardPoints =
    battleResult === 'Ganado' ? 5 : battleResult === 'Perdido' ? 1 : 0;

  const initialState = useMemo(() => {
    if (!creature) return null;
    return {
      ...creature.stats,
      points: rewardPoints,
      maxPoints: rewardPoints
    };
  }, [creature, rewardPoints]);

  console.log('InitialState:', initialState);

  const handleUpgrades = (updatedStats) => {
    const improvingCreature = {
      ...creature,
      stats: {
        velocidad: updatedStats.velocidad,
        fuerza: updatedStats.fuerza,
        defensa: updatedStats.defensa,
        inteligencia: updatedStats.inteligencia,
        agilidad: updatedStats.agilidad,
        vida: updatedStats.vida
      }
    };
    updateCreature(improvingCreature);
    console.log('Mejorando criatura con:', improvingCreature);
    alert('Cambios actualizados');
  };

  return (
    <main className='battle flex-container'>
      {!creature ? (
        <p>Criatura no encontrada</p>
      ) : battleResult === '' ? (
        <>
          <h1>
            {creature.name} <span>Vs</span> {enemy?.name}
          </h1>
          <section
            className={`combat-area flex-container ${
              isBattling ? 'battling' : ''
            }`}
          >
            {isBattling ? (
              <div className='battling-time flex-container'>
                {console.log(creature.imgUrl)}
                <div className='img-container-creature'>
                  <img src={creature.imgUrl} alt={creature.name} />
                </div>
                <div className='img-container-enemy'>
                  <img src={enemy.imgUrl} alt={enemy.name} />
                </div>
              </div>
            ) : (
              <div className='no-battling flex-container'>
                <img
                  src='/favicon.png'
                  alt='favicon image'
                  className='bg-tatami'
                />
                <Card creature={creature} className='my-creature-card' />
                <p>Vs</p>
                {enemy && <Card creature={enemy} className='enemy-card' />}
              </div>
            )}
          </section>
          <Button className='battle-go' text='Luchar' onClick={startBattle} />
        </>
      ) : (
        <>
          <h1>Has {battleResult}</h1>
          <section className='combat-area flex-container battle-end'>
            <Card creature={creature} />
            {initialState && (
              <UseReducer
                initialState={initialState}
                onConfirm={handleUpgrades}
              />
            )}
          </section>
        </>
      )}
    </main>
  );
};

export default Battle;

//! Quitar el hover mientras battling, agregar boton aceptar cambios de puntos y actualizar los datos en la carta de la criatura, cambiar estructura del objeto criatura para que sea mas limpia y no haya duplicados, meter en stats vida y todos para evitar duplicados en la raiz del objeto
