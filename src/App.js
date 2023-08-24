import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list'; 
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';





/* PRACTICA */
/* import SongList from './components/container/song_list'; */



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       {/*  <TaskListComponent> </TaskListComponent> */}

      { /* <Ejemplo1></Ejemplo1> */}
 
        <Ejemplo2> </Ejemplo2>


       {/* 

       PRACTICA

       <SongList> </SongList>
       */ } 
       
      </header>
    </div>
  );
}

export default App;
