import React from 'react'
import { Card, Calendar, Badge } from 'antd'
import { Button } from 'antd';
import { Link } from "react-router-dom";

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
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
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