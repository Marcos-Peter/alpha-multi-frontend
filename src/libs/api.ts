import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

interface RequestTypes {
  message: string;
}

export const axiosPUT = async (url: string, formData: any) => {
  const { data } = await api.put<RequestTypes>(url, formData);
  return data.message;
};

export const axiosPOST = async (url: string, formData: any) => {
  const { data } = await api.post<RequestTypes>(url, formData);
  return data.message;
};
