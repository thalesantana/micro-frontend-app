import * as Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

interface Lifecycles {
  bootstrap: (singleSpaProps: object) => Promise<void>;
  mount: (singleSpaProps: object) => Promise<void>;
  unmount: (singleSpaProps: object) => Promise<void>;
}

const lifecycles: Lifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    render: (h: typeof Vue.h) => h(App),
  },
});

export const { bootstrap, mount, unmount } = lifecycles;