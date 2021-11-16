import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import { useState } from 'react';
import Paginacion from './Paginacion';



function App() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);


  //Solicitamos las películas de un servidor
  function buscarPeliculas() {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json'
    try {
      fetch(url).then(response => {
        if (response.status === 200) {
          response.json().then(data => setPeliculas(data));
          return null;
        }
      });
      //console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };
  buscarPeliculas();

  //Mostramos un número limitado de películas por página
  const pelPorPag = 4;
  let cargarPeliculas = () =>
    peliculas.slice(
      (paginaActual - 1) * pelPorPag,
      paginaActual * pelPorPag
    );


  //Número de páginas necesarias
  const getTotalPaginas = () => (Math.ceil(peliculas.length / pelPorPag));

  return (
    <PageWrapper>
      {cargarPeliculas().map(pelicula =>
        <Pelicula titulo={pelicula.titulo} year={pelicula.year} calificacion={pelicula.calificacion} img={pelicula.img}
          director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}>
          {pelicula.descripcion}
        </Pelicula>
      )}
      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => { setPaginaActual(pagina); }} />

    </PageWrapper>
  )
}

export default App;
