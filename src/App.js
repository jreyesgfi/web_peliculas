import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';



function App() {
  return(
    <PageWrapper>
      <Pelicula titulo="oblivion" calificacion="8.1" img="images/uploads/mv1.jpg"
        director="Joss Whedon" actores="Robert Downey Jr., Chris Evans, Chris Hemsworth" fecha="1 May 2015" duracion="2h21'">
        Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
      </Pelicula>
    </PageWrapper>
  )
}

export default App;
