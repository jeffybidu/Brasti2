import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/Logowhit.png';
import brasuser from '../../assets/BrasUserRed.png';
import user from '../../assets/UserRed.png';
import profissional from '../../assets/Profi.png';
import brastichine from '../../assets/BrasbrainRed.png';
import GlobalStyles from '../Home/styles/GlobalStyles';
import Layout from '../Home/components/Layout';
import Navbar from '../Home/components/Navbar';
export default function Register(){
  
  return (
    <div>
        <>
      <Layout>
        <Navbar />
      </Layout>
      <GlobalStyles />
    </>
      <div className="register-container">
          
      <div className="content1">
  
        <sectionimg>
          <img src={brastichine} alt="BrasTi"/>
          </sectionimg>
          <section>
          <h1>BrasChine</h1>
          <p>Sejá um profissional da Brasti e ajude os BraUsers com suas competências em sua área.</p>
          <p>Além de ganhar por isso, você trabalha com as stacks que você gosta e a hora que quiser.</p>
          <Link className="back-link " to="/register">
          <FiArrowLeft size={16} color="#969696" />
          Sejá um BrasChine
    </Link> 
        </section>
        
        <section1>
          <img 
          height="400"
          src={profissional} alt="BrasTi"/>
          </section1>
         </div>
        </div>
         <div className="register-container">
          
        <div className="content2">
  
        <sectionimg>
          <img src={brasuser} alt="BrasTi"/>
          </sectionimg>
          <section>
          <h1>BrasUser</h1>
          <p>Você pode pedir ajuda de um dos nossos BrasChine</p>
          <p>É simples, basta procurar a competência que precisa de ajuda, 
            nosso sistema fornecerá os valores e os dados do BrasChine.</p>
          <p>É sem surpresa, sem burocracia e peça quando quiser.</p>
          <Link className="back-link " to="/">
          <FiArrowLeft size={16} color="#969696" />
          Em Breve! Você poderá se Tornar um BrasUser
    </Link> 
        </section>
        
        <section1>
          <img 
          height="400"
          src={user} alt="BrasTi"/>
          </section1>
         </div>
        </div>

        <div className="register-containerBlack">
      <div className="contentBlack">
      <sectionb>
          <img 
          height="70"
          src={logoImg} alt="BrasTi"/>
          <p className="topo"> © 2020 BrasTi </p>
          </sectionb>
          <sectionb>
          <h1 className="topo1">BrasTi</h1>
          <p>Tecnologia em processo de desenvolvimento por Jefferson Carvalho</p>
          <Link className="back-link " to="/c">
          <FiArrowLeft size={16} color="#969696" />
          Cadastre-se
           </Link> 
        </sectionb>
        </div>
        </div>
        </div>
        

       );
}