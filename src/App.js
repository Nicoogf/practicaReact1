import logo from './logo.svg';
import './App.css';
import MiComponenteConContexto from './hooks/EEjemplo1';
import ContenedorMain from './hooks/Eejemplo2';
import MoviesListComponent from './components/container/movies_list';
/*

import TaskListComponent from './components/container/task_list'; 
*/

/* PRACTICA */ /**
import CancionList from './components/container/cancion_lista'; 
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import EEjemplo1 from './hooks/EEjemplo1';

*/



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      {/*  <TaskListComponent> </TaskListComponent> 
          <Ejemplo2></Ejemplo2> 
 
         <MiComponenteConContexto> </MiComponenteConContexto>
          <EEjemplo1></EEjemplo1>
          <ContenedorMain></ContenedorMain>
      */}

       

      <MoviesListComponent></MoviesListComponent>
    



      
      
      
      
      
      
       
      </header>
    </div>
  );
}

export default App;
