import React, { useState } from 'react';
import { IconType } from 'react-icons';
import Module from '../../modules/_shared/module.interface';
import NavLink from './nav-link';

const Navbar: React.FC<{
  Logo?: IconType;
  modules: Module[];
}> = ({ Logo, modules }) => {
  const [currentTab, setCurrentTab] = useState(modules[0].name);

  return (
    <header className="flex w-full bg-gray-600 justify-center items-center px-8 pt-2 shadow-md">
      {Logo && <Logo className="App-logo" />}
      <ul className="flex justify-evenly">
        {modules.map((module) => (
          <NavLink
            currentTab={currentTab}
            key={module.name}
            name={module.name}
            path={module.routeProps.path}
            onClick={() => {
              setCurrentTab(module.name);
            }}
          />
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
