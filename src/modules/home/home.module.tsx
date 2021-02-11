import React from 'react';
import Module from '../_shared/module.interface';

const HomeView = () => <div>Home Module</div>;

const Home: Module = {
  routeProps: {
    path: '/home',
    component: HomeView,
  },
  name: 'Home',
};

export default Home;
