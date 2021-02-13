import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { useLocation } from 'react-router-dom';
import Module from '../../modules/_shared/module.interface';
import NavLink from './nav-link';

const Navbar: React.FC<{
  title: string;
  modules: Module[];
  Logo?: IconType;
}> = ({ title, Logo, modules }) => {
  const [currentTab, setCurrentTab] = useState(modules[0]?.name || '');

  const location = useLocation();
  React.useEffect(() => {
    const module = modules.find(
      ({ routeProps }) => routeProps.path === location.pathname,
    );

    setCurrentTab(module?.name || '');
  }, [modules, location]);

  return (
    <header className="flex w-full bg-gray-600 justify-between items-center px-8 py-3 shadow-md">
      <div>
        {Logo && <Logo className="App-logo" />}
        <h1 className="text-lg uppercase">{title}</h1>
      </div>
      <ul className="flex justify-evenly">
        {modules.map((module) => (
          <NavLink
            currentTab={currentTab}
            key={module.name}
            name={module.name}
            path={module.routeProps.path}
            onClick={() => setCurrentTab(module.name)}
          />
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
