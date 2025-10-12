const routes = [
    {
        path: '/',
        component: () => import('@/components/Home.vue')
    },
    {
        path: '/demo/storage',
        component: () => import('@/demo/components/Storage.vue')
    },
    {
        path: '/demo/locale',
        component: () => import('@/demo/components/Locale.vue')
    },
    {
        path: '/demo/components',
        component: () => import('@/demo/components/Components.vue')
    },
    {
        path: "/:notFound",
        component: () => import('@/components/NotFound.vue')
    },
];

export default routes;
