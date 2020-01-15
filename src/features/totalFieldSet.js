import React from 'react'
import { Card, Form, Input} from 'antd';

const TotalFieldSet = () => {
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
    <Card style={{ marginTop: 16, marginBottom: 20 }} type="inner" title="คำนวณวัตถุดิบ">
      <Form {...formItemLayout}>
      <Form.Item label="ไม้" style={{display: 'inline-block', width: 125, margin: 3}}>
        <Input addonAfter="ตัว" defaultValue={Math.floor(Math.random() * 100) + 1} />
        </Form.Item>
      <Form.Item label="ตะปู" style={{display: 'inline-block', width: 125, margin: 3}}>
        <Input addonAfter="ตัว" defaultValue={Math.floor(Math.random() * 100) + 1} />
        </Form.Item>
      <Form.Item label="ลูกเต๋า" style={{display: 'inline-block', width: 125, margin: 3}}>
        <Input addonAfter="ตัว" defaultValue={Math.floor(Math.random() * 100) + 1} />
      </Form.Item>
      </Form>
    </Card>
  )
}

export default TotalFieldSet