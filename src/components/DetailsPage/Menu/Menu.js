import { use, useState } from "react";
import { MenuSection } from "./MenuSection";
import { useDispatch, useSelector } from "react-redux";
import { addResInfo, addToCart } from "../resDetailsSlice";
import { notify } from "../../../utils/common";
import { CART_ADD_MSG } from "../../../utils/constants";

export const Menu = ({ resMenu, resInfo, onShow }) => {
  const { cards } = resMenu?.groupedCard?.cardGroupMap?.REGULAR || {};
  const res = useSelector((store) => store.resDetails.resInfo);
  const cartItems = useSelector((store) => store.resDetails.cartItems);
  const restaurantInfo = {
    id: resInfo.id,
    name: resInfo.name,
    area: resInfo.areaName,
    city: resInfo.city,
  };
  const [accordion, setAccordion] = useState(null);
  const [showFullDesc, setShowFullDesc] = useState(null);
  const dispatch = useDispatch();
  const toggleAccordion = (title) => () => {
    setAccordion((prev) => (prev === title ? null : title));
  };

  const toggleDesc = (desc) => {
    setShowFullDesc((prev) => (prev === desc ? null : desc));
  };

  const handleAddToCart = (item) => {
    const currentId = res?.id;
    // Add to cart if cart is empty
    if (!currentId) {
      dispatch(addResInfo(restaurantInfo));
      dispatch(addToCart(item));
      notify(CART_ADD_MSG);
    }
    // Add to cart if order is from the same restaurant
    else if (currentId === restaurantInfo.id) {
      dispatch(addToCart(item));
      notify(CART_ADD_MSG);
    }
    // Replace cart if order is from a different restaurant
    else if (cartItems.length && currentId !== restaurantInfo.id) {
      onShow();
    }
  };

  return (
    <>
      <h1 style={{ marginBottom: "1rem" }}>--- Menu ---</h1>
      <hr />
      <section className="menu-wrapper">
        {cards?.map((item) =>
          item.card.card.hasOwnProperty("itemCards") ? (
            <MenuSection
              key={item.card.card.title}
              card={item.card.card}
              accordion={accordion}
              toggleAccordion={toggleAccordion}
              showFullDesc={showFullDesc}
              toggleDesc={toggleDesc}
              addToCart={handleAddToCart}
            />
          ) : null
        )}
      </section>
    </>
  );
};
