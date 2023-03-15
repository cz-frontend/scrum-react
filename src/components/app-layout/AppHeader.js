import React from 'react';
import './index.scss';
import AppLogo from './AppLogo';
import { Link } from 'react-router-dom';

export default function AppHeader() {
  console.log(1);
  return (
    <div id="header">
      <div className="left">
        <AppLogo />
        <h1 className="app-name">Jira Software</h1>
      </div>
      <div className="right">
        <Link>退出登录</Link>
      </div>
    </div>
  );
}
