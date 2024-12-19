import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@org/login-app',
  app: () => import('@org/login-app'),
  activeWhen: ['/'],
});

registerApplication({
  name: '@org/home-app',
  app: () => import('@org/home-app'),
  activeWhen: ['/home'],
});

registerApplication({
  name: '@org/partners-app',
  app: () => import('@org/partners-app'),
  activeWhen: ['/partners'],
});

registerApplication({
  name: '@org/external-app',
  app: () => import('@org/external-app'),
  activeWhen: ['/external-app'],
});

start({
  urlRerouteOnly: true,
});