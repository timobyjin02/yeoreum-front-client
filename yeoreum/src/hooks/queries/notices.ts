import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { requestGetNotices } from '../../api/notices';

const useNoticesQuery = (token: string) => {
  // <데이터 타입, Error 타입, select 타입, query-key 타입>
  return useQuery<any, AxiosError, any, ['notices']>(['notices'], () =>
    requestGetNotices(token),
  );
};

export { useNoticesQuery };
