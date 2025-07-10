import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <div className='container-logo flex-container'>
      <Link to='/' className='flex-container'>
        <img src='/favicon.png' alt='logo-image' />
      </Link>
    </div>
  );
};

export default Logo;
