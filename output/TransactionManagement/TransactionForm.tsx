import React from 'react';
import { Form, Input, Select, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TransactionService from './services/TransactionService';



interface TransactionFormProps {
  initialValues?: any;
  onSubmit: (values: any) => void;
  onCancel: () => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ initialValues, onSubmit, onCancel }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    try {
      if (initialValues && initialValues.id) {
        await TransactionService.update(initialValues.id, values);
        message.success('Transaction updated successfully');
      } else {
        await TransactionService.create(values);
        message.success('Transaction created successfully');
      }
      onSubmit(values);
      form.resetFields();
    } catch (error) {
      message.error('Failed to save transaction');
    }
  };

  return (
    <div className="transaction-form-container">
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
        onFinish={handleSubmit}
      >
        
        <Form.Item
          name="product_id"
          label="Product ID"
          rules={[{ required: true, message: 'Please input product id!' }]}
          
        >
          
          <Select placeholder="Select product">
            
          </Select>
          
        </Form.Item>
        
        <Form.Item
          name="variant_id"
          label="Variant ID"
          rules={[{ required: true, message: 'Please input variant id!' }]}
          
        >
          
          <Select placeholder="Select variant">
            
          </Select>
          
        </Form.Item>
        
        <Form.Item
          name="number"
          label="Transaction Number"
          rules={[{ required: true, message: 'Please input transaction number!' }]}
          
        >
          
          <Input type="text" placeholder="Enter transaction number (e.g., TXN-2025-001)" />
          
        </Form.Item>
        
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: false, message: 'Please input description!' }]}
          
        >
          
          <Input.TextArea
            placeholder="Enter transaction description"
          />
          
        </Form.Item>
        
        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: 'Please input location!' }]}
          
        >
          
          <Input type="text" placeholder="Enter location" />
          
        </Form.Item>
        
        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true, message: 'Please input amount!' }]}
          
        >
          
          <Input type="number" placeholder="Enter transaction amount" />
          
        </Form.Item>
        
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: 'Please input status!' }]}
          
        >
          
          <Select placeholder="Select status">
            
            <Select.Option value="completed">completed</Select.Option>
            
            <Select.Option value="pending">pending</Select.Option>
            
            <Select.Option value="cancelled">cancelled</Select.Option>
            
          </Select>
          
        </Form.Item>
        
        <Form.Item
          name="transaction_date"
          label="Transaction Date"
          rules={[{ required: true, message: 'Please input transaction date!' }]}
          
        >
          
          <Input type="date" placeholder="Select transaction date" />
          
        </Form.Item>
        
        <Form.Item
          name="periode"
          label="Period"
          rules={[{ required: true, message: 'Please input period!' }]}
          
        >
          
          <Select placeholder="Select period">
            
            <Select.Option value="Q1">Q1</Select.Option>
            
            <Select.Option value="Q2">Q2</Select.Option>
            
            <Select.Option value="Q3">Q3</Select.Option>
            
            <Select.Option value="Q4">Q4</Select.Option>
            
          </Select>
          
        </Form.Item>
        
        <Form.Item
          name="month"
          label="Month"
          rules={[{ required: true, message: 'Please input month!' }]}
          
        >
          
          <Select placeholder="Select month">
            
            <Select.Option value="{'value': 1, 'label': 'January'}">{'value': 1, 'label': 'January'}</Select.Option>
            
            <Select.Option value="{'value': 2, 'label': 'February'}">{'value': 2, 'label': 'February'}</Select.Option>
            
            <Select.Option value="{'value': 3, 'label': 'March'}">{'value': 3, 'label': 'March'}</Select.Option>
            
            <Select.Option value="{'value': 4, 'label': 'April'}">{'value': 4, 'label': 'April'}</Select.Option>
            
            <Select.Option value="{'value': 5, 'label': 'May'}">{'value': 5, 'label': 'May'}</Select.Option>
            
            <Select.Option value="{'value': 6, 'label': 'June'}">{'value': 6, 'label': 'June'}</Select.Option>
            
            <Select.Option value="{'value': 7, 'label': 'July'}">{'value': 7, 'label': 'July'}</Select.Option>
            
            <Select.Option value="{'value': 8, 'label': 'August'}">{'value': 8, 'label': 'August'}</Select.Option>
            
            <Select.Option value="{'value': 9, 'label': 'September'}">{'value': 9, 'label': 'September'}</Select.Option>
            
            <Select.Option value="{'value': 10, 'label': 'October'}">{'value': 10, 'label': 'October'}</Select.Option>
            
            <Select.Option value="{'value': 11, 'label': 'November'}">{'value': 11, 'label': 'November'}</Select.Option>
            
            <Select.Option value="{'value': 12, 'label': 'December'}">{'value': 12, 'label': 'December'}</Select.Option>
            
          </Select>
          
        </Form.Item>
        
        <Form.Item
          name="year"
          label="Year"
          rules={[{ required: true, message: 'Please input year!' }]}
          
        >
          
          <Input type="number" placeholder="Enter year" />
          
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

export default TransactionForm;