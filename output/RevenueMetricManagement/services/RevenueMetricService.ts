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

const RevenueMetricService = {
  getAll: async (): Promise<any[]> => {
    try {
      const response = await apiClient.get<any[]>('/product-metrics');
      return response.data;
    } catch (error) {
      console.error('Error fetching revenuemetrics:', error);
      throw error;
    }
  },

  getById: async (id: string): Promise<any> => {
    try {
      const response = await apiClient.get<any>(`/product-metrics/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching revenuemetric with id ${id}:`, error);
      throw error;
    }
  },

  create: async (data: any): Promise<any> => {
    try {
      const formData = new FormData();
      
      if (data.product_id) {
        
        formData.append('product_id', data.product_id);
        
      }
      
      if (data.year) {
        
        formData.append('year', data.year);
        
      }
      
      if (data.january) {
        
        formData.append('january', data.january);
        
      }
      
      if (data.february) {
        
        formData.append('february', data.february);
        
      }
      
      if (data.march) {
        
        formData.append('march', data.march);
        
      }
      
      if (data.april) {
        
        formData.append('april', data.april);
        
      }
      
      if (data.may) {
        
        formData.append('may', data.may);
        
      }
      
      if (data.june) {
        
        formData.append('june', data.june);
        
      }
      
      if (data.july) {
        
        formData.append('july', data.july);
        
      }
      
      if (data.august) {
        
        formData.append('august', data.august);
        
      }
      
      if (data.september) {
        
        formData.append('september', data.september);
        
      }
      
      if (data.october) {
        
        formData.append('october', data.october);
        
      }
      
      if (data.november) {
        
        formData.append('november', data.november);
        
      }
      
      if (data.december) {
        
        formData.append('december', data.december);
        
      }
      
      const response = await apiClient.post<any>('/product-metrics', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating revenuemetric:', error);
      throw error;
    }
  },

  update: async (id: string, data: any): Promise<any> => {
    try {
      const formData = new FormData();
      
      if (data.product_id) {
        
        formData.append('product_id', data.product_id);
        
      }
      
      if (data.year) {
        
        formData.append('year', data.year);
        
      }
      
      if (data.january) {
        
        formData.append('january', data.january);
        
      }
      
      if (data.february) {
        
        formData.append('february', data.february);
        
      }
      
      if (data.march) {
        
        formData.append('march', data.march);
        
      }
      
      if (data.april) {
        
        formData.append('april', data.april);
        
      }
      
      if (data.may) {
        
        formData.append('may', data.may);
        
      }
      
      if (data.june) {
        
        formData.append('june', data.june);
        
      }
      
      if (data.july) {
        
        formData.append('july', data.july);
        
      }
      
      if (data.august) {
        
        formData.append('august', data.august);
        
      }
      
      if (data.september) {
        
        formData.append('september', data.september);
        
      }
      
      if (data.october) {
        
        formData.append('october', data.october);
        
      }
      
      if (data.november) {
        
        formData.append('november', data.november);
        
      }
      
      if (data.december) {
        
        formData.append('december', data.december);
        
      }
      
      const response = await apiClient.put<any>(`/product-metrics/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating revenuemetric with id ${id}:`, error);
      throw error;
    }
  },

  delete: async (id: string): Promise<void> => {
    try {
      const response = await apiClient.delete<void>(`/product-metrics/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting revenuemetric with id ${id}:`, error);
      throw error;
    }
  },
};

export default RevenueMetricService;