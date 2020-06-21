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
} from "../../containers/ServiceProviderDetails/ServiceProviderDetails.style";
import { FormattedMessage } from "react-intl";
import { Description } from "containers/ProductDetailsBook/ProductDetailsBook.style";

type RestaurantCardProps = {
  data: any;

  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  data,
  onChange,

  onClick,
  ...props
}) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Media>
            <img width={127} height={127} className="mr-3" src={data.image} />
            <Media.Body>
              <BlockTitle>{data.name} </BlockTitle>

              <Text bold>
                <FormattedMessage id="order" defaultMessage={data.city} />
              </Text>

              <Text>{data.location}</Text>
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
              <Text>{data.type}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="txt" defaultMessage="COST FOR TWO" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{data.costPrice}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="del" defaultMessage="Hours" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{data.hours}</Text>
            </ListDes>
          </ListItem>
        </Card.Body>
        <Button
          title="View Page "
          style={{ width: "100%" }}
          onClick={() => onClick(data.id)}
        ></Button>
      </Card>
    </div>
  );
};
export default RestaurantCard;
