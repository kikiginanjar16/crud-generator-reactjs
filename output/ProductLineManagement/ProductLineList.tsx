import React, { useEffect, useState } from 'react';
import { Table, Button, Image } from 'antd';
import ProductLineService from './services/ProductLineService';


interface ProductLineListProps {
  onEdit: (record: any) => void;
  onDelete: (id: string) => void;
  data: any[];
  setData: (data: any[]) => void;
}

const ProductLineList: React.FC<ProductLineListProps> = ({ onEdit, onDelete, data, setData }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductLineService.getAll();
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      
    },
    
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      
    },
    
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      
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
    <div className="productline-list-container">
      <Table columns={columns} dataSource={data} rowKey="id" loading={loading} />
    </div>
  );
};

export default ProductLineList;