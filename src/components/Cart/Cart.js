import { useDispatch, useSelector } from "react-redux";
import { EmptyCart } from "./EmptyCart";
import { MenuItem } from "../DetailsPage/Menu/MenuItem";
import {
  clearCart,
  removeFromCart,
  updateQty,
} from "../DetailsPage/resDetailsSlice";
import { getCartTotalCount, getSubTotal, notify } from "../../utils/common";
import {
  CART_CLEAR_MSG,
  CART_REMOVE_MSG,
  CART_UPDATE_MSG,
  DELIVERY_FEE,
  PLATFORM_FEE,
} from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";

export const Cart = () => {
  const { cartItems, resInfo } = useSelector((store) => store.resDetails);
  const lastItem = cartItems[cartItems.length - 1];
  const dispatch = useDispatch();
  const handleQtyInc = (item) => {
    dispatch(updateQty({ ...item, count: item.count + 1 }));
    notify(CART_UPDATE_MSG);
  };
  const handleQtyDec = (item) => {
    dispatch(updateQty({ ...item, count: item.count - 1 }));
    notify(CART_UPDATE_MSG);
  };
  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
    notify(CART_REMOVE_MSG);
  };
  const totalItems = getCartTotalCount(cartItems);
  const subTotal = getSubTotal(cartItems);
  const totalPayable = subTotal + DELIVERY_FEE + PLATFORM_FEE;
  const handleClearCart = () => {
    dispatch(clearCart());
    notify(CART_CLEAR_MSG);
  };

  if (!cartItems?.length) {
    return <EmptyCart />;
  }
  return (
    <>
      <main className="content">
        <h1 className="order-list-title">Shopping Cart</h1>
        <hr />
        <div className="my-orders">
          <section className="order-list">
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
                      lastItem={lastItem}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <section className="billing-section">
            <div className="price-section">
              <h1 className="res-title">{resInfo.name}</h1>
              <p className="location">
                <i>
                  {resInfo.area}, {resInfo.city}
                </i>
              </p>
              <hr />
              <div className="single-item-price">
                {cartItems.map((item) => {
                  return (
                    <div className="items-list">
                      <span className="ordered-item">
                        {item?.card?.info?.name} * <b>{item?.count}</b>
                      </span>
                      <span className="ordered-item price">
                        ₹
                        {item?.count *
                          ((item?.card?.info?.defaultPrice ||
                            item?.card?.info?.price) /
                            100)}
                      </span>
                    </div>
                  );
                })}
              </div>
              <h2 className="bill">Bill Details</h2>
              <div className="rate">
                <span>Item Total</span>
                <span>₹{subTotal}</span>
              </div>
              <div className="rate delivery-fee">
                <span class="tooltip-container">
                  Delivery Fee | 50.8 kms{" "}
                  <div class="tooltip-icon">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Standard Fee: ₹20"
                      data-tooltip-place="top"
                    >
                      i
                    </a>
                    <Tooltip id="my-tooltip" />
                  </div>
                </span>
                <span>₹{DELIVERY_FEE}</span>
              </div>
              <div className="rate platform-fee">
                <span class="tooltip-container">
                  Platform fee
                  <div class="tooltip-icon">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="This fee help us operate and improve our platform."
                      data-tooltip-place="top"
                    >
                      i
                    </a>
                    <Tooltip id="my-tooltip" />
                  </div>
                </span>
                <span>₹{PLATFORM_FEE}</span>
              </div>
              <hr style={{ margin: "1rem 0" }} />
              <div className="rate total-pay">
                <span>
                  <b>To Pay</b>
                </span>
                <span>
                  <b>₹{totalPayable}</b>
                </span>
              </div>
            </div>
            <div className="proceed-payment">
              <Link to="/checkout">
                <button className="proceed-btn">
                  Pay Now <FontAwesomeIcon icon={faAnglesRight} />
                </button>
              </Link>
            </div>
            <div className="proceed-payment">
              <button className="proceed-btn" onClick={handleClearCart}>
                Clear Cart
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
