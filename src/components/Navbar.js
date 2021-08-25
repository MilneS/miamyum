import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [showBurgerLinks, setShowBurgerLinks]=useState(false)
    const burgerHandler=()=>{
        setShowBurgerLinks(!showBurgerLinks)
    }
  return (
    <div className={classes.navContainer}>
      <div className={classes.burgerContainer}>
        <div onClick={burgerHandler} className= {`${classes.burger} ${showBurgerLinks && classes.burgerActive}`}>
          <div className={classes.burgerBarre} />
          <div className={classes.burgerBarre} />
          <div className={classes.burgerBarre} />
        </div>
        {showBurgerLinks &&
        <div className={classes.navLinksContainer}>
         <div onClick={burgerHandler} className={classes.navLinks}> <NavLink activeClassName={classes.active} to="/home">
            Home
          </NavLink></div>
          <div onClick={burgerHandler} className={classes.navLinks}> <NavLink activeClassName={classes.active} to="/about">
            About
          </NavLink></div>
          <div onClick={burgerHandler} className={classes.navLinks}> <NavLink activeClassName={classes.active} to="/Login">
            Login
          </NavLink></div>
        </div>
        }
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
