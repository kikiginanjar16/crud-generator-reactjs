import React, { useState } from 'react';
import { Modal, Button, message, Breadcrumb } from 'antd';

import ProductPerformanceList from './ProductPerformanceList';
import ProductPerformanceForm from './ProductPerformanceForm';
import ProductPerformanceService from './services/ProductPerformanceService';


const ProductPerformanceManagementPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentRecord, setCurrentRecord] = useState<any | null>(null);
  const [data, setData] = useState<any[]>([]);

  const handleEdit = (record: any) => {
    setCurrentRecord(record);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await ProductPerformanceService.delete(id);
      setData(data.filter(item => item.id !== id));
      message.success('ProductPerformance deleted successfully');
    } catch (error) {
      message.error('Failed to delete productperformance');
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
                { title: 'ProductPerformanceManagement', href: '/' },
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
      
      <ProductPerformanceList onEdit={handleEdit} onDelete={handleDelete} data={data} setData={setData} />
      
      <Modal
        title={currentRecord ? 'Edit ProductPerformance' : 'Add ProductPerformance'}
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <ProductPerformanceForm
          initialValues={currentRecord}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </Modal>
    </div>
  );
};

export default ProductPerformanceManagementPage;