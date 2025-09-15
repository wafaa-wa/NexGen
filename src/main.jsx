import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader/Loader.jsx';


const Root = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <BrowserRouter>
      {loaded ? <App /> : <Loader onDone={() => setLoaded(true)} />}
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(<Root />);