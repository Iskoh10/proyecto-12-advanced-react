import './Battle.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreaturesContext } from '../../Providers/CreaturesContext';
import Button from '../../components/Button/Button';
import useBattle from '../../hooks/useBattle/useBattle';
import UseReducer from '../../components/UseReducer/UseReducer';
import { useMemo, useState } from 'react';

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
                <img src='/react.svg' alt='react icon' className='bg-tatami' />
                <div className='my-creature flex-container'>
                  <h3>{creature.name}</h3>
                  <div className='img-container'>
                    <img src={creature.imgUrl} alt='creature-image' />
                  </div>
                  <div className='stats-in-fight flex-container'>
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
                    <div className='stats-in-fight flex-container'>
                      <h2>Stats</h2>
                      <p>
                        Vida <span>{enemy.stats.vida}</span>
                      </p>
                      <p>
                        Fuerza <span>{enemy.stats.fuerza}</span>
                      </p>
                      <p>
                        Defensa <span>{enemy.stats.defensa}</span>
                      </p>
                      <p>
                        Velocidad <span>{enemy.stats.velocidad}</span>
                      </p>
                      <p>
                        Inteligencia <span>{enemy.stats.inteligencia}</span>
                      </p>
                      <p>
                        Agilidad <span>{enemy.stats.agilidad}</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>
          <Button className='battle-go' text='Luchar' onClick={startBattle} />
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
              <div className='stats-in-fight flex-container'>
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
                  <p>Datos actualizados!!</p>
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
