import logo from './logo.svg';
import './App.css';
import ListadoPeliculas from './views/ListadoPeliculas';
import Blog from './views/Blog';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {


  return (
    <BrowserRouter>
      {/*Elemento que nos permite movernos por los fragments según la url*/}
      <Routes>
        <Route path="/" element={<ListadoPeliculas />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
