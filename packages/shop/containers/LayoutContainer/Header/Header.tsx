import React, { useContext, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { openModal } from "@redq/reuse-modal";
import NavLink from "components/NavLink/NavLink";
import Popover from "components/Popover/Popover";
import SearchBox from "components/SearchBox/SearchBox";
import { SearchContext } from "contexts/search/search.context";
import { AuthContext } from "contexts/auth/auth.context";
import AuthenticationForm from "../../SignInOutForm/Form";
import { FormattedMessage } from "react-intl";
import Button from "components/Button/Button";
import LanguageContext from "contexts/language/language.context";
import CartPopUp from "containers/Cart/CartPopUp";
import { ShoppingBag } from "components/AllSvgIcon";
import {
  FruitsVegetable,
  MenuDown,
  FacialCare,
  DressIcon,
  Handbag,
  HelpIcon,
  BookIcon,
  FurnitureIcon,
  DEFlag,
  CNFlag,
  USFlag,
  ILFlag,
  ESFlag,
  SAFlag,
} from "components/AllSvgIcon";
import HeaderWrapper, {
  HeaderLeftSide,
  HeaderRightSide,
  Logo,
  MainMenu,
  SelectedType,
  DropDownArrow,
  SelectedLang,
  LanguageItem,
  LangSwithcer,
  Flag,
  TypeIcon,
} from "./Header.style";
import Logoimage from "image/logoC.png";
import UserImage from "image/user.jpg";
import {
  HOME_PAGE,
  GROCERY_PAGE,
  CLOTHING,
  Food_PAGE,
  BAGS_PAGE,
  FURNITURE_PAGE,
  BOOK_PAGE,
  PROCEED_TO_CHECKOUT_PAGE,
  PROFILE_PAGE,
  ORDER_RECEIVED,
  YOUR_ORDER,
  OFFER_PAGE,
  HELP_PAGE,
} from "containers/constants/navigation";
type HeaderProps = {
  style?: any;
  className?: string;
  token: string;
  pathname: string;
  deviceType?: any;
};

const MenuArray = [
  {
    link: GROCERY_PAGE,
    icon: <FruitsVegetable />,
    label: "Grocery",
  },
  {
    link: Food_PAGE,
    label: "Foods",
    icon: <FacialCare />,
  },
];

const DropDownMenuArray = [
  {
    link: PROFILE_PAGE,
    label: "Profile",
    intlId: "navlinkProfile",
  },
  {
    link: PROCEED_TO_CHECKOUT_PAGE,
    label: "Checkout",
    intlId: "navlinkCheckout",
  },
  {
    link: YOUR_ORDER,
    label: "Order",
    intlId: "sidebarYourOrder",
  },
  {
    link: ORDER_RECEIVED,
    label: "Order invoice",
    intlId: "navlinkOrderReceived",
  },
];

const LanguageArray = [
  { id: "ar", label: "Arabic", intlLangName: "intlArabic", icon: <SAFlag /> },

  { id: "en", label: "English", intlLangName: "intlEnglish", icon: <USFlag /> },
];

const Header: React.FC<HeaderProps> = ({
  style,
  className,
  token,
  pathname,
  deviceType,
}) => {
  const {
    state: { lang },
    toggleLanguage,
  } = useContext<any>(LanguageContext);

  const activeMenuItem = MenuArray.find((item) => item.link === pathname);

  const selectedLangindex = LanguageArray.findIndex((x) => x.id === lang);

  const {
    authState: { isAuthenticated },
    authDispatch,
  } = useContext<any>(AuthContext);
  const { state, dispatch } = useContext(SearchContext);

  const { text } = state;
  const handleSearch = (text: any) => {
    dispatch({
      type: "UPDATE",
      payload: {
        ...state,
        text,
      },
    });
  };
  const { page, ...urlState } = state;
  const handleClickSearchButton = () => {
    Router.push({
      pathname: pathname,
      query: { ...urlState, text },
    });
  };
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      authDispatch({ type: "SIGN_OUT" });
      Router.push("/");
    }
  };
  const resetSearch = (selectedMenu: any) => {
    dispatch({
      type: "RESET",
    });
  };

  const handleToggleLanguage = (e) => {
    toggleLanguage(e.target.value);
  };

  const LanguageMenu = (item: any) => {
    return (
      <LanguageItem
        onClick={handleToggleLanguage}
        key={item.id}
        value={item.id}
      >
        <span>{item.icon}</span>
        <FormattedMessage id={item.intlLangName} defaultMessage={item.label} />
      </LanguageItem>
    );
  };

  const signInOutForm = () => {
    authDispatch({
      type: "SIGNIN",
    });

    openModal({
      show: true,
      overlayClassName: "quick-view-overlay",
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: "",
      config: {
        enableResizing: false,
        disableDragging: true,
        className: "quick-view-modal",
        width: 458,
        height: "auto",
      },
    });
  };

  const isHomePage =
    pathname === HOME_PAGE ||
    pathname === GROCERY_PAGE ||
    pathname === Food_PAGE;

  return (
    <HeaderWrapper style={style} className={className}>
      <HeaderLeftSide>
        <Logo
          onClick={() =>
            resetSearch({
              link: GROCERY_PAGE,
              icon: <FruitsVegetable />,
              label: "Grocery",
            })
          }
        >
          <Link href={HOME_PAGE}>
            <a>
              <img src={Logoimage} alt="Chario" />
            </a>
          </Link>
        </Logo>
      </HeaderLeftSide>
      {isHomePage ? (
        <SearchBox
          className="headerSearch"
          handleSearch={(value: any) => handleSearch(value)}
          onClick={handleClickSearchButton}
          placeholder="Search anything..."
          hideType={true}
          minimal={true}
          showSvg={true}
          style={{ width: "100%" }}
          value={text || ""}
        />
      ) : null}
      <HeaderRightSide>
        <NavLink
          className="menu-item"
          href={HELP_PAGE}
          label="Need Help"
          intlId="navlinkHelp"
          iconClass="menu-icon"
          icon={<HelpIcon />}
        />
        <LangSwithcer>
          <Popover
            className="right"
            handler={
              <SelectedLang>
                <Flag>{LanguageArray[selectedLangindex].icon}</Flag>
              </SelectedLang>
            }
            content={<>{LanguageArray.map(LanguageMenu)}</>}
          />
        </LangSwithcer>

        {!isAuthenticated ? (
          <Button
            onClick={signInOutForm}
            size="small"
            title="join"
            style={{ fontSize: 15, color: "#fff" }}
            intlButtonId="joinButton"
          />
        ) : (
          <Popover
            direction="right"
            className="user-pages-dropdown"
            handler={<img src={UserImage} alt="user" />}
            content={
              <>
                {DropDownMenuArray.map((item, idx) => (
                  <NavLink
                    key={idx}
                    className="menu-item"
                    href={item.link}
                    label={item.label}
                    intlId={item.intlId}
                  />
                ))}
                <div className="menu-item" onClick={handleLogout}>
                  <a>
                    <span>
                      <FormattedMessage
                        id="navlinkLogout"
                        defaultMessage="Logout"
                      />
                    </span>
                  </a>
                </div>
              </>
            }
          />
        )}
      </HeaderRightSide>
    </HeaderWrapper>
  );
};

export default Header;
