import React from 'react';
import { Card, Form, Icon, Input, Button } from 'antd';
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="container">
      <section className="content">
        <Card title={'WELCOME ABLE EASTERN'} bordered={false} headStyle={{textAlign:'center', fontSize: 25}} style={{ width: 400 }}>
          <Form onSubmit={() => {}} className="login-form">
        <Form.Item>
            <Input
              defaultValue="admin"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
        </Form.Item>
        <Form.Item>
            <Input
              defaultValue="admin"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
          <div className="form-button">
            <Link to="/home">
              <Button type="primary" htmlType="button" size='large'>
                Log in
              </Button>
            </Link>
          </div>
        </Form.Item>
      </Form>
        </Card>
      </section>
    </div>
  );
}

export default LoginPage;
