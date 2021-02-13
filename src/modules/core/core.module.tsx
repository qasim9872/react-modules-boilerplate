import React, { ComponentProps } from 'react';
import CoreModule from '../_shared/core.interface';
import { GlobalConstantsProvider } from './store/global.constants';
import AppView from './views/app';

const Core: CoreModule<ComponentProps<typeof AppView>> = {
  name: 'Core',
  providers: [GlobalConstantsProvider],
  view: AppView,
};

export default Core;
