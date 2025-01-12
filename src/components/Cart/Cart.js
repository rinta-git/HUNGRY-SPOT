import { useSelector } from "react-redux";
import { EmptyCart } from "./EmptyCart";

export const Cart = () => {
  const { cartItems } = useSelector((store) => store.resDetails);

  !cartItems.length && <EmptyCart />
  return (<>
  <div className="my-orders">
    <div className="order-list">
        <h1>Shopping Cart</h1>
        <hr />
    </div>
    <div className="price-section"></div>
  </div>
  </>)
};
