import { useEffect, useState } from 'react';
import powerCalc from '../../utils/powerCalc';

const useBattle = ({ creatures, creatureId }) => {
  const [enemy, setEnemy] = useState(null);
  const [isBattling, setIsBattling] = useState(false);
  const [battleResult, setBattleResult] = useState('');

  const creature = creatures.find((creature) => creature.name === creatureId);

  useEffect(() => {
    if (creatures.length > 1) {
      let newEnemy;

      do {
        const randomNum = Math.floor(Math.random() * creatures.length);
        newEnemy = creatures[randomNum];
      } while (newEnemy.name === creatureId);
      setEnemy(newEnemy);
    }
  }, [creatures, creatureId]);

  const startBattle = () => {
    if (!creature || !enemy) return;

    setIsBattling(true);

    const powerCreature = powerCalc(creature);
    const powerEnemy = powerCalc(enemy);

    let result;

    if (powerCreature === powerEnemy) {
      result = 'Empatado';
    } else if (powerCreature > powerEnemy) {
      result = 'Ganado';
    } else {
      result = 'Perdido';
    }

    setTimeout(() => {
      setIsBattling(false);
      setBattleResult(result);
    }, 5000);
  };
  return {
    creature,
    enemy,
    isBattling,
    battleResult,
    startBattle
  };
};

export default useBattle;
