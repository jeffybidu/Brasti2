import React from 'react';
import { FiLogIn} from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom';

import { CompanyWrapper } from './styles';

export const Company = () => (
  <CompanyWrapper>
    <ul className="primary">
      <li>
        <Link className="back-link " to="/register">
        <FiLogIn size={16} color="#969696" />
        Não tenho cadastro
      </Link>
      </li>
      <li>
        <span />
        Clientes
      </li>
      <li>
        <span />
        Corporativo
      </li>
      <li>
        <span />
        Parceiros
      </li>
      <li>
        <span />
        Empregos
      </li>
      <li>
        <span />
        Meio ambiente
      </li>
      <li>
        <span />
        Notícias
      </li>
    </ul>
   
  </CompanyWrapper>
);
