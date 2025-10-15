import { RootState } from "@/src/shared/store";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const i18nBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const locale = (api.getState() as RootState).locale;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${locale}/api/`,
  });
  return rawBaseQuery(args, api, extraOptions);
};

export const endpoints = createApi({
  reducerPath: "productsApi",
  baseQuery: i18nBaseQuery,
  endpoints: () => ({}),
});
