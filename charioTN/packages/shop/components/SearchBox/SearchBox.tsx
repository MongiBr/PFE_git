import InputSearch from "./Input";
import React, { useEffect, useRef, useState } from "react";
import SearchResults from "./SearchResults";
import SearchWrapper, {
  SearchBoxWrapper,
  CurrentType,
} from "./SearchBox.style";
import { SearchIcon } from "../AllSvgIcon";
import Popover from "components/Popover/Popover";
import SelectPage from "components/Location/DropDown";
import Button from "components/Button/Button";
import Dropdown from "components/Dropdown/Dropdown";
import { openModal } from "@redq/reuse-modal";
import Select from "components/Select/Select";
import NavLink from "components/NavLink/NavLink";
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
  DropDownArrow,
  SelectedType,
  MainMenu,
} from "containers/LayoutContainer/Header/Header.style";

type SearchBoxProps = {
  suggestions?: string[];
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  inputStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  bordered?: boolean;
  hideType?: boolean;
  showSvg?: boolean;
  expand?: boolean;
  minimal?: boolean;
  autoSuggestion?: boolean;
  placeholder?: string;
  className?: string;
  handleSearch?: Function;
  onClick?: Function;
  value?: any;
  pathname?: string;
};

const Search: React.FC<SearchBoxProps> = ({
  suggestions,
  buttonText,
  buttonIcon,
  inputStyle,
  style,
  bordered,
  hideType,
  showSvg,
  autoSuggestion,
  placeholder,
  className,
  handleSearch,
  onClick,
  value,
  expand,
  minimal,
  pathname,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [toggleSuggestion, setToggleSuggestion] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  let searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleSearchInput = (event: any) => {
    setSearchValue(event.target.value);
    setToggleSuggestion(true);
    handleSearch(event.target.value);
  };

  const ucwords = (str: string) => {
    const newString = str.replace(/\//g, "");
    const humanString = newString.replace(/-/g, " ");
    return (humanString + "").replace(/^([a-z])|\s+([a-z])/g, function($1) {
      return $1.toUpperCase();
    });
  };

  const setSuggestion = (suggestion: any) => {
    setSearchValue(suggestion);
    setToggleSuggestion(false);
  };

  const handleClickOutside = (event: any) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setToggleSuggestion(false);
      setToggleSearch(false);
    }
  };

  const onClearBtnClick = () => {
    setSearchValue("");
  };

  const MenuArray = [
    {
      label: "Sousse",
    },
    {
      label: "Hamem Sousse",
    },
    {
      label: "Jawhara",
    },
    {
      label: "Sahloul",
    },
    {
      label: "Kalaa Sghira",
    },
  ];

  const [activeMenu] = useState({
    label: "Choose a city",
  });

  const NavItem = (item: any) => {
    return (
      <NavLink
        onClick={() => useState(item.label)}
        label={item.label}
        href={"grocery"}
      />
    );
  };

  return (
    <SearchWrapper className={className}>
      <SearchBoxWrapper
        className={`${hideType ? "hideType" : ""} ${
          expand === true ? (toggleSearch ? "expanded" : "collapsed") : ""
        } ${minimal === true ? "minimal" : ""}`}
      >
        {pathname && pathname !== "/" ? (
          <CurrentType>{ucwords(pathname)}</CurrentType>
        ) : (
          <CurrentType>Magasin</CurrentType>
        )}
        <InputSearch
          type="text"
          value={value}
          onChange={handleSearchInput}
          onFocus={() => setToggleSearch(true)}
          onBlur={() => setToggleSearch(false)}
          buttonIcon={buttonIcon}
          buttonText={buttonText}
          placeholder={placeholder}
          style={inputStyle}
          bordered={bordered}
          showSvg={showSvg}
          onClick={() => onClick(searchValue)}
        />
      </SearchBoxWrapper>
      {autoSuggestion && toggleSuggestion ? (
        <SearchResults
          suggestions={suggestions}
          clearSearch={onClearBtnClick}
          setSuggestionValue={(suggestion: any) => setSuggestion(suggestion)}
        />
      ) : null}
    </SearchWrapper>
  );
};

Search.defaultProps = {
  bordered: false,
  autoSuggestion: false,
  buttonText: "Search",
  buttonIcon: <SearchIcon />,
  placeholder: "Search your products from here",
  inputStyle: {
    width: "100%",
  },
};

export default Search;
