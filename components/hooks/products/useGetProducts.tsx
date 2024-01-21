import {useQuery} from 'react-query';
import axios from 'axios';

const PRODUCTS_URL = 'https://dummyjson.com/products';

const getProducts = async (url: string) => {
  return await axios.get(url);
};

export const useGetProducts = (searchKey: string) => {
  const url =
    searchKey.length > 0
      ? `${PRODUCTS_URL}/search?q=${searchKey}`
      : PRODUCTS_URL;
  return useQuery(['products', url], () => getProducts(url));
};
