import React from 'react'
import {
  Card,
  Form,
  Input,
  Radio,
  Button,
  DatePicker,
  Select
} from 'antd';
import { Link } from "react-router-dom";
import faker from 'faker'

const { Option } = Select;

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
  const defaultC = faker.random.number()
  const defaultP = faker.random.number()
  return (
    <div className="container" style={{height: 'auto'}}>
      <section className="content">
        <Card title="สร้าง PO" style={{width:500}}>
          <Form {...formItemLayout}>
            <Form.Item label="วันที่สร้าง PO"><DatePicker style={{width: 200}} /></Form.Item>
            <Form.Item label="เลขที่ PO"><Input style={{width: 200}} /></Form.Item>
            <Form.Item label="รหัสลูกค้า">
              <Select style={{width: 200}} defaultValue={defaultC}>
                <Option value={defaultC}>{defaultC}</Option>
                <Option value={faker.random.number()}>{faker.random.number()}</Option>
              </Select>
            </Form.Item>
            <Form.Item label="ชื่อลูกค้า">
              <Input style={{width: 200}} defaultValue={faker.name.findName()} />
            </Form.Item>
            <Form.Item label="รหัสสินค้า">
              <Select style={{width: 200}} defaultValue={defaultP}>
                <Option value={defaultP}>{defaultP}</Option>
                <Option value={faker.random.number()}>{faker.random.number()}</Option>
              </Select>
            </Form.Item>
            <Form.Item label="ชื่อสินค้า">
              <Input style={{width: 200}} defaultValue={faker.commerce.productName()} />
            </Form.Item>
            <Form.Item label="ชั้น"><Input style={{width: 50}} defaultValue={Math.floor(Math.random() * 100) + 1} /></Form.Item>
            <Form.Item label="วันที่ส่งของ"><DatePicker style={{width: 200}} /></Form.Item>
            <Form.Item label="เงื่อนไข">
              <Radio.Group defaultValue="yes">
                <Radio value="yes"><span style={{color: '#43a047'}}>สามารถเปลี่ยนแปลงได้</span></Radio>
                <Radio value="no"><span style={{color: '#d32f2f'}}>ไม่สามารถเปลี่ยนแปลงได้</span></Radio>
              </Radio.Group>
            </Form.Item>
            <Card style={{ marginTop: 16, marginBottom: 20 }} type="inner" title="คำนวณวัตถุดิบ">
             <Form {...formItemLayout}>
              <Form.Item label="ไม้">
                <Input addonAfter="ตัว" defaultValue={Math.floor(Math.random() * 100) + 1} />
                </Form.Item>
              <Form.Item label="ตะปู">
                <Input addonAfter="ตัว" defaultValue={Math.floor(Math.random() * 100) + 1} />
                </Form.Item>
              <Form.Item label="ลูกเต๋า">
                <Input addonAfter="ตัว" defaultValue={Math.floor(Math.random() * 100) + 1} />
              </Form.Item>
              <Form.Item label="ใส่ไม้">
                <Radio.Group defaultValue="w_easy">
                  <Radio value="w_easy">ง่าย</Radio>
                  <Radio value="w_normal">ปกติ</Radio>
                  <Radio value="w_hard">ยาก</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="ประกอบไม้">
                <Radio.Group defaultValue="wh_easy">
                  <Radio value="wh_easy">ง่าย</Radio>
                  <Radio value="wh_normal">ปกติ</Radio>
                  <Radio value="wh_hard">ยาก</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="QC">
                <Radio.Group defaultValue="qc_easy">
                  <Radio value="qc_easy">ง่าย</Radio>
                  <Radio value="qc_normal">ปกติ</Radio>
                  <Radio value="qc_hard">ยาก</Radio>
                </Radio.Group>
              </Form.Item>
              </Form>
            </Card>
            <div className="form-button">
              <Link to="/home">
                <Button type="primary" htmlType="button" size='large' style={{marginRight: 10}}>ยืนยัน</Button>
              </Link>
              <Link to="/home">
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