import { Card } from "./Card/Card";
import { Sort } from "./Sort/Sort";
import { Filter } from "./Filter/Filter";
import { Search } from "./Search/Search";
import { useEffect, useState } from "react";
import { RES_LIST } from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurants } from "./restaurentSlice";
import { ShimmerCard } from "./Card/ShimmerCard";
import { NothingPage } from "./NothingFound/NothingPage";
import { Link } from "react-router";

export const Restaurents = () => {
  const [restaurants, setRestaurents] = useState([]);
  const dispatch = useDispatch();
  const filteredRestaurants = useSelector(
    (store) => store?.restaurants?.filteredRestaurants
  );
  const isFilterActive = useSelector(
    (store) => store?.restaurants?.filtersActive
  );
  const isSortingActive = useSelector(
    (store) => store?.restaurants?.isSortingActive
  );
  const isSearchActive = useSelector(
    (store) => store?.restaurants?.isSearchActive
  );

  useEffect(() => {
    fetchRestaurents(RES_LIST);
  }, []);

  const fetchRestaurents = async (RES_LIST) => {
    try {
      const data = await fetch(RES_LIST);
      const json = await data.json();
      const resList =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurents(resList);
      dispatch(addRestaurants(resList));
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const renderResCards = (restaurants) => {
    return (
      <section className="cards">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restuarant/${restaurant?.info?.id}`}
          >
            <Card
              restaurentName={restaurant?.info?.name}
              resImg={restaurant?.info?.cloudinaryImageId}
              rating={restaurant?.info?.avgRating}
              time={restaurant?.info?.sla?.slaString}
              cuisines={restaurant?.info?.cuisines}
              location={restaurant?.info?.areaName}
            />
          </Link>
        ))}
      </section>
    );
  };

  const renderContent = () => {
    //show shimmer cards till data loads
    if (!isFilterActive && !restaurants?.length) {
      return (
        <section className="cards">
          {Array(20)
            .fill()
            .map((_, index) => (
              <ShimmerCard key={index} />
            ))}
        </section>
      );
    }
    //if no item found
    if (
      (isFilterActive || isSortingActive || isSearchActive) &&
      !filteredRestaurants.length
    ) {
      return <NothingPage />;
    }
    return renderResCards(
      isFilterActive || isSortingActive || isSearchActive
        ? filteredRestaurants
        : restaurants
    );
  };

  return (
    <>
      <main className="content">
        <section className="search-sort-filter">
          <section className="sort-section">
            <Sort />
          </section>
          <section className="search-section">
            <Search />
          </section>
          <section className="filter-section">
            <Filter />
          </section>
        </section>
        {renderContent()}
      </main>
    </>
  );
};
