import Media from "react-bootstrap/Media";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "components/Button/Button";
import "./Restaurant.css";
import React from "react";
import Link from "next/link";
import { MDBRating } from "mdbreact";

import OrderRecivedWrapper, {
  OrderRecivedContainer,
  OrderInfo,
  OrderDetails,
  TotalAmount,
  BlockTitle,
  BlockTit,
  Text,
  Txt,
  InfoBlockWrapper,
  InfoBlock,
  ListItem,
  ListTitle,
  ListDes,
  Blocklist,
  ListPro,
} from "../../containers/ServiceProvider/ServiceProvider.style";
import { FormattedMessage } from "react-intl";
import { Description } from "containers/ProductDetailsBook/ProductDetailsBook.style";

type RestaurantCardProps = {
  title: string;
  city: string;
  location: string;
  type: string;
  hours: string;
  costPrice: Number;
  image: any;

  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  title,
  image,
  city,
  location,
  type,
  hours,
  costPrice,
  onChange,

  onClick,
  ...props
}) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Media>
            <img width={127} height={127} className="mr-3" src={image} />
            <Media.Body>
              <BlockTitle>{title} </BlockTitle>

              <Text bold>
                <FormattedMessage id="order" defaultMessage={city} />
              </Text>

              <Text>{location}</Text>
              <div>
                <MDBRating></MDBRating>
              </div>
            </Media.Body>
          </Media>
          <hr></hr>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="order" defaultMessage="CUISINES" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{type}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="txt" defaultMessage="COST FOR TWO" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{costPrice}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="del" defaultMessage="Hours" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{hours}</Text>
            </ListDes>
          </ListItem>
        </Card.Body>
        <Link href="serviceprovider">
          <Button title="View Page " style={{ width: "100%" }}></Button>
        </Link>
      </Card>
    </div>
  );
};
export default RestaurantCard;
