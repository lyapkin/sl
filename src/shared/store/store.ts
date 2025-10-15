import { Lang } from "@/src/shared/models";
import { endpoints } from "@/src/shared/api";
import { configureStore, createSlice } from "@reduxjs/toolkit";

export const makeStore = (locale: Lang) => {
  const localeSlice = createSlice({
    name: "locale",
    initialState: locale,
    reducers: {},
  });

  return configureStore({
    reducer: {
      locale: localeSlice.reducer,
      [endpoints.reducerPath]: endpoints.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(endpoints.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
