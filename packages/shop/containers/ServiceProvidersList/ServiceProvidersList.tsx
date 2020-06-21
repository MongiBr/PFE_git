import React, { useState } from "react";
import { useRouter } from "next/router";
import ProductCard from "components/ProductCard/ProductCard";
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from "./ServiceProvidersList.style";

import { CURRENCY } from "helper/constant";
import { useQuery } from "@apollo/react-hooks";
import { GET_SERVICE_PROVIDERS } from "../../graphql/query/serviceProvider.query";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import Placeholder from "components/Placeholder/Placeholder";
import Fade from "react-reveal/Fade";
import NoResultFound from "components/NoResult/NoResult";

type ServiceProvidersProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  type: string;
  fetchLimit?: number;
  loadMore?: boolean;
};
export const ServiceProviders: React.FC<ServiceProvidersProps> = ({
  deviceType,
  fetchLimit = 8,
  loadMore = true,
}) => {
  const router = useRouter();
  const [loadingMore, toggleLoading] = useState(false);
  const { data, error, loading, fetchMore } = useQuery(GET_SERVICE_PROVIDERS, {
    variables: {
      offset: 0,
      limit: fetchLimit,
    },
  });

  const handleOnClick = React.useCallback((item: any, deviceType: any) => {
    const as = `/serviceProvider/${item.id}`;
    router.push(as);
  }, []);

  if (loading) {
    return (
      <LoaderWrapper>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
      </LoaderWrapper>
    );
  }

  if (error) return <div>{error.message}</div>;
  if (
    !data ||
    !data.serviceProviders ||
    data.serviceProviders.items.length === 0
  ) {
    return <NoResultFound />;
  }
  const handleLoadMore = () => {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: Number(data.serviceProviders.items.length),
        limit: fetchLimit,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        toggleLoading(false);
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          serviceProviders: {
            __typename: prev.serviceProviders.__typename,
            items: [
              ...prev.serviceProviders.items,
              ...fetchMoreResult.serviceProviders.items,
            ],
            hasMore: fetchMoreResult.serviceProviders.hasMore,
          },
        };
      },
    });
  };

  return (
    <>
      <ProductsRow>
        {data.serviceProviders.items.map((item: any, index: number) => (
          <ProductsCol key={index}>
            <ProductCardWrapper>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: "100%" }}
              >
                <ProductCard
                  title={item.name}
                  description={item.email}
                  image={item.image}
                  weight={item.unit}
                  currency={CURRENCY}
                  price={item.price}
                  salePrice={item.salePrice}
                  discountInPercent={item.discountInPercent}
                  data={item}
                  deviceType={deviceType}
                  onClick={() => handleOnClick(item, deviceType)}
                />
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
      {loadMore && data.serviceProviders.hasMore && (
        <ButtonWrapper>
          <Button
            onClick={handleLoadMore}
            title="Load More"
            intlButtonId="loadMoreBtn"
            size="small"
            isLoading={loadingMore}
            loader={<Loader color="#fed700" />}
            style={{
              minWidth: 135,
              backgroundColor: "#ffffff",
              border: "1px solid #f1f1f1",
              color: "#fed700",
            }}
          />
        </ButtonWrapper>
      )}
    </>
  );
};
export default ServiceProviders;
