import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [showBurgerLinks, setShowBurgerLinks] = useState(false);
  const burgerRef = useRef(null);

  // setShowBurgerLinks(false) when click outside nav
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (burgerRef.current !== null && !burgerRef.current.contains(e.target)) {
        setShowBurgerLinks(!showBurgerLinks);
      }
      console.log(e);
    };
    if (showBurgerLinks) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [showBurgerLinks]);

  // toggle showBurgerLinks onClick
  const burgerHandler = () => {
    setShowBurgerLinks(!showBurgerLinks);
  };
  return (
    <div className={classes.navContainer}>
      <div className={classes.burgerContainer}>
        <div
          onClick={burgerHandler}
          className={`${classes.burger} ${
            showBurgerLinks && classes.burgerActive
          }`}
        >
          <div className={classes.burgerBarre} />
          <div className={classes.burgerBarre} />
          <div className={classes.burgerBarre} />
        </div>
        {showBurgerLinks && (
          <nav ref={burgerRef}>
            <div onClick={burgerHandler} className={classes.navLinks}>
              <NavLink activeClassName={classes.active} to="/home">
                Home
              </NavLink>
            </div>
            <div
              onClick={burgerHandler}
              className={`${classes.navLinks} ${classes.about}`}
            >
              <NavLink activeClassName={classes.active} to="/about">
                About
              </NavLink>
            </div>
            <div onClick={burgerHandler} className={classes.navLinks}>
              <NavLink activeClassName={classes.active} to="/Login">
                Login
              </NavLink>
            </div>
          </nav>
        )}
      </div>

      {/* ----------- */}
      <div className={classes.liContainerLeft}>
        <NavLink activeClassName={classes.active} to="/home">
          Home
        </NavLink>
        <NavLink activeClassName={classes.active} to="/about">
          About
        </NavLink>
      </div>
      <div className={classes.liContainerRight}>
        <NavLink activeClassName={classes.active} to="/Login">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
