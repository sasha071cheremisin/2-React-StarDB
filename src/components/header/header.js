import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/2-React-StarDB/" className="header__title">Star DB</Link>
      <div className="header__menu-list">
        <Link to="/2-React-StarDB/people/" className="header__menu-item">People</Link>
        <Link to="/2-React-StarDB/planets/" className="header__menu-item">Planets</Link>
        <Link to="/2-React-StarDB/starships/" className="header__menu-item">Starships</Link>
      </div>
    </div>
  );
};

export default Header;
