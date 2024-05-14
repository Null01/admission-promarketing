import { get } from '@/lib/utilis/rest-client';

const BASE_URL = process.env.NEXT_PUBLIC_ROOT_MOCKAPI_URL;

export const getAllProviders = async () => {
  const path = '/api/v1/provider';
  return get<any>(`${BASE_URL}${path}`).then((response) => response.data).catch(() => []);
};