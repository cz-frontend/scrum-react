import { Space } from 'antd';
import { Link } from 'react-router-dom';
/**
 * 项目列表-列配置
 */
export const projectColumnConf = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link>{text}</Link>,
  },
  {
    title: '部门',
    dataIndex: 'work',
    key: 'age',
  },
  {
    title: '负责人',
    dataIndex: 'role',
    key: 'age',
  },
  {
    title: '创建时间',
    dataIndex: 'createDate',
    key: 'age',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Link>编辑</Link>
        <Link>删除</Link>
      </Space>
    ),
  },
];
