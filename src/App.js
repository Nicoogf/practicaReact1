import logo from './logo.svg';
import './App.css';
import SongList from './components/container/song_list';
/* import TaskListComponent from './components/container/task_list'; */



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       {/* <TaskListComponent> </TaskListComponent> */ } 
        <SongList> </SongList>
       
      </header>
    </div>
  );
}

export default App;
