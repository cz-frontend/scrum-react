import React from 'react';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import { Outlet, useLocation } from 'react-router-dom';

export default function AppLayout() {
  const route = useLocation();
  return (
    <div className="app-layout">
      <div className="header-view">
        <AppHeader />
      </div>
      <div className="container-view">
        {route.pathname === '/project' ? null : (
          <div className="sidebar">
            <AppSidebar />
          </div>
        )}
        <div className="body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
