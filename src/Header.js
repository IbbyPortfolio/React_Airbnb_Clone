import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from '@material-ui/core';

function Header() {
   return (
      <div className='header'>
         <img className='header__icon' src='./assets/image/airbnb.png' alt='' />
         <div className='header__center'>
            <input type='text' />
            <SearchIcon />
         </div>

         <div className='header__right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
         </div>
      </div>
   );
}

export default Header;
