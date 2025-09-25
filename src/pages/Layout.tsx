import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { persistor, store } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout({ children }: any) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <div>
            {children}
            <Footer />
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}
