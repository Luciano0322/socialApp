import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  
  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [ activeItem, setActiveItem ] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
      <Menu pointing secondary size="massive" color="teal">
        <Menu.Item
          name={user.username}
          active
          as={Link}
          to="/"
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={logout}
          />
        </Menu.Menu>
      </Menu>
  ) : (
      <Menu pointing secondary size="massive" color="teal">
        <Menu.Item
          name='主頁'
          active={activeItem === '主頁'}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='登入'
            active={activeItem === '登入'}
            onClick={handleItemClick}
            as={Link}
            to="/login"
          />
          <Menu.Item
            name='註冊'
            active={activeItem === '註冊'}
            onClick={handleItemClick}
            as={Link}
            to="/register"
          />
        </Menu.Menu>
      </Menu>
  )

  return menuBar;

}

export default MenuBar;