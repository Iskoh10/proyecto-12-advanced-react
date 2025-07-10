import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CreationForm from './pages/CreationForm/CreationForm';
import Gallery from './pages/Gallery/Gallery';
import Favorites from './pages/Favorites/Favorites';
import Battle from './pages/Battle/Battle';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import { useCreaturesContext } from './Providers/CreaturesContext';

function App() {
  const { creatures } = useCreaturesContext();

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='form' element={<CreationForm />} />
        <Route path='gallery' element={<Gallery creatures={creatures} />} />
        <Route path='favs' element={<Favorites creatures={creatures} />} />
        <Route path='battle/:creatureId' element={<Battle />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
