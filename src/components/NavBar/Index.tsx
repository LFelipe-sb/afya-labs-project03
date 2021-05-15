import React from 'react';
import { Link } from 'react-router-dom';
import logoAfya from '../../assets/afya-logo.png';
// import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <nav>
      <Link to='/'>
        <img src={logoAfya} alt='Logo da Afya - Empresa de educação no ramo da medicina.' />  
      </Link> 
      <Link to='/'>Home</Link>
      <Link to='/'>Contact</Link>
    </nav>
  );
}

export default NavBar;