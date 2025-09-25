import React, { useEffect } from "react";
import Layout from "../Layout";
import AboutPage from "@/components/aboutUs";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us";
  }, []);
  return (
    <Layout>
      <AboutPage />
    </Layout>
  );
}
