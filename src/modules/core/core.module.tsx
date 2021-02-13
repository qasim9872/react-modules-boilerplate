import { ComponentProps } from 'react';
import CoreModule from '../_shared/core.interface';
import { GlobalConstantsProvider } from './store/global.constants';
import { GlobalServicesProvider } from './store/global.services';
import AppView from './views/app';

const Core: CoreModule<ComponentProps<typeof AppView>> = {
  name: 'Core',
  providers: [GlobalServicesProvider, GlobalConstantsProvider],
  view: AppView,
};

export default Core;
