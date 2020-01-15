import React from 'react'
import { Table, Divider, Tag, Card, Tabs } from 'antd';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import faker from 'faker'
const { Column } = Table;
const { TabPane } = Tabs;

const levelName = ['ง่าย', 'ปกติ', 'ยาก']
const selectorLV = faker.random.number(2)
const data = [];
const createMock = () => {
  for (let index = 0; index < 20; index++) {
    data.push(
      {
        key: faker.random.number(),
        customName: faker.name.findName(),
        size: faker.random.number(),
        w1: faker.random.number(100),
        w2: faker.random.number(100),
        w3: faker.random.number(100),
        w: [levelName[selectorLV]],
        wc: [levelName[selectorLV]],
        qc: [levelName[selectorLV]],
      }
    )
  }
}

createMock()

const OtherPage = () => {
  return (
    <div className="container" style={{height: 'auto'}}>
      <section className="content" style={{width: 750}}>
      <Card>
        <Link to="/home">
          <Button htmlType="button" size='large' style={{marginRight: 10}}>ย้อนกลับ</Button>
        </Link>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="ลูกค้า" key="1">
          <Link to="/home">
            <Button htmlType="button" type="primary" size='large' style={{marginRight: 10}}>เพิ่มลูกค้า</Button>
          </Link>
              <Table dataSource={data} style={{marginTop: 20}}>
                <Column title="รหัสลูกค้า" dataIndex="key" key="key" />
                <Column title="ชื่อลูกค้า" dataIndex="customName" key="customName" />
                <Column
                  title=""
                  key="action"
                  render={(text, record) => (
                    <span>
                      <a>แก้ไข</a>
                      <Divider type="vertical" />
                      <a>ลบ</a>
                    </span>
                  )}
                />
              </Table>
          </TabPane>
          <TabPane tab="สินค้า" key="2">
          <Link to="/home">
            <Button htmlType="button" type="primary" size='large' style={{marginRight: 10}}>เพิ่มสินค้า</Button>
          </Link>
              <Table dataSource={data} style={{marginTop: 20}}>
                <Column title="รหัสสินค้า" dataIndex="key" key="key" />
                <Column title="ขนาดสินค้า" dataIndex="size" key="size" />
                <Column title="ไม้" dataIndex="w1" key="w1" />
                <Column title="ตะปู" dataIndex="w2" key="w2" />
                <Column title="ลูกเต๋า" dataIndex="w3" key="w3" />
                <Column
                  title="ใส่ไม้"
                  dataIndex="w"
                  key="w"
                  render={tags => (
                    <span>
                      {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                          {tag}
                        </Tag>
                      ))}
                    </span>
                  )}
                />
                <Column
                  title="ประกอบ"
                  dataIndex="wc"
                  key="wc"
                  render={tags => (
                    <span>
                      {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                          {tag}
                        </Tag>
                      ))}
                    </span>
                  )}
                />
                <Column
                  title="QC"
                  dataIndex="qc"
                  key="qc"
                  render={tags => (
                    <span>
                      {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                          {tag}
                        </Tag>
                      ))}
                    </span>
                  )}
                />
                <Column
                  title=""
                  key="action"
                  render={(text, record) => (
                    <span>
                      <a>แก้ไข</a>
                      <Divider type="vertical" />
                      <a>ลบ</a>
                    </span>
                  )}
                />
              </Table>
          </TabPane>
        </Tabs>
        </Card>
      </section>
    </div>
  )
}

export default OtherPage