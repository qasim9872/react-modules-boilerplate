import React from 'react';
import { Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import site from './constants/site.constants';
import useSiteConfig from './hooks/use-site-config';
import modules from './modules';

const AppPresentation: React.FC<{ siteConfig: typeof site }> = ({
  siteConfig,
}) => {
  return (
    <div className="flex flex-col mx-auto min-w-0 h-screen">
      {siteConfig.show.navbar && (
        <Navbar title={siteConfig.title} modules={modules} />
      )}
      <div className="h-full">
        {modules.map((module) => (
          <Route {...module.routeProps} key={module.name} />
        ))}
      </div>
      {siteConfig.show.footer && <Footer {...siteConfig.author} />}
    </div>
  );
};

const withSiteConfigHOC = (Presentation: typeof AppPresentation) => () => {
  const siteConfig = useSiteConfig();
  return <Presentation siteConfig={siteConfig} />;
};

export default withSiteConfigHOC(AppPresentation);
