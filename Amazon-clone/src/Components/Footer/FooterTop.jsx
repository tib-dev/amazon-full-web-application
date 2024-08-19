import React from "react";
import styles from "./FooterTop.module.css"; // Import the CSS module

const FooterTop = () => {
  return (
    <footer className={styles.footerTop}>
      <div className={styles.back_to_top_link}>
        <a href="#" className={styles.backToTop}>
          Back to top
        </a>
      </div>
      <div className={styles.navFooterLink_container}>
        <div className={styles.navFooterLinkCol}>
          <div
            className={styles.navFooterColHead}
            role="heading"
            aria-level="6"
          >
            <h3>Get to Know Us</h3>
          </div>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Amazon Devices</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>

        <div className={styles.navFooterColSpacerInner}></div>

        <div className={styles.navFooterLinkCol}>
          <div
            className={styles.navFooterColHead}
            role="heading"
            aria-level="6"
          >
            <h3>Make Money with Us</h3>
          </div>
          <ul>
            <li>
              <a href="#">Sell products on Amazon</a>
            </li>
            <li>
              <a href="#">Sell on Amazon Business</a>
            </li>
            <li>
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Self-Publish with Us</a>
            </li>
            <li>
              <a href="#">Host an Amazon Hub</a>
            </li>
            <li>
              <a href="#">See More Make Money with Us</a>
            </li>
          </ul>
        </div>

        <div className={styles.navFooterColSpacerInner}></div>

        <div className={styles.navFooterLinkCol}>
          <div
            className={styles.navFooterColHead}
            role="heading"
            aria-level="6"
          >
            <h3> Amazon Payment Products</h3>
          </div>
          <ul>
            <li>
              <a href="#">Amazon Business Card</a>
            </li>
            <li>
              <a href="#">Shop with Points</a>
            </li>
            <li>
              <a href="#">Reload Your Balance</a>
            </li>
            <li>
              <a href="#">Amazon Currency Converter</a>
            </li>
          </ul>
        </div>

        <div className={styles.navFooterColSpacerInner}></div>

        <div className={styles.navFooterLinkCol}>
          <div
            className={styles.navFooterColHead}
            role="heading"
            aria-level="6"
          >
            <h3> Let Us Help You</h3>
          </div>
          <ul>
            <li>
              <a href="#">Amazon and COVID-19</a>
            </li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="#">Returns & Replacements</a>
            </li>
            <li>
              <a href="#">Manage Your Content and Devices</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
        <div className={styles.horizonatal_line}></div>
      </div>
    </footer>
  );
};

export default FooterTop;
