import { ComponentProps } from 'react';
import { Route } from 'react-router-dom';
import { BaseModule } from './core.interface';

interface RouteProps extends ComponentProps<typeof Route> {
  path: string;
}

export default interface Module extends BaseModule {
  routeProps: RouteProps;
}
