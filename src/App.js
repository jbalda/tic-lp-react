import logo from './logo.svg';
import './App.css';
import {NumeroAleatorio} from './Components/NumeroAleatorio.js';
import {NumeroAleatorioRemoto} from './Components/NumeroAleatorioRemoto.js';

function App() {
  return (
    <div className="App">
      <NumeroAleatorio />
      <NumeroAleatorioRemoto />
    </div>
  );
}

export default App;
