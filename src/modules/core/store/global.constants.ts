import { NAME } from '../../../config/app.config';
import ProviderWithContextHoc from '../../../utils/hoc/provider-with-context';

export const globalConstants = {
  title: NAME,
  author: {
    name: 'Muhammad Qasim',
    location: 'London',
    link: 'https://github.com/qasim9872',
  },
  show: {
    navbar: true,
    footer: true,
  },
};

export type GlobalConstants = typeof globalConstants;
export const {
  Provider: GlobalConstantsProvider,
  useHook: useGlobalConstantsHook,
} = ProviderWithContextHoc(globalConstants);
