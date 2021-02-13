import React from 'react';
import Module from '../_shared/module.interface';

const AboutView = () => <div>About Module</div>;

const About: Module = {
  name: 'About',
  enable: false,
  showInNav: true,

  routeProps: {
    path: '/about',
    component: AboutView,
  },
};

export default About;
