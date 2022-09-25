import React from "react";
import {HashLink as Link} from 'react-router-hash-link';
import './Header.scss'

const Header = () => {

  return (
    <div className='NavBar'>
      <div className='NavBar-title'>
        <h1 className='title'>AVEROUS PIERRE</h1>
      </div>
      <div>
        <Link to="#Contact"> Contact </Link>
        <Link to="#Contact"> Blog </Link>
        <Link to="#Contact"> Projets </Link>
        <Link to="#Contact"> Compétence </Link>
        <Link to="#Contact"> Contact </Link>

      </div>

    </div>
  )
}

export default Header;