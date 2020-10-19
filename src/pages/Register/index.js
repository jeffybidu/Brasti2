  import React, {useState} from 'react';
  import {Link, useHistory} from 'react-router-dom';
  import {FiArrowLeft} from 'react-icons/fi';
  import brastichine from '../../assets/BrasbrainRed.png';

  import api from '../../services/api';
  import './styles.css';
  import logoImg from '../../assets/BrastiRed.png';

  export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    
    const history = useHistory();
    async function handleRegister(e){
      e.preventDefault();
      const data ={
       
          name,
          email,
          whatsapp,
          city,
          uf,
    };
      try{
        const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
      } catch(err){
        alert('Erro no cadastro, tente novamente.');  
      }
    }
    return (
      <div className="register-container">
        <div className="content">
          <section>
          <a href="/">
            <img src={brastichine} alt="BrasTi"/>
            </a>
            <h1>Cadastro</h1>
            <p>Faça parte do time BrasTi e seja um BrasChine para quem precisa.</p>
            <Link className="back-link " to="/login">
            <FiArrowLeft size={30} color="#969696" />
            Voltar para o Login
      </Link> 
          </section>
          <form onSubmit={handleRegister}>
            <input placeholder="Digite um Nickname" 
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <input 
              placeholder="WhatsApp" 
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />

            <div className="input-group">
            <input 
            placeholder="Cidade" 
            value={city}
            onChange={e => setCity(e.target.value)}
            />
            <input 
            placeholder="UF" 
            style={{ width:80,  }} 
            value={uf}
            onChange={e => setUf(e.target.value)}
            />
            </div>
            <button className="button" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    );
  }