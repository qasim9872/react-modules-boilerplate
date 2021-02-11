import React from 'react';
import SiteConfigProvider from './site-config';

export const StoreProviders: React.FC = (props) => {
  const { children } = props;
  return <SiteConfigProvider>{children}</SiteConfigProvider>;
};

export default StoreProviders;
