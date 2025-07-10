import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <main className='not-found flex-container'>
      <section className='not-found flex-container'>
        <div className='top-half'>404</div>
        <div className='bottom-half'>404</div>
      </section>
      <h2 className='lost-msg'>¿Te perdiste amigo?</h2>
      <div className='link-container flex-container'>
        <Link to='/'>Volver a Home</Link>
      </div>
    </main>
  );
};

export default NotFound;
