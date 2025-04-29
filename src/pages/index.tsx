import Home from "@/components/home";
import Layout from "./Layout";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
