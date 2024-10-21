import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@org/login-app',
  app: () => System.import('@org/login-app'),
  activeWhen: ['/login'],
});

registerApplication({
  name: '@org/home-app',
  app: () => System.import('@org/home-app'),
  activeWhen: ['/home'],
});

registerApplication({
  name: '@org/partners-app',
  app: () => System.import('@org/partners-app'),
  activeWhen: ['/partners'],
});

registerApplication({
  name: '@org/external-companies-app',
  app: () => System.import('@org/external-companies-app'),
  activeWhen: ['/external-companies'],
});

start();