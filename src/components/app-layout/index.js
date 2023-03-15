import React from 'react';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="app-layout">
      <div className="header-view">
        <AppHeader />
      </div>
      <div className="container-view">
        <div className="sidebar">
          <AppSidebar />
        </div>
        <div className="body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
