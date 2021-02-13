import React from 'react';
import MultiPageLayout from './layouts/multi-page';
import modules from './modules';
import { GlobalConstantsProvider } from './store/global.constants';
import { GlobalServicesProvider } from './store/global.services';
import WrapComponentInProvidersHoc from './utils/hoc/wrap-component-in-providers';

export default WrapComponentInProvidersHoc(
  () => <MultiPageLayout modules={modules} />,
  [GlobalServicesProvider, GlobalConstantsProvider],
);
