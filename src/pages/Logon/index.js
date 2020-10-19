import React , {useState} from 'react';
import { FiLogIn} from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom';
import api from '../../services/api';
import '../Logon/styles.css';

import logoImg from '../../assets/BrastiRed.png';
import heroesImg from '../../assets/PCs.png';

export default function Logon(){
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault(); //Aqui é uma maneira de validar as info, se já existe no banco
    try {
      const response  = await api.post('sessions', {id});

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    }catch (err){
      alert('Falha no seu Login, tente novamente.');
    }
  }
  return(

    <div className="logon-container">
   <section className="form">
   <a href="/">
   <img src={logoImg} alt="BrasTi"/>
   </a>
   <form onSubmit={handleLogin}/*aqui estou puxando da onde verificar a info*/> 
     <h1>Faça seu logon </h1>
     <input placeholder="Sua ID"
     value={id}
     onChange={e => setId(e.target.value)}
     />
     <button className="button  " type="submit">Entrar</button>

      <Link className="back-link " to="/register">
      <FiLogIn size={16} color="#969696" />
        Não tenho cadastro
      </Link>
   </form>
   </section>
   
   <img src={heroesImg} alt="BrasTi"/>
   </div>
    
  );
  
}