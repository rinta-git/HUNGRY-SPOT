import { useDispatch, useSelector } from "react-redux";
import { EmptyCart } from "./EmptyCart";
import { MenuItem } from "../DetailsPage/Menu/MenuItem";
import { removeFromCart, updateQty } from "../DetailsPage/resDetailsSlice";

export const Cart = () => {
  const { cartItems } = useSelector((store) => store.resDetails);
  const dispatch = useDispatch();
  const handleQtyInc = (item) => {
    dispatch(updateQty({ ...item, count: item.count + 1 }));
  };
  const handleQtyDec = (item) => {
    dispatch(updateQty({ ...item, count: item.count - 1 }));
  };
  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };
  if (!cartItems?.length) {
    return <EmptyCart />;
  }
  return (
    <>
      <div className="my-orders">
        <div className="order-list">
          <h1>Shopping Cart</h1>
          <hr />
          <div className="menu">
            <div className="menu-card">
              {cartItems.map((item) => {
                return (
                  <MenuItem
                    key={item.card.info.id}
                    item={item}
                    handleQtyInc={handleQtyInc}
                    handleQtyDec={handleQtyDec}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="price-section"></div>
      </div>
    </>
  );
};
