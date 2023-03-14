import { Navigate } from 'react-router-dom';

import AppLayout from '@/components/app-layout';
import Project from '@/views/project';
import Kanban from '@/views/kanban';
import Login from '@/views/login';
import Epic from '@/views/epic';

/**
 * 基础路由配置
 */
const routes = [
  {
    path: '/',
    element: <Navigate to="/project" />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      // 项目
      {
        path: 'project',
        element: <Project />,
      },
      // 看板
      {
        path: 'kanban',
        element: <Kanban />,
      },

      // 任务
      {
        path: 'epic',
        element: <Epic />,
      },
    ],
  },

  // 登陆
  {
    path: '/login',
    element: <Login />,
  },
];

export default routes;
