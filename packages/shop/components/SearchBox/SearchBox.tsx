import InputSearch from "./Input";
import React, { useEffect, useRef, useState, useContext } from "react";
import SearchResults from "./SearchResults";
import SearchWrapper, { SearchBoxWrapper } from "./SearchBox.style";
import { SearchIcon } from "../AllSvgIcon";
import Popover from "components/Popover/Popover";
import { SearchContext } from "contexts/search/search.context";
import styled from "styled-components";
import { FruitsVegetable, MenuDown, FacialCare } from "components/AllSvgIcon";
import HeaderWrapper, {
  DropDownArrow,
  SelectedType,
  MainMenu,
  TypeIcon,
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

const MenuArray = [
  {
    icon: <FruitsVegetable />,
    label: "Grocery",
  },
  {
    label: "Foods",
    icon: <FacialCare />,
  },
];

const LocationsArray = [
  {
    state: "Sousse",
    cities: ["Kalaa", "Jaouhra"],
  },
  {
    state: "Tunis",
    cities: ["Lac", "La fayette"],
  },
];

const Icon = styled.span`
  min-width: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

  const [activeMenu, setActiveMenu] = useState({
    icon: <FruitsVegetable />,
    label: "Grocery",
  });
  const {
    state: { search },
    updateSearch,
  } = useContext<any>(SearchContext);
  console.log(search);
  const [activeCity, setActiveCity] = useState("");

  const StateItem = (item: any) => {
    return (
      <div
        className="menu-item"
        key={item.state}
        onClick={() => {
          updateSearch(item);
          setActiveCity(item.cities[0]);
        }}
      >
        {item.state}
      </div>
    );
  };
  const CityItem = (item: any) => {
    return (
      <div className="menu-item" key={item} onClick={() => setActiveCity(item)}>
        {item}
      </div>
    );
  };
  const NavItem = (item: any) => {
    return (
      <span key={item.label} onClick={() => setActiveMenu(item)}>
        {item.label}
      </span>
    );
  };

  return (
    <SearchWrapper className={className}>
      <SearchBoxWrapper
        className={`${hideType ? "hideType" : ""} ${
          expand === true ? (toggleSearch ? "expanded" : "collapsed") : ""
        } ${minimal === true ? "minimal" : ""}`}
      >
        <Popover
          className="right"
          handler={
            <SelectedType>
              <div className="menu-item">
                <span>{search.state}</span>
              </div>
              <DropDownArrow>
                <MenuDown />
              </DropDownArrow>
            </SelectedType>
          }
          content={<>{LocationsArray.map(StateItem)}</>}
        />
        <Popover
          className="right"
          handler={
            <SelectedType>
              <span>
                <span>{activeCity}</span>
              </span>
              <DropDownArrow>
                <MenuDown />
              </DropDownArrow>
            </SelectedType>
          }
          content={<>{search.cities.map(CityItem)}</>}
        />

        <Popover
          className="right"
          handler={
            <SelectedType>
              <span>
                <TypeIcon>{activeMenu.icon}</TypeIcon>
                <span>{activeMenu.label}</span>
              </span>
              <DropDownArrow>
                <MenuDown />
              </DropDownArrow>
            </SelectedType>
          }
          content={<>{MenuArray.map(NavItem)}</>}
        />
        {/* <InputSearch
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
        /> */}
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
