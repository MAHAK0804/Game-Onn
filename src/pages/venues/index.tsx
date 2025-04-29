import React, { useEffect } from "react";
import Layout from "../Layout";
import VenuesPage from "@/components/venues";

const Venues = () => {
  useEffect(() => {
    document.title = "Venues";
  }, []);
  return (
    <Layout>
      <VenuesPage />
    </Layout>
  );
};

export default Venues;
