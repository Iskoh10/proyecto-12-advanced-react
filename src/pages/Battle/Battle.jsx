import './Battle.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreaturesContext } from '../../Providers/CreaturesContext';
import Button from '../../components/Button/Button';
import useBattle from '../../hooks/useBattle/useBattle';
import UseReducer from '../../components/UseReducer/UseReducer';
import { useMemo, useState } from 'react';
import StatsCard from '../../components/StatsCard/StatsCard';

const Battle = () => {
  const { creatureId } = useParams();
  const { creatures, updateCreature } = useCreaturesContext();
  const [showCompletedMsg, setShowCompletedMsg] = useState(false);

  const { creature, enemy, isBattling, battleResult, startBattle } = useBattle({
    creatures,
    creatureId
  });

  const navigate = useNavigate();

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
    setShowCompletedMsg(true);

    setTimeout(() => {
      navigate('/gallery');
    }, 2000);
  };

  return (
    <main className='battle flex-container'>
      {!creature ? (
        <p>Criatura no encontrada</p>
      ) : battleResult === '' ? (
        <>
          <h2>
            {creature.name} <span>~ Vs ~</span> {enemy?.name}
          </h2>
          <section
            className={`combat-area flex-container ${
              isBattling ? 'battling' : ''
            }`}
          >
            {isBattling ? (
              <div className='battling-time flex-container'>
                <div className='img-container-creature'>
                  <img src={creature.imgUrl} alt={creature.name} />
                </div>
                <div className='img-container-enemy'>
                  <img src={enemy.imgUrl} alt={enemy.name} />
                </div>
              </div>
            ) : (
              <div className='no-battling flex-container'>
                <img src='/react.svg' alt='react icon' className='bg-tatami' />
                <div className='my-creature flex-container'>
                  <h3>{creature.name}</h3>
                  <div className='img-container'>
                    <img src={creature.imgUrl} alt='creature-image' />
                  </div>
                  <StatsCard beast={creature} className='stats-in-fight' />
                </div>
                <div className='vs flex-container'>
                  <p>Vs</p>
                </div>
                {enemy && (
                  <div className='enemy flex-container'>
                    <h3>{enemy.name}</h3>
                    <div className='img-container'>
                      <img src={enemy.imgUrl} alt='enemy-image' />
                    </div>
                    <StatsCard beast={enemy} className='stats-in-fight' />
                  </div>
                )}
              </div>
            )}
          </section>
          {!isBattling && (
            <Button className='battle-go' text='Luchar' onClick={startBattle} />
          )}
        </>
      ) : (
        <>
          <h1>Has {battleResult}</h1>
          <section className='combat-area flex-container battle-end'>
            <div className='my-creature flex-container'>
              <h3>{creature.name}</h3>
              <div className='img-container'>
                <img src={creature.imgUrl} alt='creature-image' />
              </div>
              <StatsCard beast={creature} className='stats-in-fight' />
            </div>
            {initialState && (
              <UseReducer
                initialState={initialState}
                onConfirm={handleUpgrades}
              />
            )}
          </section>
          {showCompletedMsg && (
            <>
              <div className='backdrop'>
                <div className='finalMsg'>
                  <p>Actualizando datos...!!</p>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </main>
  );
};

export default Battle;
