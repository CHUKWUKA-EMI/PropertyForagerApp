import Layout from "@/components/Layout/Layout";
import LoginComponent from "@/components/User/Login";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Lpgin() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    const previousPage = router.query["rt"] as string;
    if (previousPage) {
      router.replace(previousPage);
    } else {
      router.replace("/");
    }
  };

  return (
    <Layout pageTitle="Log in">
      <LoginComponent handleClose={handleClose} openLoginForm={open} />
    </Layout>
  );
}
