import React, { useState } from 'react';
import { Modal, Button, message, Breadcrumb } from 'antd';

import CostMetricList from './CostMetricList';
import CostMetricForm from './CostMetricForm';
import CostMetricService from './services/CostMetricService';


const CostMetricManagementPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentRecord, setCurrentRecord] = useState<any | null>(null);
  const [data, setData] = useState<any[]>([]);

  const handleEdit = (record: any) => {
    setCurrentRecord(record);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await CostMetricService.delete(id);
      setData(data.filter(item => item.id !== id));
      message.success('CostMetric deleted successfully');
    } catch (error) {
      message.error('Failed to delete costmetric');
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
                { title: 'CostMetricManagement', href: '/' },
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
      
      <CostMetricList onEdit={handleEdit} onDelete={handleDelete} data={data} setData={setData} />
      
      <Modal
        title={currentRecord ? 'Edit CostMetric' : 'Add CostMetric'}
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <CostMetricForm
          initialValues={currentRecord}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </Modal>
    </div>
  );
};

export default CostMetricManagementPage;