import React from 'react';
import './Menu.css';

interface MenuProps {
  handleMouseDown: any;
  menuVisibility?: boolean;
}

const Menu = (props: MenuProps) => {
  let visibility:string = 'hide';

  if (props.menuVisibility) visibility = 'show';
  return (
    <div id="flyoutMenu" onMouseDown={props.handleMouseDown} className={visibility}>
      <h2><a href="#">Strona główna</a></h2>
      <h2><a href="#">O nas</a></h2>
      <h2><a href="#">Kontakt</a></h2>
      <h2><a href="#">Szukaj</a></h2>
    </div>
  );
}

export default Menu;
