import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
  return (
    <header className='flex-container'>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
