import './Input.css';

const Input = ({ id, refs, labelText, errorKey }) => {
  return (
    <div className='input-container flex-container'>
      <input
        type='text'
        id={id}
        ref={refs[errorKey + 'Input']}
        placeholder=' '
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

export default Input;
