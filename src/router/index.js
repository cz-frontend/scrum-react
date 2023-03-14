import { Navigate } from 'react-router-dom';

import Epic from '../views/epic';
import Kanban from '../views/kanban';
import Project from '../views/project';
import Login from '../views/login';

/**
 * 基础路由配置
 */
const routes = [
  {
    path: '/',
    element: <Navigate to="/project" />,
  },
  // 项目
  {
    path: '/project',
    element: <Project />,
  },
  // 看板
  {
    path: '/kanban',
    element: <Kanban />,
  },

  // 任务
  {
    path: '/epic',
    element: <Epic />,
  },
  // 登陆
  {
    path: '/login',
    element: <Login />,
  },
];

export default routes;
