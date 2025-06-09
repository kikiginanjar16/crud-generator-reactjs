import React from 'react';
import { Form, Input, Select, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import CostMetricService from './services/CostMetricService';



interface CostMetricFormProps {
  initialValues?: any;
  onSubmit: (values: any) => void;
  onCancel: () => void;
}

const CostMetricForm: React.FC<CostMetricFormProps> = ({ initialValues, onSubmit, onCancel }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    try {
      if (initialValues && initialValues.id) {
        await CostMetricService.update(initialValues.id, values);
        message.success('CostMetric updated successfully');
      } else {
        await CostMetricService.create(values);
        message.success('CostMetric created successfully');
      }
      onSubmit(values);
      form.resetFields();
    } catch (error) {
      message.error('Failed to save costmetric');
    }
  };

  return (
    <div className="costmetric-form-container">
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
          
          <Input type="text" placeholder="Enter product ID" />
          
        </Form.Item>
        
        <Form.Item
          name="year"
          label="Year"
          rules={[{ required: true, message: 'Please input year!' }]}
          
        >
          
          <Input type="number" placeholder="Enter year" />
          
        </Form.Item>
        
        <Form.Item
          name="january"
          label="January"
          rules={[{ required: false, message: 'Please input january!' }]}
          
        >
          
          <Input type="number" placeholder="Enter value for January" />
          
        </Form.Item>
        
        <Form.Item
          name="february"
          label="February"
          rules={[{ required: false, message: 'Please input february!' }]}
          
        >
          
          <Input type="number" placeholder="Enter value for February" />
          
        </Form.Item>
        
        <Form.Item
          name="march"
          label="March"
          rules={[{ required: false, message: 'Please input march!' }]}
          
        >
          
          <Input type="number" placeholder="Enter value for March" />
          
        </Form.Item>
        
        <Form.Item
          name="april"
          label="April"
          rules={[{ required: false, message: 'Please input april!' }]}
          
        >
          
          <Input type="number" placeholder="Enter value for April" />
          
        </Form.Item>
        
        <Form.Item
          name="may"
          label="May"
          rules={[{ required: false, message: 'Please input may!' }]}
          
        >
          
          <Input type="number" placeholder="Enter value for May" />
          
        </Form.Item>
        
        <Form.Item
          name="june"
          label="June"
          rules={[{ required: false, message: 'Please input june!' }]}
          
        >
          
          <Input type="number" placeholder="Enter value for June" />
          
        </Form.Item>
        
        <Form.Item
          name="july"
          label="July"
          rules={[{ required: false, message: 'Please input july!' }]}
          
        >
          
          <Input type="number" placeholder="Enter value for July" />
          
        </Form.Item>
        
        <Form.Item
          name="august"
          label="August"
          rules={[{ required: false, message: 'Please input august!' }]}
          
        >
          
          <Input type="number" placeholder="Enter value for August" />
          
        </Form.Item>
        
        <Form.Item
          name="september"
          label="September"
          rules={[{ required: false, message: 'Please input september!' }]}
          
        >
          
          <Input type="number" placeholder="Enter value for September" />
          
        </Form.Item>
        
        <Form.Item
          name="october"
          label="October"
          rules={[{ required: false, message: 'Please input october!' }]}
          
        >
          
          <Input type="number" placeholder="Enter value for October" />
          
        </Form.Item>
        
        <Form.Item
          name="november"
          label="November"
          rules={[{ required: false, message: 'Please input november!' }]}
          
        >
          
          <Input type="number" placeholder="Enter value for November" />
          
        </Form.Item>
        
        <Form.Item
          name="december"
          label="December"
          rules={[{ required: false, message: 'Please input december!' }]}
          
        >
          
          <Input type="number" placeholder="Enter value for December" />
          
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

export default CostMetricForm;