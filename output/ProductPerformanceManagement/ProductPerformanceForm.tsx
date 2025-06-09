import React from 'react';
import { Form, Input, Select, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ProductPerformanceService from './services/ProductPerformanceService';



interface ProductPerformanceFormProps {
  initialValues?: any;
  onSubmit: (values: any) => void;
  onCancel: () => void;
}

const ProductPerformanceForm: React.FC<ProductPerformanceFormProps> = ({ initialValues, onSubmit, onCancel }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    try {
      if (initialValues && initialValues.id) {
        await ProductPerformanceService.update(initialValues.id, values);
        message.success('ProductPerformance updated successfully');
      } else {
        await ProductPerformanceService.create(values);
        message.success('ProductPerformance created successfully');
      }
      onSubmit(values);
      form.resetFields();
    } catch (error) {
      message.error('Failed to save productperformance');
    }
  };

  return (
    <div className="productperformance-form-container">
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
          name="year"
          label="Year"
          rules={[{ required: true, message: 'Please input year!' }]}
          
        >
          
          <Input type="number" placeholder="Enter year" />
          
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
          name="brand_awareness"
          label="Brand Awareness"
          rules={[{ required: false, message: 'Please input brand awareness!' }]}
          
        >
          
          <Input type="number" placeholder="Enter brand awareness score (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="brand_perception"
          label="Brand Perception"
          rules={[{ required: false, message: 'Please input brand perception!' }]}
          
        >
          
          <Input type="number" placeholder="Enter brand perception score (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="brand_image"
          label="Brand Image"
          rules={[{ required: false, message: 'Please input brand image!' }]}
          
        >
          
          <Input type="number" placeholder="Enter brand image score (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="brand_purchase_intention"
          label="Brand Purchase Intention"
          rules={[{ required: false, message: 'Please input brand purchase intention!' }]}
          
        >
          
          <Input type="number" placeholder="Enter purchase intention score (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="brand_loyalty"
          label="Brand Loyalty"
          rules={[{ required: false, message: 'Please input brand loyalty!' }]}
          
        >
          
          <Input type="number" placeholder="Enter brand loyalty score (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="brand_equity"
          label="Brand Equity"
          rules={[{ required: false, message: 'Please input brand equity!' }]}
          
        >
          
          <Input type="number" placeholder="Enter brand equity score (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="customer_satisfaction_index"
          label="Customer Satisfaction Index"
          rules={[{ required: false, message: 'Please input customer satisfaction index!' }]}
          
        >
          
          <Input type="number" placeholder="Enter satisfaction index (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="customer_loyalty_index"
          label="Customer Loyalty Index"
          rules={[{ required: false, message: 'Please input customer loyalty index!' }]}
          
        >
          
          <Input type="number" placeholder="Enter loyalty index (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="churn_rate"
          label="Churn Rate (%)"
          rules={[{ required: false, message: 'Please input churn rate (%)!' }]}
          
        >
          
          <Input type="number" placeholder="Enter churn rate (%)" />
          
        </Form.Item>
        
        <Form.Item
          name="net_promoter_score"
          label="Net Promoter Score"
          rules={[{ required: false, message: 'Please input net promoter score!' }]}
          
        >
          
          <Input type="number" placeholder="Enter NPS (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="customer_feedback_score"
          label="Customer Feedback Score"
          rules={[{ required: false, message: 'Please input customer feedback score!' }]}
          
        >
          
          <Input type="number" placeholder="Enter feedback score (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="net_profit"
          label="Net Profit"
          rules={[{ required: false, message: 'Please input net profit!' }]}
          
        >
          
          <Input type="number" placeholder="Enter net profit" />
          
        </Form.Item>
        
        <Form.Item
          name="ebitda"
          label="EBITDA"
          rules={[{ required: false, message: 'Please input ebitda!' }]}
          
        >
          
          <Input type="number" placeholder="Enter EBITDA" />
          
        </Form.Item>
        
        <Form.Item
          name="net_profit_margin"
          label="Net Profit Margin (%)"
          rules={[{ required: false, message: 'Please input net profit margin (%)!' }]}
          
        >
          
          <Input type="number" placeholder="Enter net profit margin (%)" />
          
        </Form.Item>
        
        <Form.Item
          name="current_ratio"
          label="Current Ratio"
          rules={[{ required: false, message: 'Please input current ratio!' }]}
          
        >
          
          <Input type="number" placeholder="Enter current ratio" />
          
        </Form.Item>
        
        <Form.Item
          name="debt_to_equity_ratio"
          label="Debt to Equity Ratio"
          rules={[{ required: false, message: 'Please input debt to equity ratio!' }]}
          
        >
          
          <Input type="number" placeholder="Enter debt to equity ratio" />
          
        </Form.Item>
        
        <Form.Item
          name="return_on_equity"
          label="Return on Equity (%)"
          rules={[{ required: false, message: 'Please input return on equity (%)!' }]}
          
        >
          
          <Input type="number" placeholder="Enter return on equity (%)" />
          
        </Form.Item>
        
        <Form.Item
          name="revenue_achievement"
          label="Revenue Achievement"
          rules={[{ required: false, message: 'Please input revenue achievement!' }]}
          
        >
          
          <Input type="number" placeholder="Enter revenue achievement" />
          
        </Form.Item>
        
        <Form.Item
          name="revenue_growth"
          label="Revenue Growth (%)"
          rules={[{ required: false, message: 'Please input revenue growth (%)!' }]}
          
        >
          
          <Input type="number" placeholder="Enter revenue growth (%)" />
          
        </Form.Item>
        
        <Form.Item
          name="profit_margin"
          label="Profit Margin (%)"
          rules={[{ required: false, message: 'Please input profit margin (%)!' }]}
          
        >
          
          <Input type="number" placeholder="Enter profit margin (%)" />
          
        </Form.Item>
        
        <Form.Item
          name="roi"
          label="ROI (%)"
          rules={[{ required: false, message: 'Please input roi (%)!' }]}
          
        >
          
          <Input type="number" placeholder="Enter ROI (%)" />
          
        </Form.Item>
        
        <Form.Item
          name="ir2c"
          label="IR2C (%)"
          rules={[{ required: false, message: 'Please input ir2c (%)!' }]}
          
        >
          
          <Input type="number" placeholder="Enter IR2C (%)" />
          
        </Form.Item>
        
        <Form.Item
          name="pricing_evaluation"
          label="Pricing Evaluation"
          rules={[{ required: false, message: 'Please input pricing evaluation!' }]}
          
        >
          
          <Input type="number" placeholder="Enter pricing evaluation score (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="costing_evaluation"
          label="Costing Evaluation"
          rules={[{ required: false, message: 'Please input costing evaluation!' }]}
          
        >
          
          <Input type="number" placeholder="Enter costing evaluation score (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="slg_achievement"
          label="SLG Achievement"
          rules={[{ required: false, message: 'Please input slg achievement!' }]}
          
        >
          
          <Input type="number" placeholder="Enter SLG achievement score (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="sla_achievement"
          label="SLA Achievement"
          rules={[{ required: false, message: 'Please input sla achievement!' }]}
          
        >
          
          <Input type="number" placeholder="Enter SLA achievement score (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="technology_positioning"
          label="Technology Positioning"
          rules={[{ required: false, message: 'Please input technology positioning!' }]}
          
        >
          
          <Input type="number" placeholder="Enter technology positioning score (0-100)" />
          
        </Form.Item>
        
        <Form.Item
          name="market_share_percentage"
          label="Market Share (%)"
          rules={[{ required: false, message: 'Please input market share (%)!' }]}
          
        >
          
          <Input type="number" placeholder="Enter market share (%)" />
          
        </Form.Item>
        
        <Form.Item
          name="market_share_growth"
          label="Market Share Growth (%)"
          rules={[{ required: false, message: 'Please input market share growth (%)!' }]}
          
        >
          
          <Input type="number" placeholder="Enter market share growth (%)" />
          
        </Form.Item>
        
        <Form.Item
          name="revenue_share"
          label="Revenue Share (%)"
          rules={[{ required: false, message: 'Please input revenue share (%)!' }]}
          
        >
          
          <Input type="number" placeholder="Enter revenue share (%)" />
          
        </Form.Item>
        
        <Form.Item
          name="revenue_share_growth"
          label="Revenue Share Growth (%)"
          rules={[{ required: false, message: 'Please input revenue share growth (%)!' }]}
          
        >
          
          <Input type="number" placeholder="Enter revenue share growth (%)" />
          
        </Form.Item>
        
        <Form.Item
          name="bcg_matrix_position"
          label="BCG Matrix Position"
          rules={[{ required: false, message: 'Please input bcg matrix position!' }]}
          
        >
          
          <Select placeholder="Select BCG matrix position">
            
            <Select.Option value="Star">Star</Select.Option>
            
            <Select.Option value="Cash Cow">Cash Cow</Select.Option>
            
            <Select.Option value="Question Mark">Question Mark</Select.Option>
            
            <Select.Option value="Dog">Dog</Select.Option>
            
          </Select>
          
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

export default ProductPerformanceForm;