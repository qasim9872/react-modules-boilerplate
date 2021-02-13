import React from 'react';
import { Route } from 'react-router-dom';
import Module from '../../_shared/module.interface';
import { Footer, Navbar } from '../components';
import { useGlobalConstantsHook } from '../store/global.constants';

const AppView: React.FC<{ modules: Module[] }> = ({ modules }) => {
  const [constants] = useGlobalConstantsHook();
  const { title, show, author } = constants;

  return (
    <div className="flex flex-col mx-auto min-w-0 h-screen">
      {show.navbar && <Navbar title={title} modules={modules} />}
      <div className="h-full text-black">
        {modules.map((module) => (
          <Route {...module.routeProps} key={module.name} />
        ))}
      </div>
      {show.footer && <Footer {...author} />}
    </div>
  );
};

export default AppView;
