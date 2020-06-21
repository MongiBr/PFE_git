import React, { useReducer, useEffect } from "react";
import { SearchContext } from "./search.context";
type ActionType = {
  type: "UPDATE" | "RESET" | "UPDATE_LOCATION";
  payload: object;
};

function reducer(state: any, action: ActionType): any {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    case "UPDATE_LOCATION": {
      return { ...state, ...action.payload };
    }
    case "RESET":
      return { page: 1, search: { state: "", cities: [] } };
    default:
      return state;
  }
}

type SearchProviderProps = {
  query: any;
};

export const SearchProvider: React.FunctionComponent<SearchProviderProps> = ({
  children,
  query,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...query,
    page: 1,
    search: { state: "", cities: [] },
  });
  const updateSearch = (search) => {
    dispatch({ type: "UPDATE_LOCATION", payload: search });
    const serializedState = JSON.stringify(search);
    localStorage.setItem("search", serializedState);
  };

  return (
    <SearchContext.Provider value={{ state, dispatch, updateSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
