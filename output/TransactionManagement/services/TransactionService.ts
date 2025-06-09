import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor untuk menambahkan token ke header
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const TransactionService = {
  getAll: async (): Promise<any[]> => {
    try {
      const response = await apiClient.get<any[]>('/transactions');
      return response.data;
    } catch (error) {
      console.error('Error fetching transactions:', error);
      throw error;
    }
  },

  getById: async (id: string): Promise<any> => {
    try {
      const response = await apiClient.get<any>(`/transactions/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching transaction with id ${id}:`, error);
      throw error;
    }
  },

  create: async (data: any): Promise<any> => {
    try {
      const formData = new FormData();
      
      if (data.product_id) {
        
        formData.append('product_id', data.product_id);
        
      }
      
      if (data.variant_id) {
        
        formData.append('variant_id', data.variant_id);
        
      }
      
      if (data.number) {
        
        formData.append('number', data.number);
        
      }
      
      if (data.description) {
        
        formData.append('description', data.description);
        
      }
      
      if (data.location) {
        
        formData.append('location', data.location);
        
      }
      
      if (data.amount) {
        
        formData.append('amount', data.amount);
        
      }
      
      if (data.status) {
        
        formData.append('status', data.status);
        
      }
      
      if (data.transaction_date) {
        
        formData.append('transaction_date', data.transaction_date);
        
      }
      
      if (data.periode) {
        
        formData.append('periode', data.periode);
        
      }
      
      if (data.month) {
        
        formData.append('month', data.month);
        
      }
      
      if (data.year) {
        
        formData.append('year', data.year);
        
      }
      
      const response = await apiClient.post<any>('/transactions', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating transaction:', error);
      throw error;
    }
  },

  update: async (id: string, data: any): Promise<any> => {
    try {
      const formData = new FormData();
      
      if (data.product_id) {
        
        formData.append('product_id', data.product_id);
        
      }
      
      if (data.variant_id) {
        
        formData.append('variant_id', data.variant_id);
        
      }
      
      if (data.number) {
        
        formData.append('number', data.number);
        
      }
      
      if (data.description) {
        
        formData.append('description', data.description);
        
      }
      
      if (data.location) {
        
        formData.append('location', data.location);
        
      }
      
      if (data.amount) {
        
        formData.append('amount', data.amount);
        
      }
      
      if (data.status) {
        
        formData.append('status', data.status);
        
      }
      
      if (data.transaction_date) {
        
        formData.append('transaction_date', data.transaction_date);
        
      }
      
      if (data.periode) {
        
        formData.append('periode', data.periode);
        
      }
      
      if (data.month) {
        
        formData.append('month', data.month);
        
      }
      
      if (data.year) {
        
        formData.append('year', data.year);
        
      }
      
      const response = await apiClient.put<any>(`/transactions/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating transaction with id ${id}:`, error);
      throw error;
    }
  },

  delete: async (id: string): Promise<void> => {
    try {
      const response = await apiClient.delete<void>(`/transactions/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting transaction with id ${id}:`, error);
      throw error;
    }
  },
};

export default TransactionService;