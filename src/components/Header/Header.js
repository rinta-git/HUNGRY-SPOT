import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <>
      <header>
        <section className="logo">
          <img
            src="https://png.pngtree.com/png-clipart/20230922/original/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_12522801.png"
            alt="hungry-spot-logo"
            width="130px"
            height="auto"
          />
         <h1>Hungry Spot</h1>
        </section>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
