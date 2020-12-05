import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const Details = React.lazy(() => import('./views/Details'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/details/:id', exact: true, name: 'Details', component: Details },
];

export default routes;
