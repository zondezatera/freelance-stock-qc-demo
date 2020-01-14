import React from 'react'
import { Table, Card } from 'antd';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import faker from 'faker'

const { Column } = Table;

const typeName = ['change-section', 'fix-section']
const data = [
  {'time': '8:00', id: faker.random.number()},
  {'time': '9:00', id: faker.random.number()},
  {'time': '10:00', id: faker.random.number()},
  {'time': '11:00', id: faker.random.number()},
  {'time': '12:00', id: faker.random.number()},
  {'time': '13:00', id: faker.random.number()},
  {'time': '14:00', id: faker.random.number()},
  {'time': '15:00', id: faker.random.number()},
  {'time': '16:00', id: faker.random.number()},
  {'time': '17:00', id: faker.random.number()},
  {'time': '18:00', id: faker.random.number()},
  {'time': '19:00', id: faker.random.number()},
  {'time': '20:00', id: faker.random.number()},
  {'time': '21:00', id: faker.random.number()},
];

const DailyPage = () => {
  return (
    <div className="container" style={{height: 'auto'}}>
      <section className="content" style={{width: 500}}>
        <Card>
          <Link to="/home">
            <Button htmlType="button" size='large' style={{marginRight: 10}}>ย้อนกลับ</Button>
          </Link>
          <Table dataSource={data} style={{marginTop: 20}}>
            <Column title="เวลา" dataIndex="time" key="time" />
            <Column
              className={typeName[faker.random.number(1)]}
              title="เลข PO"
              dataIndex="id"  
              key="id" 
            />
          </Table>
        </Card>
      </section>
    </div>
  )
}

export default DailyPage