import './Gallery.css';
import FillGallery from '../../components/FillGallery/FillGallery';

const Gallery = ({ creatures }) => {
  return (
    <main className='gallery'>
      <FillGallery creatures={creatures} />
    </main>
  );
};

export default Gallery;
