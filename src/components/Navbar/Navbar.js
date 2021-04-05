import React from 'react';

import 'antd/dist/antd.css';
import './nav-bar.css';

import logo from '../../images/sibdev-logo.svg';

const Navbar = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container_img">
          <img
            src={logo}
            style={{ margin: '0 auto', display: 'block' }}
            alt=""
          />
        </div>
        <div className="header__container_navigation">
          <button className="btn btn-navigation">Поиск</button>
          {/* <button className="btn">Выйти</button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
