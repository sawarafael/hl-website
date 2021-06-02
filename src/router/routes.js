
const routes = [
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/signin', component: () => import('pages/Auth/Auth.vue') },
      { path: '/signup', component: () => import('pages/Auth/Signup.vue') },
      { path: '/accounts-settings', component: () => import('pages/Auth/AccountSettings.vue') }
    ]
  },
  {
    path: '/back',
    component: () => import('layouts/BackLayout.vue'),
    children: [
      { path: '/background', component: () => import('pages/Back/Back.vue') }
    ]
  },
  {
    path: '/play',
    component: () => import('layouts/GameLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Game/Game.vue') },
      { path: '/settings', component: () => import('pages/Game/Launcher.vue') }
    ]
  },
  {
    path: '/system',
    component: () => import('layouts/SystemLayout.vue'),
    children: [
      { path: '/challenges', component: () => import('pages/System/Challenges.vue') },
      { path: '/courses', component: () => import('pages/System/Courses.vue') },
      { path: '/social-link', component: () => import('pages/System/SocialLink.vue') },
      { path: '/', component: () => import('pages/System/System.vue') }
    ]
  },
  {
    path: '/portfolio',
    component: () => import('layouts/PortLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Portfolio/Portfolio.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
