import axios from "axios";
import {useQuery} from "react-query";

const PROFILE_URL = 'https://dummyjson.com/auth/me'

const fetchUser = async (token: string) => {
  return await axios.get(PROFILE_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const useGetUser = (token: string) => {
    return useQuery(['user', token], () => fetchUser(token));
}