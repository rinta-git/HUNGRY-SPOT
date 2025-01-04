import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterRestaurentList,
  getSearchedList,
  getSortedList,
} from "../../../../utils/searchSortFilterUtils";
import { updateFilteredRestaurants } from "../restaurentSlice";

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const {
    items: resList,
    filters,
    sortOption,
  } = useSelector((store) => store?.restaurants);
  const dispatch = useDispatch();

  const updateList = (text) => {
    let resultList = resList;
    if (text) {
      resultList = getSearchedList(text, resList);
    }
    if (sortOption !== "Relevance (Default)") {
      resultList = getSortedList(sortOption, resultList);
    }
    if (filters?.length) {
      resultList = filterRestaurentList(filters, resultList);
    }
    return resultList;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const text = e.target.value;
      dispatch(
        updateFilteredRestaurants({
          filteredResList: updateList(e.target.value),
          searchText: text || "",
          isSearchActive: true,
        })
      );
    }
  };

  const clearSearch = () => {
    setSearchText("");
    dispatch(
      updateFilteredRestaurants({
        filteredResList: updateList(""),
        isSearchActive: false,
        searchText: "",
      })
    );
  };
  return (
    <>
      <div className="search-wrap">
        <input
          type="text"
          placeholder="Search for restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        {searchText ? (
          <i className="fa fa-times fa- m-n icon" onClick={clearSearch}></i>
        ) : (
          <i className="fas fa-search icon"></i>
        )}
      </div>
    </>
  );
};
