import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

import { Search, ShoppingBasket, Storefront } from '@material-ui/icons';

function Header() {
  return (
    <div className='Header'>
      <Link to="/" style={{textDecoration: "none"}}>
      <div className='header__logo'>
        <Storefront className='header__logoImage' fontSize='large' />
        <h2 className="header__logoTitle">EShop</h2>
      </div>
      </Link>
        
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className='header__seachIcon'/>

      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">SignIn</span>
        </div>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>

        <Link to="/checkout" style={{textDecoration: "none"}}>
        <div className="nav__item">
          <ShoppingBasket className='itemBasket'/>
          <span className="nav__itemLineTwo nav_basketCount">0</span>
        </div>
        </Link>
       


      </div>

    </div>
  )
}

export default Header