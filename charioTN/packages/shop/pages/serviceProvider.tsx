import React from "react";
import Head from "next/head";
import ServiceProvier from "containers/ServiceProvider/ServiceProvider";
import { withApollo } from "helper/apollo";
import { useRouter } from "next/router";

function Restaurant({ deviceType }) {
  const { query } = useRouter();
  const targetRef = React.useRef(null);
  React.useEffect(() => {
    if ((query.text || query.category) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: "smooth",
      });
    }
  }, [query]);
  return (
    <>
      <Head>
        <title>Restaurant</title>
      </Head>
      <ServiceProvier />
    </>
  );
}

export default withApollo(Restaurant);
