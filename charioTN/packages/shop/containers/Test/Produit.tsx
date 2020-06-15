import React, { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import gql from "graphql-tag";
import { openModal, closeModal } from "@redq/reuse-modal";
import ProduitCard from "./ProduitCard";
import Image from "components/Image/Image";

import { ProductImageWrapper } from "components/ProductCard/ProductCard.style";
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from "../Products/Products.style";
import { CURRENCY } from "helper/constant";
import { useQuery } from "@apollo/react-hooks";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import Placeholder from "components/Placeholder/Placeholder";
import Fade from "react-reveal/Fade";
import NoResultFound from "components/NoResult/NoResult";
import firstProjectPhoto from "./pizza.png";
const QuickView = dynamic(() => import("../QuickView/QuickView"));

const produit = [
  {
    id: "0",
    title: "pizza",
    slug: "Pizza thon de restaurant sousse",
    unit: "Pizza thon de restaurant sousse",
    price: "10",
    salePrice: "10$",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: { firstProjectPhoto },
  },
  {
    id: "1",
    title: "pizza",
    slug: "Pizza thon de restaurant sousse",
    unit: "Pizza thon de restaurant sousse",
    price: "10",
    salePrice: "10$",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: { firstProjectPhoto },
  },
  {
    id: "2",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "4",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "5",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "6",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "7",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },

  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
  {
    id: "0",
    title: "pizza",
    slug: "0",
    unit: "0",
    price: "10",
    salePrice: "dt",
    description: "Pizza thon de restaurant sousse ",
    discountInPercent: "10",
    type: "produit",
    image: "../image/back.jpg",
  },
];

export const Produit = ({
  deviceType,
  type,
  fetchLimit = 8,
  loadMore = true,
}) => {
  return (
    <>
      <ProductsRow>
        {produit.map((item: any, index: number) => (
          <ProductsCol key={index}>
            <ProductCardWrapper>
              <Fade
                duration={100}
                delay={index * 10}
                style={{ height: "100%" }}
              >
                <ProduitCard
                  title={item.title}
                  description={item.description}
                  image={firstProjectPhoto}
                  weight={item.unit}
                  price={item.price}
                  salePrice={item.salePrice}
                  data={item}
                  deviceType={deviceType}
                />
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
    </>
  );
};
export default Produit;
