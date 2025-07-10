import './Select.css';

const Select = ({ refs, errors }) => {
  return (
    <div className='select-container flex-container'>
      <label htmlFor='attribute-select' className='select-label'>
        Cualidad Principal
      </label>
      <select id='attribute-select' defaultValue='' ref={refs.attbrSelect}>
        <option value='' disabled>
          Cualidades
        </option>
        <option value='Fuerza'>Fuerza</option>
        <option value='Defensa'>Defensa</option>
        <option value='Velocidad'>Velocidad</option>
        <option value='Inteligencia'>Inteligencia</option>
        <option value='Agilidad'>Agilidad</option>
      </select>
      <i></i>
    </div>
  );
};

export default Select;
