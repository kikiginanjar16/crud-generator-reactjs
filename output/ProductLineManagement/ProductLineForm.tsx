import React from 'react';
import { Form, Input, Select, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ProductLineService from './services/ProductLineService';



interface ProductLineFormProps {
  initialValues?: any;
  onSubmit: (values: any) => void;
  onCancel: () => void;
}

const ProductLineForm: React.FC<ProductLineFormProps> = ({ initialValues, onSubmit, onCancel }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    try {
      if (initialValues && initialValues.id) {
        await ProductLineService.update(initialValues.id, values);
        message.success('ProductLine updated successfully');
      } else {
        await ProductLineService.create(values);
        message.success('ProductLine created successfully');
      }
      onSubmit(values);
      form.resetFields();
    } catch (error) {
      message.error('Failed to save productline');
    }
  };

  return (
    <div className="productline-form-container">
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
        onFinish={handleSubmit}
      >
        
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input name!' }]}
          
        >
          
          <Input type="text" placeholder="Enter product line name" />
          
        </Form.Item>
        
        <Form.Item
          name="code"
          label="Code"
          rules={[{ required: true, message: 'Please input code!' }]}
          
        >
          
          <Input type="text" placeholder="Enter unique code" />
          
        </Form.Item>
        
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: false, message: 'Please input description!' }]}
          
        >
          
          <Input.TextArea
            placeholder="Enter product line description"
          />
          
        </Form.Item>
        
        <Form.Item>
          <div className='flex items-center justify-end'>
          <Button style={{ marginRight: 8 }} onClick={onCancel}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            {initialValues ? 'Update' : 'Create'}
          </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductLineForm;