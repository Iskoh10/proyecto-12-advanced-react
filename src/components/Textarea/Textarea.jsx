import './Textarea.css';

const Textarea = ({ id, labelText, refs }) => {
  return (
    <div className='textarea-container  flex-container'>
      <textarea
        id={id}
        ref={refs.descriptionTextarea}
        placeholder=' '
      ></textarea>
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

export default Textarea;
