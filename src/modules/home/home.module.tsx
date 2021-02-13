import React from 'react';
import Module from '../_shared/module.interface';

const HomeView = () => {
  return <div>Home Module</div>;
};

const Home: Module = {
  routeProps: {
    path: '/',
    exact: true,
    component: HomeView,
  },
  name: 'Home',
};

export default Home;
