const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'frame', name: 'frame', component: () => import('pages/FramePage.vue') },
      { path: 'capture', name: 'capture', component: () => import('pages/CapturePage.vue') },
      { path: 'selection', name: 'selection', component: () => import('pages/SelectionPage.vue') },
      { path: 'download', name: 'download', component: () => import('pages/DownloadPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
