import React, { useEffect, useState } from 'react';
import { Table, Button, Image } from 'antd';
import ProductPerformanceService from './services/ProductPerformanceService';


interface ProductPerformanceListProps {
  onEdit: (record: any) => void;
  onDelete: (id: string) => void;
  data: any[];
  setData: (data: any[]) => void;
}

const ProductPerformanceList: React.FC<ProductPerformanceListProps> = ({ onEdit, onDelete, data, setData }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductPerformanceService.getAll();
        setData(response);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    if (!data.length) {
      fetchData();
    }
  }, [data, setData]);

  const columns = [
    
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      
    },
    
    {
      title: 'Product ID',
      dataIndex: 'product_id',
      key: 'product_id',
      
    },
    
    {
      title: 'Period',
      dataIndex: 'periode',
      key: 'periode',
      
    },
    
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      
    },
    
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
      
    },
    
    {
      title: 'Brand Awareness',
      dataIndex: 'brand_awareness',
      key: 'brand_awareness',
      
    },
    
    {
      title: 'Brand Perception',
      dataIndex: 'brand_perception',
      key: 'brand_perception',
      
    },
    
    {
      title: 'Brand Image',
      dataIndex: 'brand_image',
      key: 'brand_image',
      
    },
    
    {
      title: 'Brand Purchase Intention',
      dataIndex: 'brand_purchase_intention',
      key: 'brand_purchase_intention',
      
    },
    
    {
      title: 'Brand Loyalty',
      dataIndex: 'brand_loyalty',
      key: 'brand_loyalty',
      
    },
    
    {
      title: 'Brand Equity',
      dataIndex: 'brand_equity',
      key: 'brand_equity',
      
    },
    
    {
      title: 'Customer Satisfaction Index',
      dataIndex: 'customer_satisfaction_index',
      key: 'customer_satisfaction_index',
      
    },
    
    {
      title: 'Customer Loyalty Index',
      dataIndex: 'customer_loyalty_index',
      key: 'customer_loyalty_index',
      
    },
    
    {
      title: 'Churn Rate (%)',
      dataIndex: 'churn_rate',
      key: 'churn_rate',
      
    },
    
    {
      title: 'Net Promoter Score',
      dataIndex: 'net_promoter_score',
      key: 'net_promoter_score',
      
    },
    
    {
      title: 'Customer Feedback Score',
      dataIndex: 'customer_feedback_score',
      key: 'customer_feedback_score',
      
    },
    
    {
      title: 'Net Profit',
      dataIndex: 'net_profit',
      key: 'net_profit',
      
    },
    
    {
      title: 'EBITDA',
      dataIndex: 'ebitda',
      key: 'ebitda',
      
    },
    
    {
      title: 'Net Profit Margin (%)',
      dataIndex: 'net_profit_margin',
      key: 'net_profit_margin',
      
    },
    
    {
      title: 'Current Ratio',
      dataIndex: 'current_ratio',
      key: 'current_ratio',
      
    },
    
    {
      title: 'Debt to Equity Ratio',
      dataIndex: 'debt_to_equity_ratio',
      key: 'debt_to_equity_ratio',
      
    },
    
    {
      title: 'Return on Equity (%)',
      dataIndex: 'return_on_equity',
      key: 'return_on_equity',
      
    },
    
    {
      title: 'Revenue Achievement',
      dataIndex: 'revenue_achievement',
      key: 'revenue_achievement',
      
    },
    
    {
      title: 'Revenue Growth (%)',
      dataIndex: 'revenue_growth',
      key: 'revenue_growth',
      
    },
    
    {
      title: 'Profit Margin (%)',
      dataIndex: 'profit_margin',
      key: 'profit_margin',
      
    },
    
    {
      title: 'ROI (%)',
      dataIndex: 'roi',
      key: 'roi',
      
    },
    
    {
      title: 'IR2C (%)',
      dataIndex: 'ir2c',
      key: 'ir2c',
      
    },
    
    {
      title: 'Pricing Evaluation',
      dataIndex: 'pricing_evaluation',
      key: 'pricing_evaluation',
      
    },
    
    {
      title: 'Costing Evaluation',
      dataIndex: 'costing_evaluation',
      key: 'costing_evaluation',
      
    },
    
    {
      title: 'SLG Achievement',
      dataIndex: 'slg_achievement',
      key: 'slg_achievement',
      
    },
    
    {
      title: 'SLA Achievement',
      dataIndex: 'sla_achievement',
      key: 'sla_achievement',
      
    },
    
    {
      title: 'Technology Positioning',
      dataIndex: 'technology_positioning',
      key: 'technology_positioning',
      
    },
    
    {
      title: 'Market Share (%)',
      dataIndex: 'market_share_percentage',
      key: 'market_share_percentage',
      
    },
    
    {
      title: 'Market Share Growth (%)',
      dataIndex: 'market_share_growth',
      key: 'market_share_growth',
      
    },
    
    {
      title: 'Revenue Share (%)',
      dataIndex: 'revenue_share',
      key: 'revenue_share',
      
    },
    
    {
      title: 'Revenue Share Growth (%)',
      dataIndex: 'revenue_share_growth',
      key: 'revenue_share_growth',
      
    },
    
    {
      title: 'BCG Matrix Position',
      dataIndex: 'bcg_matrix_position',
      key: 'bcg_matrix_position',
      
    },
    
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <>
          <Button onClick={() => onEdit(record)} style={{ marginRight: 8 }}>Edit</Button>
          <Button danger onClick={() => onDelete(record.id)}>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <div className="productperformance-list-container">
      <Table columns={columns} dataSource={data} rowKey="id" loading={loading} />
    </div>
  );
};

export default ProductPerformanceList;