import React from "react";
import { Text, ModalArea, ModalBAckground } from "../styled";
import {HiAcademicCap} from 'react-icons/hi';
import {ImUser} from 'react-icons/im';
import Perfil from '../Assets/perfil.jpg';
import User from "../components/User";
import '../App.css';

function Home () {


    return(
        <Text>
            <ModalArea>
                <ModalBAckground></ModalBAckground>
            </ModalArea>
            <h1>Um pouco Sobre Mim</h1>
         

      <span className="description">
      <img src={Perfil} className='imPerfil' />
        Meu nome é Emerson Felipe Martins Caetano, atualmente  trabalho como vendedor.
        Entretanto, em meu tempo livre me dedico à estudar linguagens de programação, como Javascript, Python e Java.
        Possuo amplo conhecimento em desenvolvimento web, e trabalho em projetos em meu tempo livre.
        Sou acadêmico em Análise e Desenvolvimento de Sistemas pela Faculdade Anhanguera.
        Atualmente trabalho como vendedor. E também presto serviços de desenvolvedor de aplicações web.
        Sou acadêmico de Análise e desenvolvimento de sistemas na faculdade Anhanguera Educacional, e faço alguns cursos na plataforma na B7WEB, onde aprendi a dominar React JS, Node JS, HTML, CSS, Javascript, MongoDB. 
        Estou á procura de uma oportunidade na área de desenvolvedor, como junior para absorver mais onhecimento e experências de profissionais que já atuam à mais tempo no ramo.
          </span>
          <User/>
          
          <h1><HiAcademicCap/> Meus Cursos</h1>
        </Text>
    )
}
export default Home