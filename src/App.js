import logo from './logo.svg';
import './App.css';
import Saludo from "./components/pure/Saludo" ;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <Saludo name={"Martin"} />
       
      </header>
    </div>
  );
}

export default App;
