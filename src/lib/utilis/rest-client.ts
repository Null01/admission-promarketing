import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use((config) => config,
  (error) => {
    console.error('Error before request:', error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use((response) => {
    if (response.status !== 200) {
      console.error('Non-200 OK status code:', response.status);
      // Handle non-200 status codes (e.g., throw error, display message)
      return Promise.reject(new Error(`API request failed with status ${response.status}`));
    }
    return response;
  },
  (error) => {
    console.error('Error fetching data:', error);
    return Promise.reject(error);
  },
);

export const get = async <Response> (url: string): Promise<Response | undefined> => {
  return instance.get<Response>(url);
};

export const post = async <Response> (url: string, data: any): Promise<Response | undefined> => {
  return instance.post<Response>(url, data);
};