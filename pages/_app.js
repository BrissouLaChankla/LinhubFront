import "@/styles/customized.scss";
import AdminLayout from "@/components/adminlayout";
import FrontLayout from "@/components/FrontLayout";
import { useEffect } from "react";
import { Provider } from "react-redux";
import user from "@/reducers/user";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const reducers = combineReducers({ user });
const persistConfig = {
  key: "Linhub",
  storage,
};

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export default function App({ Component, pageProps, router }) {
  const getLayout = router.pathname.includes("/admin")
    ? (page) => <AdminLayout children={page} />
    : (page) => <FrontLayout children={page} />;

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />, pageProps)}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
