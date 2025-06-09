import React, { useEffect, useState } from 'react';
import { Table, Button, Image } from 'antd';
import TransactionService from './services/TransactionService';


interface TransactionListProps {
  onEdit: (record: any) => void;
  onDelete: (id: string) => void;
  data: any[];
  setData: (data: any[]) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ onEdit, onDelete, data, setData }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await TransactionService.getAll();
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
      title: 'Variant ID',
      dataIndex: 'variant_id',
      key: 'variant_id',
      
    },
    
    {
      title: 'Transaction Number',
      dataIndex: 'number',
      key: 'number',
      
    },
    
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      
    },
    
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      
    },
    
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      
    },
    
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      
    },
    
    {
      title: 'Transaction Date',
      dataIndex: 'transaction_date',
      key: 'transaction_date',
      
    },
    
    {
      title: 'Period',
      dataIndex: 'periode',
      key: 'periode',
      
    },
    
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
      
    },
    
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      
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
    <div className="transaction-list-container">
      <Table columns={columns} dataSource={data} rowKey="id" loading={loading} />
    </div>
  );
};

export default TransactionList;