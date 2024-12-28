import { Card } from "./Card/Card";
import { Sort } from "./Sort/Sort";
import { Filter } from "./Filter/Filter";
import { Search } from "./Search/Search";
import { useEffect, useState } from "react";
import { RES_LIST } from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurants } from "./restaurentSlice";
import { ShimmerCard } from "./Card/ShimmerCard";

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

  return (
    <>
      <main className="content">
        <section className="search-sort-filter">
          <section>
            <Sort />
          </section>
          <section>
            <Search />
          </section>
          <section className="filter-section">
            <Filter />
          </section>
        </section>
        <section className="cards">
          {!isFilterActive && !restaurants.length
            ? Array(20)
                .fill()
                .map((_, index) => <ShimmerCard key={index} />)
            : (isFilterActive || isSortingActive
                ? filteredRestaurants
                : restaurants
              )?.map((restaurant) => (
                <Card
                  key={restaurant?.info?.id}
                  restaurentName={restaurant?.info?.name}
                  resImg={restaurant?.info?.cloudinaryImageId}
                  rating={restaurant?.info?.avgRating}
                  time={restaurant?.info?.sla?.slaString}
                  cuisines={restaurant?.info?.cuisines}
                  location={restaurant?.info?.areaName}
                />
              ))}
        </section>
      </main>
    </>
  );
};
