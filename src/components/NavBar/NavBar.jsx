import CustomLink from '../CustomLink/CustomLink';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul className='ul-navbar flex-container'>
        <CustomLink link='/form' nameLink='Formulario' />
        <CustomLink link='/gallery' nameLink='Galeria' />
        <CustomLink link='/favs' nameLink='Favoritas' />
      </ul>
    </nav>
  );
};

export default NavBar;
