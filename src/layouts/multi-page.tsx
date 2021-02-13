import React from 'react';
import { Route } from 'react-router-dom';
import Module from '../modules/_shared/module.interface';
import { Footer, Navbar } from '../components';
import { useGlobalConstantsHook } from '../store/global.constants';

const MultiPageLayout: React.FC<{ modules: Module[] }> = ({ modules }) => {
  const [constants] = useGlobalConstantsHook();
  const { title, show, author } = constants;

  const enabledModules = modules.filter((module) => module.enable);
  const showInNav = enabledModules.filter((module) => module.showInNav);

  return (
    <div className="flex flex-col mx-auto min-w-0 h-screen">
      {show.navbar && <Navbar title={title} modules={showInNav} />}
      <div className="h-full text-black">
        {enabledModules.map((module) => (
          <Route {...module.routeProps} key={module.name} />
        ))}
      </div>
      {show.footer && <Footer {...author} />}
    </div>
  );
};

export default MultiPageLayout;
