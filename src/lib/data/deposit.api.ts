import { post } from '@/lib/utilis/rest-client';

const BASE_URL = process.env.NEXT_PUBLIC_ROOT_MOCKAPI_URL;

export const createLimitDeposit = async (data) => {
  const path = '/api/v1/self-limitation';
  return post<any>(`${BASE_URL}${path}`, data).then((response) => response.data).catch((error) => {
    return { 'error': true, message: error?.message };
  });
};