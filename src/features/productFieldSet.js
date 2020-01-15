import React from 'react'
import {
  Form,
  Input,
  Radio,
  Select,
  Collapse
} from 'antd';
import faker from 'faker'

const { Panel } = Collapse;
const { Option } = Select;

const ProductFieldSet = (props) => {
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
  const defaultP = faker.random.number()

  return (
    <Collapse style={{ marginTop: 16, marginBottom: 20, width: 400 }} defaultActiveKey={[props.keyItem]}>
      <Panel showArrow={false} extra={props.children} forceRender={true} key={props.keyItem}>
      <Form {...formItemLayout}>
      <Form.Item label="รหัสสินค้า">
              <Select style={{width: 200}} defaultValue={defaultP}>
                <Option value={defaultP}>{defaultP}</Option>
                <Option value={faker.random.number()}>{faker.random.number()}</Option>
              </Select>
            </Form.Item>
            <Form.Item label="ชื่อสินค้า">
              <Input style={{width: 200}} defaultValue={faker.commerce.productName()} />
            </Form.Item>
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
    </Panel>
    </Collapse>
  )
}

export default ProductFieldSet