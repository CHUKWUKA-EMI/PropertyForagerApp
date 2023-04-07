import Layout from "@/components/Layout/Layout";
import { Container } from "@mui/material";
import HomeComponent from "@/components/Home";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      {/* <Container maxWidth="xl"> */}
      <HomeComponent />
      {/* </Container> */}
    </Layout>
  );
}
