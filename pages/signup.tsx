import Layout from "@/components/Layout/Layout";
import SignUpComponent from "@/components/User/SignUp";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    router.replace("/");
  };

  return (
    <Layout pageTitle="Sign up">
      <SignUpComponent handleClose={handleClose} openSignupForm={open} />
    </Layout>
  );
}
