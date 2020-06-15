import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { withApollo } from "helper/apollo";
import StoreNav from "components/StoreNav/StoreNav";
import Carousel from "components/Carousel/Carousel";
import Banner from "containers/Banner/Banner";
import Sidebar from "containers/Sidebar/Sidebar";
import Products from "containers/Products/Products";
import Produit from "containers/Test/Produit";
import Footer from "containers/Footer/Footer";
import Magasins from "containers/Magasins/Magasins";
import CartPopUp from "containers/Cart/CartPopUp";
import SiteFooter from "components/SiteFooter/SiteFooter";
import { FormattedMessage } from "react-intl";
import { Modal } from "@redq/reuse-modal";
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from "styled/pages.style";
// Static Data Import Here
import OFFERS from "data/offers";
import BannerImg from "image/Chariotn.png";
import storeType from "constants/storeType";

const PAGE_TYPE = "grocery";

function HomePage({ deviceType }) {
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
        <title>CharioTN</title>
      </Head>
      <Modal>
        <Banner
          intlTitleId="groceriesTitle"
          intlDescriptionId="groceriesSubTitle"
          imageUrl={BannerImg}
        />

        {deviceType.desktop ? (
          <>
            <MobileCarouselDropdown>
              <StoreNav items={storeType} />

              <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            </MobileCarouselDropdown>
            <OfferSection>
              <div style={{ margin: "0 -10px" }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection>
            <MainContentArea>
              <SidebarSection>
                <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
              </SidebarSection>
              <ContentSection>
                <div ref={targetRef}>
                  <Magasins
                    type={PAGE_TYPE}
                    deviceType={deviceType}
                    fetchLimit={8}
                  ></Magasins>
                </div>
              </ContentSection>
            </MainContentArea>
          </>
        ) : (
          <MainContentArea>
            <StoreNav items={storeType} />
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            <OfferSection>
              <div style={{ margin: "0 -10px" }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection>
            <ContentSection style={{ width: "100%" }}>
              <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={16}
              />
            </ContentSection>
          </MainContentArea>
        )}
        <CartPopUp deviceType={deviceType} />
      </Modal>

      <Footer />
    </>
  );
}

export default withApollo(HomePage);
