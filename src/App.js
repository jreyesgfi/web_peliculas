import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json'
import { useState } from 'react';
import Paginacion from './Paginacion';



function App() {
  const [paginaActual, setPaginaActual] = useState(1);


  //Solicitamos las películas de un servidor
  const buscarPeliculas = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json'
    try {
      const response = await fetch(url);
      //console.log(response.status);
      if(response.status === 200)
        setMovies(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  buscarPeliculas();
  function setMovies(data){
    alert(data);
  }



  let peliculas = peliculasJson;

  //Mostramos un número limitado de películas por página
  const pelPorPag = 2;
  let cargarPeliculas = () =>
    peliculas.slice(
      (paginaActual - 1) * pelPorPag,
      paginaActual * pelPorPag
    );

  //Número de páginas necesarias
  const getTotalPaginas = () => (Math.ceil(peliculasJson.length / pelPorPag))


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
