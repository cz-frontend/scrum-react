import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="app-layout">
      <div className="header-view"></div>
      <div className="container-view">
        <div className="sidebar">sidebar</div>
        <div className="body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
