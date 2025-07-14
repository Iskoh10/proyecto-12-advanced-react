import './Loading.css';

const Loading = () => {
  return (
    <div className='overlay'>
      <div className='wrapper'>
        <div className='loader'>
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
        </div>
        <h3>Cargando...</h3>
      </div>
    </div>
  );
};

export default Loading;
