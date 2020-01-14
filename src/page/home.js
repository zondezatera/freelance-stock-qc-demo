import React from 'react'
import { Card, Col, Row, Icon, Button } from 'antd';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <section className="content">
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={false} style={{width: 300}}>
            <div style={{textAlign: 'center'}}>
              <Icon type="fund" style={{ fontSize: '60px', display: 'block', paddingBottom: 30 }} />
              <Link to="/createPo">
                <Button type="primary" htmlType="button" size='large'>
                  สร้าง PO
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} style={{width: 300}}>
            <div style={{textAlign: 'center'}}>
              <Icon type="calendar" style={{ fontSize: '60px', display: 'block', paddingBottom: 30 }} />
              <Link to="/calendar">
                <Button type="primary" htmlType="button" size='large'>
                  ปฏิทิน
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} style={{width: 300}}>
            <div style={{textAlign: 'center'}}>
              <Icon type="appstore" style={{ fontSize: '60px', display: 'block', paddingBottom: 30 }} />
              <Link to="/other">
                <Button type="primary" htmlType="button" size='large'>
                  Other
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
      </section>
    </div>
  )
}

export default HomePage
