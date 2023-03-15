import { Popconfirm, Space } from 'antd';
import { Link } from 'react-router-dom';

/**
 * 删除方法
 * @param {} record
 */
const deleteHandler = (record) => {
  alert(`删除成功，你删除的是${record.name}`);
};

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
        <Link to={`/operation-project/${record.key}`}>编辑</Link>
        <Popconfirm
          title="确定要删除该条数据吗？"
          onConfirm={() => deleteHandler(record)}
        >
          <Link>删除</Link>
        </Popconfirm>
      </Space>
    ),
  },
];
