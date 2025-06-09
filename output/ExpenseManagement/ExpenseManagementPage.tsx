import React, { useState } from 'react';
import { Modal, Button, message, Breadcrumb } from 'antd';

import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
import ExpenseService from './services/ExpenseService';


const ExpenseManagementPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentRecord, setCurrentRecord] = useState<any | null>(null);
  const [data, setData] = useState<any[]>([]);

  const handleEdit = (record: any) => {
    setCurrentRecord(record);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await ExpenseService.delete(id);
      setData(data.filter(item => item.id !== id));
      message.success('Expense deleted successfully');
    } catch (error) {
      message.error('Failed to delete expense');
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
                { title: 'ExpenseManagement', href: '/' },
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
      
      <ExpenseList onEdit={handleEdit} onDelete={handleDelete} data={data} setData={setData} />
      
      <Modal
        title={currentRecord ? 'Edit Expense' : 'Add Expense'}
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <ExpenseForm
          initialValues={currentRecord}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </Modal>
    </div>
  );
};

export default ExpenseManagementPage;