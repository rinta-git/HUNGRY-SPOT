import {
  faChevronDown,
  faChevronUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { MENU_IMG_URL_PREFIX } from "../../../utils/constants";

export const Menu = ({ resMenu }) => {
  const { cards } = resMenu?.groupedCard?.cardGroupMap?.REGULAR || {};
  const [accordion, setAccordion] = useState(null);
  const [showFullDesc, setShowFullDesc] = useState(null);
  console.log("Menu cards:", cards);
  const toggleAccordion = (title) => () => {
    setAccordion((prev) => (prev === title ? null : title));
  };
  const toggleDesc = (desc) => {
    setShowFullDesc((prev) => (prev === desc ? null : desc));
  };
  const renderMenuList = (card) => {
    const isActive = accordion === card?.title;
    const lastItem = card?.itemCards[card?.itemCards.length - 1];
    return (
      <>
      <div className="menu-card" key={card?.title}>
        <div
          className="menu-items-title"
          onClick={toggleAccordion(card?.title)}
        >
          <h2>
            {card?.title} ({card?.itemCards?.length})
          </h2>
          {isActive ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
        {isActive && (
          <div className="menu-items">
            {card?.itemCards?.map((item) => {
              const fullDesc = item?.card?.info?.description;
              const desc =
                showFullDesc === fullDesc
                  ? fullDesc
                  : fullDesc.slice(0, 85) + "...";
              return (
                <>
                  <div className="menu-item" key={item?.card?.info?.name}>
                    <div className="menu-item-info">
                      <h3>{item?.card?.info?.name}</h3>
                      <p>
                        <b>
                          ₹{" "}
                          {(item?.card?.info?.defaultPrice
                            ? item?.card?.info?.defaultPrice
                            : item?.card?.info?.price) / 100}
                        </b>
                      </p>
                      {Object.keys(item?.card?.info?.ratings?.aggregatedRating)
                        .length ? (
                        <p className="menu-rating">
                          <b>
                            <FontAwesomeIcon icon={faStar} className="star" />{" "}
                            {
                              item?.card?.info?.ratings?.aggregatedRating
                                ?.rating
                            }
                          </b>{" "}
                          (
                          {
                            item?.card?.info?.ratings?.aggregatedRating
                              ?.ratingCountV2
                          }
                          )
                        </p>
                      ) : (
                        ""
                      )}
                      <p className="menu-desc">
                        {desc}
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleDesc(item?.card?.info?.description);
                          }}
                        >
                          <b>{showFullDesc === fullDesc ? " less" : "more"}</b>
                        </a>
                      </p>
                    </div>
                    <div className="menu-item-img">
                      <img
                        className="item-img"
                        src={`${MENU_IMG_URL_PREFIX}${item?.card?.info?.imageId}`}
                        alt={item?.card?.info?.name}
                        height="144"
                      />
                      <button className="add-btn">Add +</button>
                    </div>
                  </div>
                 { item?.card?.info?.name !== lastItem?.card?.info?.name ? <hr /> : "" } 
                </>
              );
            })}
          </div>
        )}
      </div>
      <div className="category-seperator"></div>
      </>
    );
  };
  return (
    <>
      <h1 style={{marginBottom:"1rem"}}>--- Menu ---</h1>
      <hr />
      <section className="menu-wrapper">
        {cards?.map((item) =>
          item.card.card.hasOwnProperty("itemCards")
            ? renderMenuList(item.card.card)
            : ""
        )}
      </section>
    </>
  );
};
