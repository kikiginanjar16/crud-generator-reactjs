import React, { useState } from 'react';
import { Modal, Button, message, Breadcrumb } from 'antd';

import ProductLineList from './ProductLineList';
import ProductLineForm from './ProductLineForm';
import ProductLineService from './services/ProductLineService';


const ProductLineManagementPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentRecord, setCurrentRecord] = useState<any | null>(null);
  const [data, setData] = useState<any[]>([]);

  const handleEdit = (record: any) => {
    setCurrentRecord(record);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await ProductLineService.delete(id);
      setData(data.filter(item => item.id !== id));
      message.success('ProductLine deleted successfully');
    } catch (error) {
      message.error('Failed to delete productline');
    }
  };

  const handleSubmit = (values: any) => {
    setIsModalVisible(false);
    setCurrentRecord(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentRecord(null);
  };

  return (
    <div className="app-container">
      <div className='flex justify-between items-center mb-4'>
          <div>
            <h2 className="text-xl font-bold">Product Lines</h2>
            <Breadcrumb
              className='mb-4'
              items={[
                { title: 'Home', href: '/' },
                { title: 'ProductLineManagement', href: '/' },
              ]}
            />
          </div>

          <Button
            size='large'
            type="primary"
            onClick={() => setIsModalVisible(true)}
            style={{ marginBottom: 16 }}
          >
            Create New
          </Button>
      </div>
      
      <ProductLineList onEdit={handleEdit} onDelete={handleDelete} data={data} setData={setData} />
      
      <Modal
        title={currentRecord ? 'Edit ProductLine' : 'Add ProductLine'}
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <ProductLineForm
          initialValues={currentRecord}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </Modal>
    </div>
  );
};

export default ProductLineManagementPage;