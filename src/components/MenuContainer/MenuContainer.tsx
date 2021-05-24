import React, { FC, useState } from 'react';
import MenuButton from '../MenuButton/MenuButton.js';
import Menu from '../Menu/Menu.js';

interface E {
  stopPropagation: Function;
}

const MenuContainer:FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => setVisible(!visible);
  const handleMouseDown = (e:E) => {
    toggleMenu();
    e.stopPropagation();
  }

  return (
    <>
      <MenuButton handleMouseDown={handleMouseDown} />
      <Menu handleMouseDown={handleMouseDown} menuVisibility={visible} />
    </>
  );
}

export default MenuContainer
