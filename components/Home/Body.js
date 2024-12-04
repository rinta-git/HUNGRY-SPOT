import { Card } from "./Card";
import { Sort } from "./Sort";
import { Filter } from "./Filter";
import { Search } from "./Search";
import { useEffect, useMemo, useState } from "react";
import { RES_LIST } from "../../utils/constants";

export const Body = () => {
  const [restaurants, setRestaurents] = useState([]);
  useEffect(() => {
    fetchRestaurents(RES_LIST);
  }, []);

  const fetchRestaurents = async (RES_LIST) => {
    try {
      const data = await fetch(RES_LIST);
      const json = await data.json();
      setRestaurents(json?.data?.cards || []);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const restuarentList = useMemo(() => {
    return (
      restaurants?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      []
    );
  }, [restaurants]);

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
          <section>
            <Filter />
          </section>
        </section>
        <section className="cards">
          {restuarentList?.map((restaurant) => (
            <Card
              key={restaurant?.info?.id}
              restaurentName={restaurant?.info?.name}
              resImg={restaurant?.info?.cloudinaryImageId}
              rating={restaurant?.info?.avgRating}
              time={restaurant?.info?.sla?.slaString}
              cuisines={restaurant?.info?.cuisines}
              location={restaurant?.info?.locality}
            />
          ))}
        </section>
      </main>
    </>
  );
};
