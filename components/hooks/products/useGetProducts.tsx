import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

export const useGetProducts = (url: string) => {
  const searching = url.includes("q=")
  const getProducts = async ({pageParam = 0}) => {
    const params = searching ? {} : {skip: pageParam, limit: 10}
    const res = await axios.get(url, {
      params: params
    });

    return {...res, prevSkip: pageParam}
  }

  const paginationg = (lastPage: any, _pages: any) => {
    if (lastPage.prevSkip + 10 > 100) {
      return false;
    }

    return lastPage.prevSkip + 10
  }

  return useInfiniteQuery({
    queryKey: ['products', url],
    queryFn: getProducts,
    getNextPageParam: searching ? undefined : paginationg
  });
};
