import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Nav></Nav>
      </header>
    </div>
  );
}

export default App;
