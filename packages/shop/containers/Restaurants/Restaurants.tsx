import React from "react";
import { useState } from "react";

import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import gql from "graphql-tag";
import { openModal, closeModal } from "@redq/reuse-modal";
import RestaurantCard from "components/RestaurantCard/RestaurantCard";
import Image from "components/Image/Image";

import { ProductImageWrapper } from "components/ProductCard/ProductCard.style";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CURRENCY } from "helper/constant";
import { useQuery } from "@apollo/react-hooks";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import Placeholder from "components/Placeholder/Placeholder";
import Fade from "react-reveal/Fade";
import NoResultFound from "components/NoResult/NoResult";
import firstProjectPhoto from "../Test/pizza.png";
const QuickView = dynamic(() => import("../QuickView/QuickView"));

const Restaurant = [
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza ,Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
  {
    title: "Restaurant",

    image: { firstProjectPhoto },

    city: "Sahloul, sousse",
    location: " Rue yaser arabfet 2000",
    type: " Pizza, Roman, Italian",
    hours: " 08:00 – 05:00 (Mon-Sun)",
    costPrice: "40 €",
  },
];

type RestaurantsProps = {
  type?: string;
  fetchLimit?: number;
  loadMore?: boolean;
};

export const Restaurants: React.FC<RestaurantsProps> = ({
  fetchLimit = 4,
  loadMore = true,
}) => {
  /* const router = useRouter();
  const [loadingMore, toggleLoading] = useState(false);
  const { data, error, loading, fetchMore } = useQuery(Restaurant, {
    variables: {
      limit: fetchLimit,
    },
  });

  const handleLoadMore = () => {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: Number(Restaurant.length),
        limit: fetchLimit,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        toggleLoading(false);
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          restaurant: {
            restaurant: [...prev.restaurant, ...fetchMoreResult.restaurant],
          },
        };
      },
    });
  }; */

  return (
    <>
      <div>
        <Row>
          {Restaurant.map((item: any) => (
            <Col md={{ span: 6, offset: 0 }}>
              <RestaurantCard
                title={item.title}
                city={item.city}
                image={firstProjectPhoto}
                location={item.location}
                type={item.type}
                hours={item.hours}
                costPrice={item.costPrice}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
export default Restaurants;
