import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Divider } from 'antd';

// 校验规则
const loginRules = {
  username: [
    {
      required: true,
      message: '请您输入登陆账号!',
    },
  ],
  password: [
    {
      required: true,
      message: '请您输入登陆密码',
    },
  ],
};

export default function Login() {
  /**
   * 登陆方法
   * @returns object 账号信息
   */
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="login-view">
      <div className="container">
        <div className="logo"></div>
        <div className="form-controls">
          <Form name="basic" onFinish={onFinish} autoComplete="off">
            <Form.Item name="username" rules={loginRules.username}>
              <Input placeholder="账 号：" />
            </Form.Item>

            <Form.Item name="password" rules={loginRules.password}>
              <Input.Password placeholder="密 码：" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                进 入
              </Button>
            </Form.Item>
          </Form>
          <br />
          <Divider orientation="center" plain>
            <Link>没有账号？注册新账号</Link>
          </Divider>
        </div>
      </div>
    </div>
  );
}
