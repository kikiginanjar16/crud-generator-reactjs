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

const ProductPerformanceService = {
  getAll: async (): Promise<any[]> => {
    try {
      const response = await apiClient.get<any[]>('/product-performance');
      return response.data;
    } catch (error) {
      console.error('Error fetching productperformances:', error);
      throw error;
    }
  },

  getById: async (id: string): Promise<any> => {
    try {
      const response = await apiClient.get<any>(`/product-performance/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching productperformance with id ${id}:`, error);
      throw error;
    }
  },

  create: async (data: any): Promise<any> => {
    try {
      const formData = new FormData();
      
      if (data.product_id) {
        
        formData.append('product_id', data.product_id);
        
      }
      
      if (data.periode) {
        
        formData.append('periode', data.periode);
        
      }
      
      if (data.year) {
        
        formData.append('year', data.year);
        
      }
      
      if (data.month) {
        
        formData.append('month', data.month);
        
      }
      
      if (data.brand_awareness) {
        
        formData.append('brand_awareness', data.brand_awareness);
        
      }
      
      if (data.brand_perception) {
        
        formData.append('brand_perception', data.brand_perception);
        
      }
      
      if (data.brand_image) {
        
        formData.append('brand_image', data.brand_image);
        
      }
      
      if (data.brand_purchase_intention) {
        
        formData.append('brand_purchase_intention', data.brand_purchase_intention);
        
      }
      
      if (data.brand_loyalty) {
        
        formData.append('brand_loyalty', data.brand_loyalty);
        
      }
      
      if (data.brand_equity) {
        
        formData.append('brand_equity', data.brand_equity);
        
      }
      
      if (data.customer_satisfaction_index) {
        
        formData.append('customer_satisfaction_index', data.customer_satisfaction_index);
        
      }
      
      if (data.customer_loyalty_index) {
        
        formData.append('customer_loyalty_index', data.customer_loyalty_index);
        
      }
      
      if (data.churn_rate) {
        
        formData.append('churn_rate', data.churn_rate);
        
      }
      
      if (data.net_promoter_score) {
        
        formData.append('net_promoter_score', data.net_promoter_score);
        
      }
      
      if (data.customer_feedback_score) {
        
        formData.append('customer_feedback_score', data.customer_feedback_score);
        
      }
      
      if (data.net_profit) {
        
        formData.append('net_profit', data.net_profit);
        
      }
      
      if (data.ebitda) {
        
        formData.append('ebitda', data.ebitda);
        
      }
      
      if (data.net_profit_margin) {
        
        formData.append('net_profit_margin', data.net_profit_margin);
        
      }
      
      if (data.current_ratio) {
        
        formData.append('current_ratio', data.current_ratio);
        
      }
      
      if (data.debt_to_equity_ratio) {
        
        formData.append('debt_to_equity_ratio', data.debt_to_equity_ratio);
        
      }
      
      if (data.return_on_equity) {
        
        formData.append('return_on_equity', data.return_on_equity);
        
      }
      
      if (data.revenue_achievement) {
        
        formData.append('revenue_achievement', data.revenue_achievement);
        
      }
      
      if (data.revenue_growth) {
        
        formData.append('revenue_growth', data.revenue_growth);
        
      }
      
      if (data.profit_margin) {
        
        formData.append('profit_margin', data.profit_margin);
        
      }
      
      if (data.roi) {
        
        formData.append('roi', data.roi);
        
      }
      
      if (data.ir2c) {
        
        formData.append('ir2c', data.ir2c);
        
      }
      
      if (data.pricing_evaluation) {
        
        formData.append('pricing_evaluation', data.pricing_evaluation);
        
      }
      
      if (data.costing_evaluation) {
        
        formData.append('costing_evaluation', data.costing_evaluation);
        
      }
      
      if (data.slg_achievement) {
        
        formData.append('slg_achievement', data.slg_achievement);
        
      }
      
      if (data.sla_achievement) {
        
        formData.append('sla_achievement', data.sla_achievement);
        
      }
      
      if (data.technology_positioning) {
        
        formData.append('technology_positioning', data.technology_positioning);
        
      }
      
      if (data.market_share_percentage) {
        
        formData.append('market_share_percentage', data.market_share_percentage);
        
      }
      
      if (data.market_share_growth) {
        
        formData.append('market_share_growth', data.market_share_growth);
        
      }
      
      if (data.revenue_share) {
        
        formData.append('revenue_share', data.revenue_share);
        
      }
      
      if (data.revenue_share_growth) {
        
        formData.append('revenue_share_growth', data.revenue_share_growth);
        
      }
      
      if (data.bcg_matrix_position) {
        
        formData.append('bcg_matrix_position', data.bcg_matrix_position);
        
      }
      
      const response = await apiClient.post<any>('/product-performance', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating productperformance:', error);
      throw error;
    }
  },

  update: async (id: string, data: any): Promise<any> => {
    try {
      const formData = new FormData();
      
      if (data.product_id) {
        
        formData.append('product_id', data.product_id);
        
      }
      
      if (data.periode) {
        
        formData.append('periode', data.periode);
        
      }
      
      if (data.year) {
        
        formData.append('year', data.year);
        
      }
      
      if (data.month) {
        
        formData.append('month', data.month);
        
      }
      
      if (data.brand_awareness) {
        
        formData.append('brand_awareness', data.brand_awareness);
        
      }
      
      if (data.brand_perception) {
        
        formData.append('brand_perception', data.brand_perception);
        
      }
      
      if (data.brand_image) {
        
        formData.append('brand_image', data.brand_image);
        
      }
      
      if (data.brand_purchase_intention) {
        
        formData.append('brand_purchase_intention', data.brand_purchase_intention);
        
      }
      
      if (data.brand_loyalty) {
        
        formData.append('brand_loyalty', data.brand_loyalty);
        
      }
      
      if (data.brand_equity) {
        
        formData.append('brand_equity', data.brand_equity);
        
      }
      
      if (data.customer_satisfaction_index) {
        
        formData.append('customer_satisfaction_index', data.customer_satisfaction_index);
        
      }
      
      if (data.customer_loyalty_index) {
        
        formData.append('customer_loyalty_index', data.customer_loyalty_index);
        
      }
      
      if (data.churn_rate) {
        
        formData.append('churn_rate', data.churn_rate);
        
      }
      
      if (data.net_promoter_score) {
        
        formData.append('net_promoter_score', data.net_promoter_score);
        
      }
      
      if (data.customer_feedback_score) {
        
        formData.append('customer_feedback_score', data.customer_feedback_score);
        
      }
      
      if (data.net_profit) {
        
        formData.append('net_profit', data.net_profit);
        
      }
      
      if (data.ebitda) {
        
        formData.append('ebitda', data.ebitda);
        
      }
      
      if (data.net_profit_margin) {
        
        formData.append('net_profit_margin', data.net_profit_margin);
        
      }
      
      if (data.current_ratio) {
        
        formData.append('current_ratio', data.current_ratio);
        
      }
      
      if (data.debt_to_equity_ratio) {
        
        formData.append('debt_to_equity_ratio', data.debt_to_equity_ratio);
        
      }
      
      if (data.return_on_equity) {
        
        formData.append('return_on_equity', data.return_on_equity);
        
      }
      
      if (data.revenue_achievement) {
        
        formData.append('revenue_achievement', data.revenue_achievement);
        
      }
      
      if (data.revenue_growth) {
        
        formData.append('revenue_growth', data.revenue_growth);
        
      }
      
      if (data.profit_margin) {
        
        formData.append('profit_margin', data.profit_margin);
        
      }
      
      if (data.roi) {
        
        formData.append('roi', data.roi);
        
      }
      
      if (data.ir2c) {
        
        formData.append('ir2c', data.ir2c);
        
      }
      
      if (data.pricing_evaluation) {
        
        formData.append('pricing_evaluation', data.pricing_evaluation);
        
      }
      
      if (data.costing_evaluation) {
        
        formData.append('costing_evaluation', data.costing_evaluation);
        
      }
      
      if (data.slg_achievement) {
        
        formData.append('slg_achievement', data.slg_achievement);
        
      }
      
      if (data.sla_achievement) {
        
        formData.append('sla_achievement', data.sla_achievement);
        
      }
      
      if (data.technology_positioning) {
        
        formData.append('technology_positioning', data.technology_positioning);
        
      }
      
      if (data.market_share_percentage) {
        
        formData.append('market_share_percentage', data.market_share_percentage);
        
      }
      
      if (data.market_share_growth) {
        
        formData.append('market_share_growth', data.market_share_growth);
        
      }
      
      if (data.revenue_share) {
        
        formData.append('revenue_share', data.revenue_share);
        
      }
      
      if (data.revenue_share_growth) {
        
        formData.append('revenue_share_growth', data.revenue_share_growth);
        
      }
      
      if (data.bcg_matrix_position) {
        
        formData.append('bcg_matrix_position', data.bcg_matrix_position);
        
      }
      
      const response = await apiClient.put<any>(`/product-performance/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating productperformance with id ${id}:`, error);
      throw error;
    }
  },

  delete: async (id: string): Promise<void> => {
    try {
      const response = await apiClient.delete<void>(`/product-performance/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting productperformance with id ${id}:`, error);
      throw error;
    }
  },
};

export default ProductPerformanceService;