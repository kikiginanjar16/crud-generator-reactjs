import React from 'react';
import { Form, Input, Select, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ExpenseService from './services/ExpenseService';



interface ExpenseFormProps {
  initialValues?: any;
  onSubmit: (values: any) => void;
  onCancel: () => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ initialValues, onSubmit, onCancel }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    try {
      if (initialValues && initialValues.id) {
        await ExpenseService.update(initialValues.id, values);
        message.success('Expense updated successfully');
      } else {
        await ExpenseService.create(values);
        message.success('Expense created successfully');
      }
      onSubmit(values);
      form.resetFields();
    } catch (error) {
      message.error('Failed to save expense');
    }
  };

  return (
    <div className="expense-form-container">
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
          name="category"
          label="Category"
          rules={[{ required: true, message: 'Please input category!' }]}
          
        >
          
          <Select placeholder="Select category">
            
            <Select.Option value="Marketing">Marketing</Select.Option>
            
            <Select.Option value="Operations">Operations</Select.Option>
            
            <Select.Option value="R&D">R&D</Select.Option>
            
            <Select.Option value="Logistics">Logistics</Select.Option>
            
            <Select.Option value="Other">Other</Select.Option>
            
          </Select>
          
        </Form.Item>
        
        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true, message: 'Please input amount!' }]}
          
        >
          
          <Input type="number" placeholder="Enter expense amount" />
          
        </Form.Item>
        
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: false, message: 'Please input description!' }]}
          
        >
          
          <Input.TextArea
            placeholder="Enter expense description"
          />
          
        </Form.Item>
        
        <Form.Item
          name="expense_date"
          label="Expense Date"
          rules={[{ required: true, message: 'Please input expense date!' }]}
          
        >
          
          <Input type="date" placeholder="Select expense date" />
          
        </Form.Item>
        
        <Form.Item
          name="vendor"
          label="Vendor"
          rules={[{ required: true, message: 'Please input vendor!' }]}
          
        >
          
          <Input type="text" placeholder="Enter vendor name" />
          
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

export default ExpenseForm;