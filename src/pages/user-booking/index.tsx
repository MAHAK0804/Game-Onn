import React, { useEffect } from "react";
import Layout from "../Layout";
import Booking from "@/components/booking";

export default function UserBooking() {
  useEffect(() => {
    document.title = "Venues History";
  }, []);
  return (
    <Layout>
      <Booking />
    </Layout>
  );
}
