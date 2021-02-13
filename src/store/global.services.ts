import ProviderWithContextHoc from '../utils/hoc/provider-with-context';

import logger from '../services/logger';

export const globalServices = {
  logger,
};

export const {
  Provider: GlobalServicesProvider,
  useHook: useGlobalServicesHook,
} = ProviderWithContextHoc(globalServices);
