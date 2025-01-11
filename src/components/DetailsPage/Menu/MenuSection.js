import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem } from "./MenuItem";

export const MenuSection = ({
  card,
  accordion,
  toggleAccordion,
  showFullDesc,
  toggleDesc,
  addToCart,
}) => {
  const isActive = accordion === card?.title;
  const lastItem = card?.itemCards[card?.itemCards.length - 1];

  return (
    <div className="menu-card" key={card?.title}>
      <div className="menu-items-title" onClick={toggleAccordion(card?.title)}>
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
          {card?.itemCards?.map((item) => (
            <MenuItem
              key={item?.card?.info?.name}
              item={item}
              showFullDesc={showFullDesc}
              toggleDesc={toggleDesc}
              addToCart={addToCart}
              lastItem={lastItem}
            />
          ))}
        </div>
      )}
      <div className="category-seperator"></div>
    </div>
  );
};