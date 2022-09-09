import {React} from 'react';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from './screens/Home';
import Projects from './screens/Projects';
import { NavBar } from './styled';
 

import './App.css';

function App() {

  
  return (
  <BrowserRouter>

  
    <NavBar>
      <ul>
    <li>
      <Link to=''>Inicio</Link>
    </li>
    <li>
      <Link to='/screens/Projects'>Projetos</Link>
    </li>
    </ul>
    </NavBar>
  

  <Routes>
    <Route  index element ={<Home/>}/>
    <Route path='screens/Projects' element={<Projects/>} />
  </Routes>
  
  
  <footer>Contato:</footer>
  </BrowserRouter>


  );
}

export default App;
