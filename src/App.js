import logo from './Assets/logo.png';
import './App.css';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <body className = "App-body">
        <Home />
      </body>
    </div>
  );
}

export default App;
