import React from 'react';
import SearchBar from './SearchBar.jsx';
import Style from '../style/Nav.module.css';
import { Link } from 'react-router-dom';


export default function Nav({onSearch}) {
  return (
    <div className={Style.navbar}>

      <span className={Style.logo}>WEATHER</span>

      <ul className={Style.nav}>
        
          <li>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <span className={Style.span}>HOME</span>
            </Link>
          </li>
          <li>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <span className={Style.span}>ABOUT</span>
            </Link>
          </li>
          <li>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <span className={Style.span}>CONTACT</span>
            </Link>
          </li>
      </ul>

      <div className={Style.search_bar}><SearchBar onSearch={onSearch}/></div>

    </div>
  );
};