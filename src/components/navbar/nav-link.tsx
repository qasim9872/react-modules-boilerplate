import React from 'react';
import { Link } from 'react-router-dom';

const NavLink: React.FC<{
  currentTab: string;
  name: string;
  path: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}> = ({ currentTab, name, path, onClick }) => {
  return (
    <li
      className={`no-underline border-b-2 uppercase tracking-wide font-bold text-xs py-3 mr-8 ${
        currentTab === name
          ? 'text-secondary-300 border-secondary-300'
          : 'text-gray-200 border-transparent'
      }`}
    >
      <Link to={path} onClick={onClick}>
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
