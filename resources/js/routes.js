import { createWebHistory } from 'vue-router';
import { createLangRouter } from 'vue-lang-router';

import translations from './translations';
import localizedURLs from './translations/localized-urls';

const Main = () => import('./views/Main.vue');
const Home = () => import('./views/Home.vue');

const myroutes = [
    {
        path: "",
        component: Main,
        name: "main",
        meta: {
            layout: 'AppLayoutDefault',
            title: ''
        },
    },
    {
        path: "/:lang/home",
        component: Home,
        name: "home",
        meta: {
            layout: 'AppLayoutDefault',
            title: ''
        },
    },
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
