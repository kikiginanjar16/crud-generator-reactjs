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

const ExpenseService = {
  getAll: async (): Promise<any[]> => {
    try {
      const response = await apiClient.get<any[]>('/expenses');
      return response.data;
    } catch (error) {
      console.error('Error fetching expenses:', error);
      throw error;
    }
  },

  getById: async (id: string): Promise<any> => {
    try {
      const response = await apiClient.get<any>(`/expenses/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching expense with id ${id}:`, error);
      throw error;
    }
  },

  create: async (data: any): Promise<any> => {
    try {
      const formData = new FormData();
      
      if (data.product_id) {
        
        formData.append('product_id', data.product_id);
        
      }
      
      if (data.category) {
        
        formData.append('category', data.category);
        
      }
      
      if (data.amount) {
        
        formData.append('amount', data.amount);
        
      }
      
      if (data.description) {
        
        formData.append('description', data.description);
        
      }
      
      if (data.expense_date) {
        
        formData.append('expense_date', data.expense_date);
        
      }
      
      if (data.vendor) {
        
        formData.append('vendor', data.vendor);
        
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
      
      const response = await apiClient.post<any>('/expenses', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating expense:', error);
      throw error;
    }
  },

  update: async (id: string, data: any): Promise<any> => {
    try {
      const formData = new FormData();
      
      if (data.product_id) {
        
        formData.append('product_id', data.product_id);
        
      }
      
      if (data.category) {
        
        formData.append('category', data.category);
        
      }
      
      if (data.amount) {
        
        formData.append('amount', data.amount);
        
      }
      
      if (data.description) {
        
        formData.append('description', data.description);
        
      }
      
      if (data.expense_date) {
        
        formData.append('expense_date', data.expense_date);
        
      }
      
      if (data.vendor) {
        
        formData.append('vendor', data.vendor);
        
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
      
      const response = await apiClient.put<any>(`/expenses/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating expense with id ${id}:`, error);
      throw error;
    }
  },

  delete: async (id: string): Promise<void> => {
    try {
      const response = await apiClient.delete<void>(`/expenses/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting expense with id ${id}:`, error);
      throw error;
    }
  },
};

export default ExpenseService;