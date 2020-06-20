import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { withApollo } from "helper/apollo";
import StoreNav from "components/StoreNav/StoreNav";
import Sidebar from "containers/Sidebar/Sidebar";
import Products from "containers/Products/Products";
import Footer from "containers/Footer/Footer";
import CartPopUp from "containers/Cart/CartPopUp";
import { Modal } from "@redq/reuse-modal";
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  MobileCarouselDropdown,
} from "styled/pages.style";
// Static Data Import Here
import storeType from "containers/constants/storeType";

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
        {deviceType.desktop ? (
          <>
            <MobileCarouselDropdown>
              <StoreNav items={storeType} />

              <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            </MobileCarouselDropdown>
            <MainContentArea>
              <SidebarSection>
                <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
              </SidebarSection>
              <ContentSection>
                <div ref={targetRef}>
                  <Products
                    type={PAGE_TYPE}
                    deviceType={deviceType}
                    fetchLimit={8}
                  ></Products>
                </div>
              </ContentSection>
            </MainContentArea>
          </>
        ) : (
          <MainContentArea>
            <StoreNav items={storeType} />
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            <ContentSection style={{ width: "100%" }}>
              <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={8}
              ></Products>
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
