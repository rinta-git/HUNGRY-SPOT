import { isEmptyObject, MENU_IMG_URL_PREFIX } from "../../../utils/constants";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const MenuItem = ({
  item,
  showFullDesc,
  toggleDesc,
  addToCart,
  lastItem,
}) => {
  const rating = item?.card?.info?.ratings?.aggregatedRating;
  const hasRating = rating && !isEmptyObject(rating);
  const ratingValue = rating?.rating ?? 0;
  const ratingCount = hasRating ? `(${rating.ratingCountV2})` : "";
  const fullDesc = item?.card?.info?.description;
  const desc =
    showFullDesc === fullDesc ? fullDesc : `${fullDesc?.slice(0, 85)}...`;
  const hasDesc = Boolean(fullDesc);
  return (
    <>
      <div className="menu-item" key={item?.card?.info?.name}>
        <div className="menu-item-info">
          <h3>{item?.card?.info?.name}</h3>
          <p>
            <b>
              ₹{" "}
              {(item?.card?.info?.defaultPrice || item?.card?.info?.price) /
                100}
            </b>
          </p>
          {hasRating && (
            <p className="menu-rating">
              <b>
                <FontAwesomeIcon icon={faStar} className="star" /> {ratingValue}
              </b>{" "}
              {ratingCount}
            </p>
          )}
          {hasDesc && (
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
          )}
        </div>
        <div className="menu-item-img">
          <img
            className="item-img"
            src={`${MENU_IMG_URL_PREFIX}${item?.card?.info?.imageId}`}
            alt={item?.card?.info?.name}
            height="144"
          />
          <button
            className="add-btn"
            onClick={() => addToCart(item?.card?.info)}
          >
            Add +
          </button>
        </div>
      </div>
      {item?.card?.info?.name !== lastItem?.card?.info?.name && <hr />}
    </>
  );
};
