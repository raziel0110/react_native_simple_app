import {useState, useEffect} from 'react';
import axios from 'axios';

const useGetProduct = (url: string) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (url) {
        const response = await axios.get(url);
        setData(response.data);
      }
    };

    fetchData();
  }, [url]);

  return data;
};

export default useGetProduct;
