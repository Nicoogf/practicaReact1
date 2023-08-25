import logo from './logo.svg';
import './App.css';
/*


import TaskListComponent from './components/container/task_list'; 
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteContext from './hooks/Ejemplo3'; 
import Ejemplo4 from './hooks/Ejemplo4';


*/







/* PRACTICA */
import CancionList from './components/container/cancion_lista'; 



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      {/*  <TaskListComponent> </TaskListComponent> */}

      { /* <Ejemplo1></Ejemplo1> */}
 
      {/* <Ejemplo2> </Ejemplo2> */} 

      {/* <MiComponenteContext> </MiComponenteContext> */} 
       
       
       
      {/*  
      

      <Ejemplo4 nombre="Martin">
          <h3>Contenido del props.children</h3>
       </Ejemplo4>
       



      */ } 
       
      
      
      
      
      
       <CancionList> </CancionList>
       
      </header>
    </div>
  );
}

export default App;
