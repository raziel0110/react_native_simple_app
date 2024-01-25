import axios from "axios";
import { useEffect, useState } from "react";

const PROFILE_URL = 'https://dummyjson.com/auth/me'

export const useGetUser = (token: string) => {  
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(PROFILE_URL, {headers: {'Authorization': `Bearer ${token}`}})
        if(data) {
          setData(response.data)
        }
      } catch (err: any) {
        setData({isError: true, error: err.response})
      }
    }
    fetchData();
  }, [token])

  return data
}