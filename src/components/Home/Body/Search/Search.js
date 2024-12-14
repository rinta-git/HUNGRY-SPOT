import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedList } from "../../../../utils/searchSortFilterUtils";
import { updateFilteredRestaurants } from "../restaurentSlice";

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const resList = useSelector(store => store?.restaurants?.items)
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      if(e.target.value){
        const searchedList = getSearchedList(e.target.value, resList);
        dispatch(updateFilteredRestaurants({filteredResList:searchedList}));
      }
      else{
        dispatch(updateFilteredRestaurants({filteredResList:resList}));
      }
    }
  }
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
        <i className="fas fa-search icon"></i>
      </div>
    </>
  );
};
