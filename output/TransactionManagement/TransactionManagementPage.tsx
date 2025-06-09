import React, { useState } from 'react';
import { Modal, Button, message, Breadcrumb } from 'antd';

import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import TransactionService from './services/TransactionService';


const TransactionManagementPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentRecord, setCurrentRecord] = useState<any | null>(null);
  const [data, setData] = useState<any[]>([]);

  const handleEdit = (record: any) => {
    setCurrentRecord(record);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await TransactionService.delete(id);
      setData(data.filter(item => item.id !== id));
      message.success('Transaction deleted successfully');
    } catch (error) {
      message.error('Failed to delete transaction');
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
                { title: 'TransactionManagement', href: '/' },
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
      
      <TransactionList onEdit={handleEdit} onDelete={handleDelete} data={data} setData={setData} />
      
      <Modal
        title={currentRecord ? 'Edit Transaction' : 'Add Transaction'}
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <TransactionForm
          initialValues={currentRecord}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </Modal>
    </div>
  );
};

export default TransactionManagementPage;