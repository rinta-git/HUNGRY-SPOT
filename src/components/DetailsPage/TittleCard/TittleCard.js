import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addResInfo } from "../resDetailsSlice";

export const TittleCard = ({ resDetails }) => {
  const {
    name,
    avgRating,
    areaName,
    locality,
    city,
    sla: { slaString: time } = {},
    cuisines,
    totalRatingsString,
  } = resDetails?.card?.card?.info || {};
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(addResInfo({ name, areaName, city }));
  // },[])
  return (
    <>
      <section className="res-card">
        <div className="res-details">
        <div className="card-tittle">
          <h1>{name}</h1>
        </div>
        <div className="card-details">
          <h1 className="location">
            {locality + ", " + areaName + ", " + city}
          </h1>
          <h2 className="ratingTiming">
            <span>
              <FontAwesomeIcon icon={faStar} className="star" /> {avgRating}
            </span>
            <span>{" (" + totalRatingsString+")  "}</span>
            <span> • </span>
            <span>{time.toLowerCase()}</span>
          </h2>
          <h3 className="Cuisines">{cuisines?.join(",")}</h3>
        </div>
        </div>
      </section>
    </>
  );
};
