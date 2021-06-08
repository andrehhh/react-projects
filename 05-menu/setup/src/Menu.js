import React from 'react';

const Menu = ({ title, price, img, desc }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>${price}</h4>
      <p>{desc}</p>
    </div>
  )
};

export default Menu;
