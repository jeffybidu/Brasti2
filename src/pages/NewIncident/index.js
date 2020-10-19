import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/BrastiRed.png';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    async function handleNewIncident(e){
      e.preventDefault();

      const data ={
        title,
        description,
        value,
      };
      try {
        await api.post('incidents', data, {
          headers: {
            Authorization: ongId,
          }
        })
        history.push('/profile');
      }catch (err){
        alert('Erro ao Cadastrar caso, tente novamente.');
      }
    }

  return(
  <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="BrasTi"/>
            <h1>Se torne um BrasChine para quem precisa!</h1>
            <p>É simples de Cadastrar</p>
            <p>Categoria: Define um termo para cada consulta. EX: Javascript, Manutenção de Computadores..</p>
            <p>Descrição: Escreva suas experiências, habilidades, aventuras, algo que chame a atenção do contratante.</p>
             <p>Valores: Aqui, você define o seu preço.</p>
            <Link className="back-link " to="/profile">
            <FiArrowLeft size={16} color="#808080" />
            Voltar para Home
      </Link> 
          </section>
          <form onSubmit={handleNewIncident}>
            <input 
              placeholder="Categoria"
              value={title}
              onChange={e => setTitle(e.target.value)}
              />

            <textarea 
              placeholder="Descrição"
              value={description}
              onChange={e => setDescription(e.target.value)}
              />

            <input 
              placeholder="Valor em reais"
              value={value}
              onChange={e => setValue(e.target.value)}
              />

            
            <button className="button" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
  )
}