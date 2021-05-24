import Vue from 'vue';
import Router from 'vue-router';

import PageDashboard from "../page/PageDashboard.vue";
import PageAbout from "../page/PageAbout.vue";
import Page404 from "../page/Page404.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: PageDashboard,
        },
        // {
        //     path: '/dashboard/:page',
        //     name: 'dashboard',
        //     component: PageDashboard,
        // },
        {
            path: '/about',
            name: 'about',
            component: PageAbout,
        },
        {
            path: '/404',
            name: '404',
            component: Page404,
        },
        {
            path: '/dashboard/add/:category',
            name: 'autoAdd',
            component: PageDashboard,
        },
    ]
})