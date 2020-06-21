import React from "react";
import "./footer.css";
import imageStore from "./unnamed.png";
import laposte from "./laposte.png";
import visa from "./visaa.png";
import chario from "./chario.png";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
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
} from "../ServiceProviderDetails/ServiceProviderDetails.style";
import { marginRight } from "styled-system";

const FooterPage = () => {
  return (
    <div id="ftr" className="footer-copyright text-center py-3">
      <Text>
        &copy; {new Date().getFullYear()} Copyright
        <img
          src={chario}
          width="120px"
          height="24px"
          style={{ marginLeft: "-16px", marginTop: "-3px" }}
        ></img>
      </Text>
    </div>
  );
};

export default FooterPage;
