import React, { useEffect } from "react";
import Layout from "../Layout";
import Faq from "@/components/faq";

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ";
  }, []);
  return (
    <Layout>
      <Faq />
    </Layout>
  );
}
