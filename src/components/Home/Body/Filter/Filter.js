import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FILTERS } from "../../../../utils/constants";
import {
  filterRestaurentList,
  getSelectedFilterOptions,
} from "../../../../utils/searchSortFilterUtils";
import { useDispatch, useSelector } from "react-redux";
import { updateFilteredRestaurants } from "../restaurentSlice";

export const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState("Ratings");
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState([]);
  const [checkState, setCheckState] = useState({});
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const resList = useSelector((store) => store.restaurants.items);
  const dispatch = useDispatch();

  const handleFilters = (e) => {
    getSelectedFilterOptions(e, filters, setFilters, selectedFilter);
    setCheckState((prevState) => ({
      ...prevState,
      [e.target.value]: e.target.checked,
    }));
  };

  const applyFilters = () => {
    const filteredResList = filterRestaurentList(filters, resList);
    dispatch(updateFilteredRestaurants(filteredResList));
    setShowFilter(!showFilter);
    setIsFilterApplied(true);
  };

  const clearFilters = () => {
    setFilters([]);
    setCheckState({});
    dispatch(updateFilteredRestaurants(resList));
    setIsFilterApplied(false);
    setShowFilter(!showFilter);
  };
  
  const isFiltersSelected = Object.values(checkState).some(Boolean);
  return (
    <>
      <button
        className="primary-btn"
        onClick={() => setShowFilter(!showFilter)}
      >
        Filter
      </button>
      <section className={`filter-box ${showFilter ? "show" : "hide"}`}>
        <div className="title-section">
          <h1>Filter</h1>
          <FontAwesomeIcon
            className="close-icon"
            icon={faWindowClose}
            onClick={() => setShowFilter(!showFilter)}
          />
        </div>
        <hr />
        <div className="filter-options">
          <ul className="filter-list">
            {Object.keys(FILTERS)?.map((filter) => (
              <li
                key={filter}
                className={`filter-item ${
                  selectedFilter === filter ? "selected" : ""
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </li>
            ))}
          </ul>
          <div className="selected-filter-section">
            {FILTERS[selectedFilter]?.map((option) => (
              <label key={option.id}>
                <input
                  type="checkbox"
                  value={option.value}
                  checked={checkState[option.value] || false}
                  onChange={handleFilters}
                />
                {option.value}
              </label>
            ))}
          </div>
        </div>
        <hr />
        <div className="filter-buttons">
          <button className="primary-btn" disabled={!isFilterApplied} onClick={clearFilters}>
            Clear
          </button>
          <button className='primary-btn' disabled={!isFiltersSelected} onClick={applyFilters}>
            Apply
          </button>
        </div>
      </section>
    </>
  );
};
