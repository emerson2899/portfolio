import React from "react";
import { Text } from "../styled";
import {HiAcademicCap} from 'react-icons/hi';
import {ImUser} from 'react-icons/im'


function Home () {


    return(
        <Text>
            <h1><ImUser/> Um pouco Sobre Mim</h1>


        Meu nome é Emerson Felipe Martins Caetano, atualmente  trabalho como vendedor.
        Entretanto, em meu tempo livre me dedico à estudar linguagens de programação, como Javascript, Python e Java.
        Possuo amplo conhecimento em desenvolvimento web, e trabalho em projetos em meu tempo livre.
        Sou acadêmico em Análise e Desenvolvimento de Sistemas pela Faculdade Anhanguera.
          
          
          <h1><HiAcademicCap/> Meus Cursos</h1>
        </Text>
    )
}
export default Home