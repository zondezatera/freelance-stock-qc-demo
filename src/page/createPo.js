import React from 'react'
import {
  Card,
  Form,
  Input,
  Radio,
  Icon,
  Select,
  Button,
  AutoComplete,
} from 'antd';
import { Link } from "react-router-dom";

const CreatePoPage = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  return (
    <div className="container">
      <section className="content">
        <Card title="Create PO" style={{width: 450}}>
          <Form {...formItemLayout} onSubmit={() => {}}>
            <Form.Item label="PO Date"><Input /></Form.Item>
            <Form.Item label="PO Id"><Input /></Form.Item>
            <Form.Item label="Customer"><Input /></Form.Item>
            <Form.Item label="Customer name"><Input /></Form.Item>
            <Form.Item label="Product Id"><Input /></Form.Item>
            <Form.Item label="Product name"><Input /></Form.Item>
            <Form.Item label="Layer"><Input /></Form.Item>
            <Form.Item label="Date of delivery"><Input /></Form.Item>
            <Form.Item label="Condition">
              <Radio.Group>
                <Radio value="yes">No Fix</Radio>
                <Radio value="no">Fix</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
          <div className="form-button">
            <Link to="/home">
              <Button type="primary" htmlType="button" size='large'>
                Submit
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default CreatePoPage