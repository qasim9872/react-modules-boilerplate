import { ComponentProps } from 'react';
import { Route } from 'react-router-dom';

interface RouteProps extends ComponentProps<typeof Route> {
  path: string;
}

export default interface Module {
  name: string;
  routeProps: RouteProps;
}
