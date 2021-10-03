import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const [showBurgerLinks, setShowBurgerLinks] = useState(false);
  const loggedin = useSelector((state) => state.loggedin);
  const showlogin = useSelector((state) => state.showLoginComp);
  const token = useSelector((state) => state.showLoginComp);
  const dispatch = useDispatch();

  const showLoginHandler = () => {
    dispatch({ type: "showLogin" });
  };

  const logoutHandler = () => {
    dispatch({ type: "closeComm" });
    dispatch({ type: "getToken", token: null });
    !token && dispatch({ type: "logout" });
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    dispatch({ type: "getUserId", userId: null });
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
  };

  const burgerRef = useRef(null);
  // setShowBurgerLinks(false) when click outside nav
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (burgerRef.current !== null && !burgerRef.current.contains(e.target)) {
        setShowBurgerLinks(!showBurgerLinks);
      }
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

  const NavHandler = () => {
    dispatch({ type: "closeComm" });
  };
  return (
    <div className={classes.navContainer}>
      {/* ------BURGER------ */}
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
              <NavLink
                exact
                to="/photogallery"
                activeClassName={`${!showlogin && classes.active}`}
                onClick={NavHandler}
              >
                Home
              </NavLink>
            </div>

            {loggedin && (
              <div
                onClick={burgerHandler}
                className={`${classes.navLinks} ${classes.about}`}
              >
                <NavLink exact
                  to="/photogallery/allphotos"
                  activeClassName={`${!showlogin && classes.active}`}
                  onClick={NavHandler}
                >
                  All pics
                </NavLink>
              </div>
            )}
            {!loggedin && (
              <div onClick={burgerHandler} className={classes.navLinks}>
                <span
                  className={`${showlogin && classes.active}`}
                  onClick={showLoginHandler}
                >
                  Login
                </span>
              </div>
            )}
            {loggedin && (
              <div onClick={burgerHandler} className={classes.navLinks}>
                <span onClick={logoutHandler}>Logout</span>
              </div>
            )}
          </nav>
        )}
      </div>

      {/* ------NAV----- */}
      <div className={classes.liContainerLeft}>
        <NavLink
          exact
          to="/photogallery"
          activeClassName={`${!showlogin && classes.active}`}
          onClick={NavHandler}
        >
          Home
        </NavLink>
        {loggedin && (
          <NavLink
            exact
            to="/photogallery/allphotos"
            activeClassName={`${!showlogin && classes.active}`}
            onClick={NavHandler}
          >
            All photos
          </NavLink>
        )}
      </div>
      <div className={classes.liContainerRight}>
        {!loggedin && (
          <span
            className={`${showlogin && classes.active}`}
            onClick={showLoginHandler}
          >
            Login
          </span>
        )}
        {loggedin && <span onClick={logoutHandler}>Logout</span>}
      </div>
    </div>
  );
};

export default Navbar;
