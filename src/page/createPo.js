import React from 'react'
import {
  Card,
  Form,
  Button,
} from 'antd';
import { Link } from "react-router-dom";
import NormalFieldSet from '../features/normalFieldSet'
import WrappedDynamicFieldSet from '../features/dynamicFieldSet'
import TotalFieldSet from '../features/totalFieldSet'

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
    <div className="container" style={{height: 'auto'}}>
      <section className="content">
        <Card title="สร้าง PO" style={{width:500}}>
          <Form {...formItemLayout}>
            <NormalFieldSet />
            <WrappedDynamicFieldSet />
            <TotalFieldSet />
            <div className="form-button">
              <Link to="/home">
                <Button type="primary" htmlType="button" size='large' style={{marginRight: 10}}>ยืนยัน</Button>
                <Button htmlType="button" size='large'>ย้อนกลับ</Button>
              </Link>
            </div>
          </Form>
        </Card>
      </section>
    </div>
  )
}

export default CreatePoPage