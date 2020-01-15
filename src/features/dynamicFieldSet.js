import React, { Component } from 'react'
import { Form, Card, Icon, Button } from 'antd';
import ProductFieldSet from './productFieldSet'

let id = 0;

class DynamicFieldSet extends Component {

  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };
  
  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <Form.Item {...formItemLayout} required={false}
        key={k}>
        <ProductFieldSet keyItem={k}>
          {keys.length > 1 ? (
            <Icon className="dynamic-delete-button" type="minus-circle-o" style={{position: 'absolute', top: 5, right: 10}} onClick={() => this.remove(k)}/>) : null}
        </ProductFieldSet>
      </Form.Item>
    ));
    return (
      <Form onSubmit={this.handleSubmit}>
        <Card style={{ marginTop: 16, marginBottom: 20 }} type="inner" title="กลุ่มสินค้า">
        {formItems}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> เพิ่มสินค้า
          </Button>
        </Form.Item>
        </Card>
      </Form>
    );
  }
}

const WrappedDynamicFieldSet = Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet);

export default WrappedDynamicFieldSet
