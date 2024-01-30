import axios from "axios";
import { useEffect, useState } from "react";

const PROFILE_URL = 'https://dummyjson.com/auth/me'

export interface DataUI {
  image?: string;
  company?: {
    title?: string;
    department?: string;
  };
  lastName?: string;
  firstName?: string;
  email?: string;
  phone?: string;
  username?: string;
}

export const useGetUser = (token: string) => {  
  const [data, setData] = useState({});
  console.log("TOKEN =>", token)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(PROFILE_URL, {headers: {'Authorization': `Bearer ${token}`}})
        console.log(response)
        setData(response.data)
      } catch (err: any) {
        console.log("err =>",err)
        setData({isError: true, error: err.response})
      }
    }
    fetchData();
  }, [token])

  return data
}