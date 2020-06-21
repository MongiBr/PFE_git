import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import ServiceProviderDetails from "containers/ServiceProviderDetails/ServiceProviderDetails";

import { Modal } from "@redq/reuse-modal";
import ProductSingleWrapper, {
  ProductSingleContainer,
} from "styled/product-single.style";
import CartPopUp from "containers/Cart/CartPopUp";
import { withApollo } from "helper/apollo";
import { GET_SERVICE_PROVIDER } from "graphql/query/serviceProvider.query";

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const serviceProvider: NextPage<Props> = ({ deviceType }) => {
  const {
    query: { id },
  } = useRouter();

  const { data, error, loading } = useQuery(GET_SERVICE_PROVIDER, {
    variables: { id },
  });
  console.log(data);
  if (loading) {
    return <div>loading...</div>;
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Head>
        <title>{data.serviceProvider.name} - Chario</title>
      </Head>
      <Modal>
        <ProductSingleWrapper>
          <ProductSingleContainer>
            <ServiceProviderDetails
              data={data.serviceProvider}
              deviceType={deviceType}
            />
            <CartPopUp deviceType={deviceType} />
          </ProductSingleContainer>
        </ProductSingleWrapper>
      </Modal>
    </>
  );
};
export default withApollo(serviceProvider);
