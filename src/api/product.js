import { axiosInstance } from './axios';
import { Products } from '../products'

export const fetchProducts = () => axiosInstance.get('/products')
  .then((response) => response.data)
  .catch((err) => {
    console.warn(err);
    // return [];
    return Products
  });
