const routes = [
  {
    path: ['/', '/home'],
    exact: true,
    component: 'Home',
  },
  {
    path: ['/products'],
    component: 'Products',
  },
  {
    path: ['/blogs'],
    component: 'Blogs',
  },
];

export default routes;
