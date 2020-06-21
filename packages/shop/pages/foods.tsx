import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Modal } from "@redq/reuse-modal";
import { withApollo } from "helper/apollo";
import StoreNav from "components/StoreNav/StoreNav";
import Sidebar from "containers/Sidebar/Sidebar";
import ServiceProviders from "containers/ServiceProviders/ServiceProviders";
import CartPopUp from "containers/Cart/CartPopUp";
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  MobileCarouselDropdown,
} from "styled/pages.style";
import storeType from "containers/constants/storeType";

const PAGE_TYPE = "grocery";

function MakeupPage({ deviceType }) {
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
        <title>CharioFood</title>
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
                  <ServiceProviders
                    type={PAGE_TYPE}
                    deviceType={deviceType}
                    fetchLimit={8}
                  ></ServiceProviders>
                </div>
              </ContentSection>
            </MainContentArea>
          </>
        ) : (
          <MainContentArea>
            <StoreNav items={storeType} />
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            <ContentSection style={{ width: "100%" }}>
              <div ref={targetRef}>
                <ServiceProviders
                  type={PAGE_TYPE}
                  deviceType={deviceType}
                  fetchLimit={8}
                ></ServiceProviders>
              </div>
            </ContentSection>
          </MainContentArea>
        )}
        <CartPopUp deviceType={deviceType} />
      </Modal>
    </>
  );
}

export default withApollo(MakeupPage);
