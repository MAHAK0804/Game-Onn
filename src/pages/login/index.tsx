import React from "react";
// import Layout from "../Layout";
import LoginPage from "@/components/Login";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function index() {
  return (
    // <Layout>
    <Provider store={store}>
      <LoginPage />
    </Provider>
    // </Layout>
  );
}
