import { ComponentProps } from 'react';
import { Route } from 'react-router-dom';

interface RouteProps extends ComponentProps<typeof Route> {
  path: string;
}

export default interface Module {
  enable: boolean;
  showInNav: boolean;

  name: string;
  providers?: React.FC<{}>[];

  routeProps: RouteProps;
}
