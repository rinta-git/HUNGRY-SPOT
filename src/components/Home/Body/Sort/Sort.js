import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SORT_OPTIONS } from "../../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getSortedList } from "../../../../utils/searchSortFilterUtils";
import { updateFilteredRestaurants } from "../restaurentSlice";

export const Sort = () => {
  const [showSort, setShowSort] = useState(false);
  const [selectedOption, setSelectedOption] = useState(SORT_OPTIONS[0]);
  const resList = useSelector((store) => store?.restaurants?.items);
  const dispatch = useDispatch();

  const handleSort = () => {
    const sortedList = getSortedList(selectedOption, resList);
    dispatch(updateFilteredRestaurants({filteredResList:sortedList, isSorted:true }));
    setShowSort(!showSort);
  };

  return (
    <>
      <button className="primary-btn" onClick={() => setShowSort(!showSort)}>
        Sort
      </button>
      <section className={`sort-box ${showSort ? "show" : "hide"}`}>
        <div className="title-section">
          <h1>Sort by</h1>
          <FontAwesomeIcon
            className="close-icon"
            icon={faWindowClose}
            onClick={() => setShowSort(!showSort)}
          />
        </div>
        <hr />
        <div className="sort-options">
          {SORT_OPTIONS?.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <hr />
        <div className="sort-apply-btn">
          <button className="primary-btn" onClick={handleSort}>
            Apply
          </button>
        </div>
      </section>
    </>
  );
};
