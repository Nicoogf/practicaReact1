import logo from './logo.svg';
import './App.css';
import Saludo from "./components/pure/Saludo" ;
import SaludoF from './components/pure/SaludoF';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        {/*
        <Saludo name={"Martin"} />       
        <SaludoF name={"Martin"} /> 
       */}
       
       
      </header>
    </div>
  );
}

export default App;
