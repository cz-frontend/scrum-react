import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';

export default function App() {
  const RouterView = useRoutes(routes);
  return <>{RouterView}</>;
}
