import React, { useEffect, useState } from 'react';
import { Table, Button, Image } from 'antd';
import RevenueMetricService from './services/RevenueMetricService';


interface RevenueMetricListProps {
  onEdit: (record: any) => void;
  onDelete: (id: string) => void;
  data: any[];
  setData: (data: any[]) => void;
}

const RevenueMetricList: React.FC<RevenueMetricListProps> = ({ onEdit, onDelete, data, setData }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await RevenueMetricService.getAll();
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
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      
    },
    
    {
      title: 'January',
      dataIndex: 'january',
      key: 'january',
      
    },
    
    {
      title: 'February',
      dataIndex: 'february',
      key: 'february',
      
    },
    
    {
      title: 'March',
      dataIndex: 'march',
      key: 'march',
      
    },
    
    {
      title: 'April',
      dataIndex: 'april',
      key: 'april',
      
    },
    
    {
      title: 'May',
      dataIndex: 'may',
      key: 'may',
      
    },
    
    {
      title: 'June',
      dataIndex: 'june',
      key: 'june',
      
    },
    
    {
      title: 'July',
      dataIndex: 'july',
      key: 'july',
      
    },
    
    {
      title: 'August',
      dataIndex: 'august',
      key: 'august',
      
    },
    
    {
      title: 'September',
      dataIndex: 'september',
      key: 'september',
      
    },
    
    {
      title: 'October',
      dataIndex: 'october',
      key: 'october',
      
    },
    
    {
      title: 'November',
      dataIndex: 'november',
      key: 'november',
      
    },
    
    {
      title: 'December',
      dataIndex: 'december',
      key: 'december',
      
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
    <div className="revenuemetric-list-container">
      <Table columns={columns} dataSource={data} rowKey="id" loading={loading} />
    </div>
  );
};

export default RevenueMetricList;