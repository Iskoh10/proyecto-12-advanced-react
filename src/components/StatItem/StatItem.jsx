import Button from '../Button/Button';
import './StatItem.css';

const StatItem = ({ className, payload, stat, dispatch }) => {
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <section className='stat-item'>
      <div className={`${className} flex-container`}>
        <Button
          className='subs-btn'
          text='-'
          onClick={() => dispatch({ type: 'SUBS', payload: payload })}
        />
        <h3>
          {capitalize(payload)}: {stat}
        </h3>
        <Button
          className='sum-btn'
          text='+'
          onClick={() => dispatch({ type: 'SUM', payload: payload })}
        />
      </div>
    </section>
  );
};

export default StatItem;
