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

const ProductLineService = {
  getAll: async (): Promise<any[]> => {
    try {
      const response = await apiClient.get<any[]>('/product-lines');
      return response.data;
    } catch (error) {
      console.error('Error fetching productlines:', error);
      throw error;
    }
  },

  getById: async (id: string): Promise<any> => {
    try {
      const response = await apiClient.get<any>(`/product-lines/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching productline with id ${id}:`, error);
      throw error;
    }
  },

  create: async (data: any): Promise<any> => {
    try {
      const formData = new FormData();
      
      if (data.name) {
        
        formData.append('name', data.name);
        
      }
      
      if (data.code) {
        
        formData.append('code', data.code);
        
      }
      
      if (data.description) {
        
        formData.append('description', data.description);
        
      }
      
      const response = await apiClient.post<any>('/product-lines', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating productline:', error);
      throw error;
    }
  },

  update: async (id: string, data: any): Promise<any> => {
    try {
      const formData = new FormData();
      
      if (data.name) {
        
        formData.append('name', data.name);
        
      }
      
      if (data.code) {
        
        formData.append('code', data.code);
        
      }
      
      if (data.description) {
        
        formData.append('description', data.description);
        
      }
      
      const response = await apiClient.put<any>(`/product-lines/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating productline with id ${id}:`, error);
      throw error;
    }
  },

  delete: async (id: string): Promise<void> => {
    try {
      const response = await apiClient.delete<void>(`/product-lines/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting productline with id ${id}:`, error);
      throw error;
    }
  },
};

export default ProductLineService;