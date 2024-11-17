import { createWebHistory } from 'vue-router';
import { createLangRouter } from 'vue-lang-router';

import translations from './translations';
import localizedURLs from './translations/localized-urls';
import { comment } from 'postcss';

const Main = () => import('./views/Main.vue');
const Home = () => import('./views/Home.vue');
const Faq = () => import('./views/Faq.vue');
const Registration = () => import('./views/Registration.vue'); 
const SignIn = () => import('./views/SignIn.vue');

const myroutes = [
    {
      path: '',
      component: Main,
      name: 'main',
      meta: {
        layout: 'AppLayoutDefault',
        title: 'Main Page',
      },
    },
    {
      path: '/:lang/home',
      component: Home,
      name: 'home',
      meta: {
        layout: 'AppLayoutDefault',
        title: 'Home Page',
      },
    },
    {
      path: '/:lang/faq',
      component: Faq,
      name: 'faq',
      meta: {
        layout: 'AppLayoutDefault',
        title: 'FAQ',
      },
    },
    {
      path: '/:lang/registration',
      component: Registration,
      name: 'registration',
      meta: {
        layout: 'AppLayoutDefault',
        title: 'Registration',
      }
    },
    {
      path: '/:lang/signin',
      component: SignIn,
      name: 'SignIn',
      meta: {
        layout: 'ApplayoutDefault',
        title: 'SignIn',
      }
    }
];

export const routes = myroutes;

const langRouterOptions = {
    defaultLanguage: 'en',
    translations,
    localizedURLs
};

const routerOptions = {
    routes,
    history: createWebHistory(''),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
};

const router = createLangRouter(langRouterOptions, routerOptions);

export default router;