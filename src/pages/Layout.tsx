import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { store } from "@/store/store";
import { Provider } from "react-redux";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout({ children }: any) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div>
          {children}
          <Footer />
        </div>
      </Provider>
    </>
  );
}
