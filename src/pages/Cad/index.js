import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowRight, FiX} from 'react-icons/fi';
import './styles.css';
import brasuser from '../../assets/BrasUserRed.png';
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
    <div className="brrt">
    <Link  to="/">
          <FiX size={30} color="#969696" />
    </Link> 
    </div>
    <div className="register-container">
     <div className="content10">
     <sectionimg1>
          <img src={brastichine} alt="BrasTi"/>
          </sectionimg1>
          <section1>
          <h1>BrasChine</h1>
          <p>Sejá um profissional da Brasti e ajude os BraUsers.</p>
          <Link className="back-link " to="/register">
          <FiArrowRight size={30} color="#969696" />
          Sejá um BrasChine
    </Link> 
        </section1>
        <sectionimg1>
          <img src={brasuser} alt="BrasTi"/>
          </sectionimg1>
          <section1>
          <h1>BrasUser</h1>
          <p>Precisa de Ajuda? </p>
          <p>Chame agora um BrasChine</p>
          <Link className="back-link " to="/register">
          <FiArrowRight size={30} color="#969696" />
          Em Breve! Você poderá se Tornar um BrasUser
    </Link> 
        </section1>
     
          </div>
       </div>
           </div>
       );
}