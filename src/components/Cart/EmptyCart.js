import { Link } from "react-router";

export const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <img
        src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
        alt="empty bowl"
        width="168"
        height="auto"
      />
      <h2>Uh... Oh! You haven't added anything</h2>
      <button className="order-btn">
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          Order Now
        </Link>
      </button>
    </div>
  );
};
