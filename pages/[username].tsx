import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import React from "react";

export default function Profile() {
  const router = useRouter();
  const { username, pId } = router.query;

  return (
    <Layout pageTitle={String(username).toUpperCase()}>
      <p>Coming soon...</p>
      username: {username}
      <br />
      userID: {pId}
    </Layout>
  );
}
