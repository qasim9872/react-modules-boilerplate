import React from 'react';
import Module from '../_shared/module.interface';

const AboutView = () => <div>About Module</div>;

const About: Module = {
  routeProps: {
    path: '/about',
    component: AboutView,
  },
  name: 'About',
};

export default About;
