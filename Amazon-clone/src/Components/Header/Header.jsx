import React, { useRef, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { TiThMenu, TiLocationOutline } from "react-icons/ti";
import brand from "../../assets/image/amazonbrand.png";
import { DataContext } from "../DataProvider/DataProvider"; // Ensure correct import
import classes from "./Header.module.css";
import { auth } from "../../Utility/firebase";

function Header() {
  const [state, dispatch] = useContext(DataContext); // Correct destructuring
  const { user, basket } = state; // Destructure user and basket from state
  const selectRef = useRef(null);
  const [selectWidth, setSelectWidth] = useState("auto");
  const dropdownIcon = <RiArrowDropDownFill className={classes.dropdownIcon} />;

  useEffect(() => {
    const adjustSelectWidth = () => {
      if (selectRef.current) {
        const option =
          selectRef.current.options[selectRef.current.selectedIndex];
        const tempDiv = document.createElement("div");
        tempDiv.style.position = "absolute";
        tempDiv.style.visibility = "hidden";
        tempDiv.style.height = "auto";
        tempDiv.style.width = "auto";
        tempDiv.style.whiteSpace = "nowrap";
        tempDiv.innerHTML = option.text;
        document.body.appendChild(tempDiv);
        const width = tempDiv.clientWidth + 20; // Add some padding
        document.body.removeChild(tempDiv);
        setSelectWidth(`${width}px`);
      }
    };

    adjustSelectWidth();

    const handleSelectChange = (e) => {
      if (e.target.selectedIndex === 0) {
        e.target.selectedIndex = 1;
        const event = new Event("change", { bubbles: true });
        e.target.dispatchEvent(event);
      }
      adjustSelectWidth();
    };

    if (selectRef.current) {
      selectRef.current.addEventListener("change", handleSelectChange);
    }

    return () => {
      if (selectRef.current) {
        selectRef.current.removeEventListener("change", handleSelectChange);
      }
    };
  }, []);

  const options = [
    "All Departments",
    "Arts & Crafts",
    "Automotive",
    "Baby",
    "Beauty & Personal Care",
    "Books",
    "Boys' Fashion",
    "Computers",
    "Deals",
    "Digital Music",
    "Electronics",
    "Girls' Fashion",
    "Health & Household",
    "Home & Kitchen",
    "Industrial & Scientific",
    "Kindle Store",
    "Luggage",
    "Men's Fashion",
    "Movies & TV",
    "Music, CDs & Vinyl",
    "Pet Supplies",
    "Prime Video",
    "Software",
    "Sports & Outdoors",
    "Tools & Home Improvement",
    "Toys & Games",
    "Video Games",
    "Women's Fashion",
  ];

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      dispatch({
        type: "SET_USER",
        payload: null,
      });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className={classes.header_wrapper}>
      <div className={classes.nav_top_wrapper}>
        <div className={classes.nav_left_wrapper}>
          <div className={classes.logo}>
            <Link to="/">
              <img src={brand} alt="Brand" />
            </Link>
          </div>
          <div className={classes.delivery_address}>
            <Link to="" className={classes.delivery_to}>
              <p>Deliver to</p>
              <div className={classes.location}>
                <span>
                  <TiLocationOutline className={classes.gpsIcon} />
                </span>
                <span> Ethiopia</span>
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.nav_search_wrapper}>
          <div
            className={classes.select_container}
            style={{ width: selectWidth }}
          >
            <select
              ref={selectRef}
              defaultValue="All"
              className={classes.selection}
            >
              <option disabled hidden>
                All 
              </option>

              {options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
          <input type="text" placeholder="Search Amazon" />
          <span>
            <IoSearch className={classes.search_icon} />
          </span>
        </div>
        <div className={classes.nav_right_wrapper}>
          <div className={classes.lang}>
            <Link to="/language">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt=""
              />
              <span >EN</span>
              <RiArrowDropDownFill className={classes.dropdown_icon_small} />
            </Link>
          </div>
          <div className={classes.account}>
            {user ? (
              <div>
                <p>Hello {user.email.split("@")[0]}</p>
                <span
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default link behavior
                    handleSignOut();
                  }}
                  className={classes.signout}
                >
                  Sign Out
                </span>
              </div>
            ) : (
              <Link to="/auth">
                <p>Hello, sign in</p>
                <span>Account & Lists</span>
              </Link>
            )}
          </div>
          <div className={classes.order}>
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
          </div>
          <div className={classes.cart}>
            <Link to="/cart">
              <FiShoppingCart className={classes.cart_icon} />
              <span className={classes.added_items}>{basket.length}</span>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.nav_bottom_wrapper}>
        <div className={classes.nav_main}>
          <div className={classes.nav_menu}>
            <span className={classes.menu_icon}>
              <TiThMenu />
            </span>
            <Link to="">All</Link>
          </div>
          <div className={classes.nav_shop}>
            <ul className={classes.shop_list}>
              <li>
                <Link to="">Today's Deals</Link>
              </li>
              <li>
                <Link to="">Customer Service</Link>
              </li>
              <li>
                <Link to="">Registry</Link>
              </li>
              <li>
                <Link to="">Gift Cards</Link>
              </li>
              <li>
                <Link to="">Sell</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
