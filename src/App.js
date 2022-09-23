import {React} from 'react';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from './screens/Home';
import Projects from './screens/Projects';
import { NavBar, TextSocial, TextTitle} from './styled';
import { IoLogoGithub } from "react-icons/io";
import {FaLinkedin} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import User from './components/User';
 

import './App.css';

function App({}) {

  
  return (
  <BrowserRouter>

  <header>
    <NavBar>
      <ul>
    <li>
      <Link to=''>Inicio</Link>
    </li>
    <li>
      <Link to='/screens/Projects'>Projetos</Link>
    </li>
    <li> Bem Vindo: {User.name}</li>
    </ul>
    
    </NavBar>
  </header>

  <Routes>
    <Route  index element ={<Home/>}/>
    <Route path='screens/Projects' element={<Projects/>} />
  </Routes>
  
  
  <footer>
    <TextTitle>Contato:</TextTitle>
    
    <div>
      <TextSocial>
     <a href="https://github.com/emerson2899"><IoLogoGithub/> emerson2899</a><br/>
     <a href='https://www.linkedin.com/in/emerson-felipe-martins/'>
     <FaLinkedin/>https://www.linkedin.com/in/emerson-felipe-martins/
     </a><br/>
    

    <a id="lin" href=" http://api.whatsapp.com/send?1=pt_BR&phone=5519996812048">
    <BsWhatsapp/> (19) 99681-2048
   </a>
   </TextSocial>
    </div>


  </footer>
  </BrowserRouter>


  );
}

export default App;
