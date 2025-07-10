import { useReducer } from 'react';
import { gameReducer } from '../../utils/reducer';
import StatItem from '../StatItem/StatItem';

const UseReducer = ({ initialState, onConfirm }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { vida, fuerza, defensa, velocidad, inteligencia, agilidad, points } =
    state;

  return (
    <section className='puntuation-board'>
      <p>Puntos ganados: {points}</p>
      <StatItem className='hp' payload='vida' stat={vida} dispatch={dispatch} />
      <StatItem
        className='strength'
        payload='fuerza'
        stat={fuerza}
        dispatch={dispatch}
      />
      <StatItem
        className='defense'
        payload='defensa'
        stat={defensa}
        dispatch={dispatch}
      />
      <StatItem
        className='speed'
        payload='velocidad'
        stat={velocidad}
        dispatch={dispatch}
      />
      <StatItem
        className='intelligence'
        payload='inteligencia'
        stat={inteligencia}
        dispatch={dispatch}
      />
      <StatItem
        className='agility'
        payload='agilidad'
        stat={agilidad}
        dispatch={dispatch}
      />
      <button className='confirm-btn' onClick={() => onConfirm(state)}>
        Aceptar cambios
      </button>
    </section>
  );
};
export default UseReducer;
