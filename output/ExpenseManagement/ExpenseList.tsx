import React, { useEffect, useState } from 'react';
import { Table, Button, Image } from 'antd';
import ExpenseService from './services/ExpenseService';


interface ExpenseListProps {
  onEdit: (record: any) => void;
  onDelete: (id: string) => void;
  data: any[];
  setData: (data: any[]) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ onEdit, onDelete, data, setData }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ExpenseService.getAll();
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
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      
    },
    
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      
    },
    
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      
    },
    
    {
      title: 'Expense Date',
      dataIndex: 'expense_date',
      key: 'expense_date',
      
    },
    
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      key: 'vendor',
      
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
    <div className="expense-list-container">
      <Table columns={columns} dataSource={data} rowKey="id" loading={loading} />
    </div>
  );
};

export default ExpenseList;