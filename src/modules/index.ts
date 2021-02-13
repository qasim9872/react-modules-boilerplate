import Home from './home';
import About from './about';

import Module from './_shared/module.interface';

export { default as core } from './core';

const modules: Module[] = [Home, About];
export default modules;
