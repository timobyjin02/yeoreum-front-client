import { AxiosResponse } from 'axios';

type OnSuccess =
  | ((
      data: AxiosResponse<any, any>,
      variables: void,
      context: unknown,
    ) => unknown)
  | undefined;

type OnError =
  | ((error: any, variables: void, context: unknown) => unknown)
  | undefined;

export type { OnSuccess, OnError };
