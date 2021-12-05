import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Colors from './Components/GifBackground/Colors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Nav></Nav>
        <Colors></Colors>
        
      </header>
    </div>
  );
}

export default App;
