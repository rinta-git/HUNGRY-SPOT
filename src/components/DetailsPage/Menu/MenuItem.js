import { isEmptyObject, MENU_IMG_URL_PREFIX } from "../../../utils/constants";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router";
export const MenuItem = ({
  item,
  showFullDesc,
  toggleDesc,
  addToCart,
  lastItem,
  handleQtyInc,
  handleQtyDec,
  handleDelete,
}) => {
  const location = useLocation();
  const isCartPage = location.pathname.includes("/cart");
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
          {hasDesc && !isCartPage && (
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
          {isCartPage ? (
            <div className="change-qty-btn add-btn">
              {item?.count ? (
                <div className="change-btn" onClick={() => handleQtyDec(item)}>
                  -
                </div>
              ) : (
                <div className="change-btn" onClick={() => handleDelete(item)}>
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              )}
              <div>{item?.count}</div>
              <div className="change-btn" onClick={() => handleQtyInc(item)}>
                +
              </div>
            </div>
          ) : (
            <button className="add-btn" onClick={() => addToCart(item)}>
              Add +
            </button>
          )}
        </div>
      </div>
      {item?.card?.info?.name !== lastItem?.card?.info?.name && <hr />}
    </>
  );
};
