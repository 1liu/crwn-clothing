import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({ title }) => (

  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <h1 className="title">Shop Now</h1>
    </div>
  </div>

)

export MenuItem;
