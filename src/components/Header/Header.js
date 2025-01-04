import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export const Header = () => {
  const navRef = useRef();
  const menuRef = useRef();
  const toggleActive = () => {
    navRef.current.classList.toggle("active");
    menuRef.current.classList.toggle("active");
  }
  return (
    <>
      <header>
        <section className="logo">
          <img
            src="https://png.pngtree.com/png-clipart/20230922/original/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_12522801.png"
            alt="hungry-spot-logo"
            className="logo-img"
          />
         <h1>Hungry Spot</h1>
        </section>
        <nav>
        <div className="menu" ref={menuRef} onClick={toggleActive}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
          <ul className="nav-list" ref={navRef}>
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
