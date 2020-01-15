import React from 'react'
import {
  Form,
  Input,
  Radio,
  DatePicker,
  Select
} from 'antd';
import faker from 'faker'

const { Option } = Select;
const NormalFieldSet = () => {
  const defaultC = faker.random.number()
  return (
    <div>
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
            <Form.Item label="ชั้น"><Input style={{width: 50}} defaultValue={Math.floor(Math.random() * 100) + 1} /></Form.Item>
            <Form.Item label="วันที่ส่งของ"><DatePicker style={{width: 200}} /></Form.Item>
            <Form.Item label="เงื่อนไข">
              <Radio.Group defaultValue="yes">
                <Radio value="yes"><span style={{color: '#43a047'}}>สามารถเปลี่ยนแปลงได้</span></Radio>
                <Radio value="no"><span style={{color: '#d32f2f'}}>ไม่สามารถเปลี่ยนแปลงได้</span></Radio>
              </Radio.Group>
            </Form.Item>
    </div>
  )
}

export default NormalFieldSet