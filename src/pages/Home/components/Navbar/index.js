import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import { Products } from '../Content';
import { DropdownProvider, DropdownOption, DropdownRoot } from '../Dropdown';
import { Container, DropdownStyles} from './styles';
import logoImg from '../../../../assets/LogoRedBranco.png';

function Navbar() {
  return (
    <DropdownProvider >
      <DropdownStyles >
           <Container  >
           <ul className="bidu">  
             <a href="/">
             <img src={logoImg}
             height="32"
             width="32"
              alt="BrasTi"
              />
                  </a>
                 <li className="test">

                 </li>
              <li className="brr">
              <Link className="entrar" to="/login">
              <FiLogIn className="blogin" size={30} color="#fff" />
              Fazer Login
              </Link> 
              </li>
              <li className=" br">
              <Link className=" buttonbid" to="/c">
                Cadastre-se
                </Link>
              </li>
             
             </ul>
                 
             </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default Navbar;
/*
Colocar depois do Logo
<li className="bid">
              <DropdownOption
                name="Outros"
                content={Products}
                backgroundHeight={286}
              />
              </li>*/