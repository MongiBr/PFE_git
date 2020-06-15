import React from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// the redirect will only happen on the client-side. This is by design,
const Index: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace("/grocery");
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
