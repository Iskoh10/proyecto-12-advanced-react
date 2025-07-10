import { Fragment } from 'react';
import './RatingBox.css';

const RatingBox = ({ id, rating, onChange }) => {
  return (
    <section
      className='rating flex-container'
      onClick={(e) => e.stopPropagation()}
    >
      <div className='stars'>
        {[5, 4, 3, 2, 1].map((value) => (
          <Fragment key={value}>
            <input
              type='radio'
              id={`${id}-star${value}`}
              name={`rating-${id}`}
              value={value}
              checked={rating === value}
              onChange={() => {
                onChange(value);
              }}
            />
            <label htmlFor={`${id}-star${value}`}></label>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default RatingBox;
