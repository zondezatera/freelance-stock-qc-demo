import React from 'react'
import { Card, Calendar, Badge, Popover } from 'antd'
import { Button } from 'antd';
import { Link } from "react-router-dom";
import faker from 'faker'

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'error', content: 'งานเปลี่ยนแปลงไม่ได้' },
      ];
      break;
    case 10:
      listData = [
        { type: 'success', content: 'งานเปลี่ยนแปลงได้' },
      ];
      break;
    case 15:
      listData = [
        { type: 'success', content: 'งานเปลี่ยนแปลงได้' },
      ];
      break;
    default:
  }
  return listData || [];
}

const dateCellRender = (value) => {
  const listData = getListData(value);
  const content = (
    <div>
      <p>เลขที่ PO: {faker.random.number()}</p>
      <p>ชื่อลูกค้า: {faker.name.findName()}</p>
      <p>จำนวน: {faker.random.number(100)}</p>
    </div>
  );
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Popover content={content} title="รายละเอียด" trigger="hover">
            <Badge status={item.type} text={item.content} />
          </Popover>
        </li>
      ))}
    </ul>
  );
}

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
}

const monthCellRender = (value) =>{
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}


const CalendarPage = () => {
  return (
    <div className="container" style={{width: 700, height: 'auto'}}>
      <Card>
        <Link to="/home">
          <Button htmlType="button" size='large' style={{marginRight: 10}}>ย้อนกลับ</Button>
        </Link>
        <Link to="/daily">
          <Button type="primary" htmlType="button" size='large'>วันปัจจุบัน</Button>
        </Link>
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
      </Card>
    </div>
  )
}

export default CalendarPage