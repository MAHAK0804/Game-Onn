import React, { useEffect } from "react";
import Layout from "../Layout";
import Profile from "@/components/profile";

export default function ProfilePage() {
  useEffect(() => {
    document.title = "Profile";
  }, []);
  return (
    <Layout>
      <Profile />
    </Layout>
  );
}
