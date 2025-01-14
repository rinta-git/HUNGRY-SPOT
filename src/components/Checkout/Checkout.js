import { Link } from "react-router";

export const Checkout = () => {
  return (
    <>
      <main className="content">
        <div className="checkout">
          <h1>Your order has been confirmed!</h1>
          <p>Thank you for ordering.</p>
          <button className="order-btn">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Order Again
            </Link>
          </button>
        </div>
      </main>
    </>
  );
};
