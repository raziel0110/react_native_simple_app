import {useQuery} from 'react-query';
import axios from 'axios';

const PRODUCTS_URL = 'https://dummyjson.com/products';

const getProducts = async () => {
  return await axios.get(PRODUCTS_URL);
};

export const useGetProducts = () => {
  return useQuery('products', getProducts);
};
