import React from "react";
import { Link } from "react-router-dom";
import brand from "../../assets/image/amazonbrand.png";
import classes from "./FooterMiddle.module.css";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoIosGlobe } from "react-icons/io";
import { PiCaretUpDownFill } from "react-icons/pi";
function FooterMiddle() {
  return (
    <>
      <div className={classes.footer_container}>
        <span className={classes.logo_container}>
          <Link to="/">
            <img src={brand} alt="Brand" />
          </Link>
        </span>
        <div className={classes.language_container}>
          <Link to="/language">
            <IoIosGlobe className={classes.globe_icon} />
            English
<PiCaretUpDownFill className={classes.updown_icon_small} />
          </Link>
        </div>
        <div className={classes.currency_container}>
          <a href="">$ USD-U-S. Dollar</a>
        </div>
        <div className={classes.location_container}>
          <a href="">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt=""
            />
            United States
          </a>
        </div>
      </div>
    </>
  );
}

export default FooterMiddle;
