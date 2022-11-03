
import styles from './App.css';
import Nav from './Components/Nav/Nav';
import Colors from './Components/GifBackground/Colors';
import { Routes, Route}from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import { Link } from 'react-router-dom'



function App() {
  return (


    <div className="App">
      
                

        <Routes>
 
        <Route path="/" element={<Colors/>} />.

          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />
  
          
     </Routes>

    </div>
  );
}

export default App;
