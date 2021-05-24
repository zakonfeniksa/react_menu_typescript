import React, { FC } from 'react';
import './MenuButton.css';

interface MenuButtonProps {
  handleMouseDown: any;
}

const MenuButton:FC<MenuButtonProps> = ( { handleMouseDown } ) => {
  return (
    <button id="roundButton" onMouseDown={handleMouseDown}></button>
  );
}

export default MenuButton;
