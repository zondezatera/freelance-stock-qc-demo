import React from 'react';
import { Card, Form, Icon, Input, Button } from 'antd';


const App = () => {
  const title = 'Welcome ABLE EASTERN'
  return (
    <div className="container">
      <section className="content">
        <Card title={title.toUpperCase()} bordered={false} headStyle={{textAlign:'center', fontSize: 25}} style={{ width: 400 }}>
          <Form onSubmit={() =>{}} className="login-form">
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size='large' className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
        </Card>
      </section>
    </div>
  );
}

export default App;
