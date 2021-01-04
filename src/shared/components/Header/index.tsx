import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styles';

const Header: React.FC = () => {
  return (
    <Nav>
      <img
        src="https://avatars0.githubusercontent.com/u/46430156?s=460&u=f05512ec1046186e7792817ad0311a3438b8b420&v=4"
        alt="Paulo Barcelos"
      />
      <ul>
        <li>
          <Link to="/">Posts</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Header;
