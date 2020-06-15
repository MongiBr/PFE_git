import React, { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import gql from "graphql-tag";
import { openModal, closeModal } from "@redq/reuse-modal";
import MagasinCard from "components/MagasinCard/MagasinCard";
import firstProjectPhoto from "../../image/monoprix.jpg";
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from "./Products.style";
import { CURRENCY } from "helper/constant";
import { useQuery } from "@apollo/react-hooks";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import Placeholder from "components/Placeholder/Placeholder";
import Fade from "react-reveal/Fade";
import NoResultFound from "components/NoResult/NoResult";

const QuickView = dynamic(() => import("../QuickView/QuickView"));

const magasin = [
  {
    title: "MonoPrix",
    image: "../image/back.jpg",

    deliveryFees: "delivery 2TND",
    description: "MonoPrix",
  },
  {
    title: "MonoPrix",
    image: "../image/back.jpg",

    deliveryFees: "delivery 2TND",
    description: "MonoPrix",
  },
  {
    title: "MonoPrix",
    image: "../image/back.jpg",

    deliveryFees: "delivery 2TND",
    description: " MonoPrix",
  },
  {
    title: "MonoPrix",
    image: "../image/back.jpg",

    deliveryFees: "delivery 2TND",
    description: " MonoPrix",
  },
  {
    title: "MonoPrix",
    image: "../image/back.jpg",

    deliveryFees: "delivery 2TND",
    description: " MonoPrix",
  },
  {
    title: "MonoPrix",
    image: "../image/back.jpg",

    deliveryFees: "delivery 2TND",
    description: " MonoPrix",
  },
  {
    title: "MonoPrix",
    image: "../image/back.jpg",

    deliveryFees: "delivery 2TND",
    description: " MonoPrix",
  },
  {
    title: "MonoPrix",
    image: "../image/back.jpg",

    deliveryFees: "delivery 2TND",
    description: " MonoPrix",
  },
  {
    title: "MonoPrix",
    image: "../image/back.jpg",

    deliveryFees: "delivery 2TND",
    description: " MonoPrix",
  },
  {
    title: "MonoPrix",
    image: "../image/back.jpg",

    deliveryFees: "delivery 2TND",
    description: " MonoPrix",
  },
  {
    title: "MonoPrix",
    image: "../image/back.jpg",

    deliveryFees: "delivery 2TND",
    description: " MonoPrix",
  },
];

type MagasinProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  type: string;
  fetchLimit?: number;
  loadMore?: boolean;
};
export const Magasins: React.FC<MagasinProps> = ({
  deviceType,
  type,
  fetchLimit = 8,
  loadMore = true,
}) => {
  const router = useRouter();
  const [loadingMore, toggleLoading] = useState(false);

  // Quick View Modal
  const handleModalClose = () => {
    const href = `${router.pathname}`;
    const as = router.asPath;
    router.push(href, as, { shallow: true });
    closeModal();
  };
  const handleQuickViewModal = React.useCallback(
    (modalProps: any, deviceType: any, onModalClose: any) => {
      if (router.pathname === "/Magasin/[title]") {
        const as = `/Magasin/${modalProps.title}`;
        router.push(router.pathname, as);
        return;
      }

      const href = `${router.pathname}?${modalProps.title}`;
      const as = `/Magasin/${modalProps.title}`;
      router.push(href, as, { shallow: true });
    },
    []
  );

  return (
    <>
      <ProductsRow>
        {magasin.map((item: any, index: number) => (
          <ProductsCol key={index}>
            <ProductCardWrapper>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: "100%" }}
              >
                <MagasinCard
                  title={item.title}
                  description={item.description}
                  deliveryFees={item.deliveryFees}
                  image={firstProjectPhoto}
                  deviceType={deviceType}
                  onClick={() =>
                    handleQuickViewModal(item, deviceType, handleModalClose)
                  }
                />
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
    </>
  );
};
export default Magasins;
