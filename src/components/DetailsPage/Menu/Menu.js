import { useState } from "react";
import { MenuSection } from "./MenuSection";
import { useDispatch } from "react-redux";
import { addToCart } from "../resDetailsSlice";

export const Menu = ({ resMenu }) => {
  const { cards } = resMenu?.groupedCard?.cardGroupMap?.REGULAR || {};
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
    // Add to cart functionality here
    dispatch(addToCart(item));
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
