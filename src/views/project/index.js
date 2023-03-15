import React from 'react';
import { roleComstant, projectListData } from '@/comstants';
import { projectColumnConf } from './config'
import TitleBar from '@/components/title-bar';
import { SearchOutlined, Loading3QuartersOutlined } from '@ant-design/icons';
import { Row, Col, Button, Table, Form, Input, Select } from 'antd';

export default function Project() {
  /**
   * 查询方法
   */
  const dataFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="project-view">
      <section>
        <TitleBar title="项目列表">
          <div>创建项目</div>
        </TitleBar>
      </section>
      <section>
        <Form onFinish={dataFormSubmit}>
          <Row>
            <Col span={20}>
              <Row gutter={30}>
                <Col span={6}>
                  <Form.Item name="code">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="负责人" name="role">
                    <Select options={roleComstant} />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={4} align="right">
              <Button icon={<Loading3QuartersOutlined />} htmlType="reset">
                重 置
              </Button>
              <Button
                type="primary"
                icon={<SearchOutlined />}
                htmlType="submit"
              >
                搜 索
              </Button>
            </Col>
          </Row>
        </Form>
      </section>
      <section>
        <Table columns={projectColumnConf} dataSource={projectListData} />
      </section>
    </div>
  );
}
