import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CreaturesProvider } from './Providers/CreaturesContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CreaturesProvider>
      <App />
    </CreaturesProvider>
  </BrowserRouter>
);
