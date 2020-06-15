import React from "react";
import Link from "next/link";
import ImgResto from "../Test/fod.jpg";
import Sidebar from "containers/Sidebar/Sidebar";
import Footer from "containers/Footer/Footer";
import RestaurantCard from "components/RestaurantCard/RestaurantCard";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "components/Button/Button";
import Media from "react-bootstrap/Media";
import CartItem from "../Cart/CartService";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBadge,
  MDBIcon,
  MDBBtn,
  MDBRating,
} from "mdbreact";
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from "styled/pages.style";
import Products from "containers/Products/Products";
import CartPopUp from "containers/Cart/CartPopUp";
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
  Pop,
} from "./ServiceProvider.style";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
const PAGE_TYPE = "grocery";

type ServiceProviderProps = {};
const ServiceProvider: React.FunctionComponent<ServiceProviderProps> = (
  deviceType: any
) => {
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
    <div>
      <MDBContainer fluid>
        <div style={{ padding: "75px 0 60px 0" }}>
          <MDBRow>
            <MDBCol>
              <Card className="shadow-none ">
                <Card.Body>
                  <Media>
                    <img
                      width={127}
                      height={127}
                      className="mr-3"
                      src={ImgResto}
                    />
                    <Media.Body>
                      <BlockTitle>Restaurant Name</BlockTitle>

                      <Text bold>
                        <FormattedMessage
                          id="order"
                          defaultMessage="Sahloul, sousse"
                        />
                      </Text>

                      <Text> Rue yaser arafet 2000</Text>
                      <MDBRow>
                        <MDBCol md="10"></MDBCol>

                        <MDBCol style={{ padding: 0 }}>
                          <Text style={{ marginLeft: "40px" }}> 0 Vote</Text>
                          <MDBRating />
                        </MDBCol>
                      </MDBRow>
                    </Media.Body>
                  </Media>
                  <hr></hr>

                  <InfoBlockWrapper>
                    <InfoBlock>
                      <Text bold className="title">
                        <FormattedMessage
                          id="orderNumberText"
                          defaultMessage="Order Number"
                        />
                      </Text>
                      <Text>+216 51 085 600</Text>
                    </InfoBlock>

                    <InfoBlock>
                      <Text bold className="title">
                        <FormattedMessage id="blaa" defaultMessage=" Hours" />
                      </Text>
                      <Text>08:00 – 01:00 (Mon-Sat)</Text>
                    </InfoBlock>
                    <InfoBlock>
                      <Text bold className="title">
                        <FormattedMessage
                          id="p"
                          defaultMessage="Cost for two"
                        />
                      </Text>
                      <Text>
                        <FormattedMessage id="p" defaultMessage="20dt" />
                      </Text>
                    </InfoBlock>
                    <InfoBlock>
                      <Text bold className="title">
                        <FormattedMessage
                          id="paymenMethodText"
                          defaultMessage="Payment Method"
                        />
                      </Text>
                      <Text>
                        <FormattedMessage
                          id="paymentMethodName"
                          defaultMessage="Cash on delivery"
                        />
                      </Text>
                    </InfoBlock>
                  </InfoBlockWrapper>
                </Card.Body>
              </Card>
            </MDBCol>
          </MDBRow>
        </div>
        <MDBRow>
          <MDBCol md="3" style={{ padding: 0 }}>
            <SidebarSection
              style={{
                marginTop: "-45px",
                paddingLeft: "15px",
                height: "100%",
              }}
            >
              <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            </SidebarSection>
          </MDBCol>
          <MDBCol md="9" style={{ padding: "15px" }}>
            <OrderRecivedWrapper>
              <div style={{ marginTop: "-60px" }}>
                <Products
                  type={PAGE_TYPE}
                  deviceType={deviceType}
                  fetchLimit={8}
                ></Products>
              </div>
            </OrderRecivedWrapper>
          </MDBCol>
        </MDBRow>
        <CartPopUp deviceType={deviceType}></CartPopUp>
        <Footer></Footer>
      </MDBContainer>
    </div>
  );
};

export default ServiceProvider;
