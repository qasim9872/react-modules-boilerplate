import React from 'react';
import modules, { core } from './modules';
import WrapComponentInProvidersHoc from './utils/hoc/wrap-component-in-providers';

export default WrapComponentInProvidersHoc(() => {
  const View = core.view;

  return <View modules={modules} />;
}, core.providers);
