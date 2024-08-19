import React from "react";
import styles from "./Footer.module.css";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";
const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footermiddle}>
          <FooterTop />

          <FooterMiddle />
        </div>
        <div className={styles.footer_link_container}>
          <div className={styles.footer}>
            <div className={styles.footerLinks}>
              <div className={styles.footerColumn}>
                <a href="#" className={styles.navLink}>
                  Amazon Music
                  <br />
                  <span className={styles.navFooterDescText}>
                    Stream millions of songs
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  AmazonGlobal
                  <br />
                  <span className={styles.navFooterDescText}>
                    Ship Orders Internationally
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  IMDbPro
                  <br />
                  <span className={styles.navFooterDescText}>
                    Get Info Entertainment Professionals Need
                  </span>
                </a>
              </div>
              <div className={styles.footerColumn}>
                <a href="#" className={styles.navLink}>
                  Amazon Ads
                  <br />
                  <span className={styles.navFooterDescText}>
                    Reach customers wherever they spend their time
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Home Services
                  <br />
                  <span className={styles.navFooterDescText}>
                    Experienced Pros Happiness Guarantee
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Kindle Direct Publishing
                  <br />
                  <span className={styles.navFooterDescText}>
                    Indie Digital & Print Publishing Made Easy
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  eero WiFi
                  <br />
                  <span className={styles.navFooterDescText}>
                    Stream 4K Video in Every Room
                  </span>
                </a>
              </div>
              <div className={styles.footerColumn}>
                <a href="#" className={styles.navLink}>
                  6pm
                  <br />
                  <span className={styles.navFooterDescText}>
                    Score deals on fashion brands
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Amazon Web Services
                  <br />
                  <span className={styles.navFooterDescText}>
                    Scalable Cloud Computing Services
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Prime Video Direct
                  <br />
                  <span className={styles.navFooterDescText}>
                    Video Distribution Made Easy
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Blink
                  <br />
                  <span className={styles.navFooterDescText}>
                    Smart Security for Every Home
                  </span>
                </a>
              </div>
              <div className={styles.footerColumn}>
                <a href="#" className={styles.navLink}>
                  AbeBooks
                  <br />
                  <span className={styles.navFooterDescText}>
                    Books, art & collectibles
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Audible
                  <br />
                  <span className={styles.navFooterDescText}>
                    Listen to Books & Original Audio Performances
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Shopbop
                  <br />
                  <span className={styles.navFooterDescText}>
                    Designer Fashion Brands
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Neighbors App
                  <br />
                  <span className={styles.navFooterDescText}>
                    Real-Time Crime & Safety Alerts
                  </span>
                </a>
              </div>
              <div className={styles.footerColumn}>
                <a href="#" className={styles.navLink}>
                  ACX
                  <br />
                  <span className={styles.navFooterDescText}>
                    Audiobook Publishing Made Easy
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Box Office Mojo
                  <br />
                  <span className={styles.navFooterDescText}>
                    Find Movie Box Office Data
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Woot!
                  <br />
                  <span className={styles.navFooterDescText}>
                    Deals and Shenanigans
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Amazon Subscription Boxes
                  <br />
                  <span className={styles.navFooterDescText}>
                    Top subscription boxes – right to your door
                  </span>
                </a>
              </div>
              <div className={styles.footerColumn}>
                <a href="#" className={styles.navLink}>
                  Sell on Amazon
                  <br />
                  <span className={styles.navFooterDescText}>
                    Start a Selling Account
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Goodreads
                  <br />
                  <span className={styles.navFooterDescText}>
                    Book reviews & recommendations
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Zappos
                  <br />
                  <span className={styles.navFooterDescText}>
                    Shoes & Clothing
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  PillPack
                  <br />
                  <span className={styles.navFooterDescText}>
                    Pharmacy Simplified
                  </span>
                </a>
              </div>
              <div className={styles.footerColumn}>
                <a href="#" className={styles.navLink}>
                  Amazon Business
                  <br />
                  <span className={styles.navFooterDescText}>
                    Everything For Your Business
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  IMDb
                  <br />
                  <span className={styles.navFooterDescText}>
                    Movies, TV & Celebrities
                  </span>
                </a>
                <a href="#" className={styles.navLink}>
                  Ring
                  <br />
                  <span className={styles.navFooterDescText}>
                    Smart Home Security Systems
                  </span>
                </a>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <div className={styles.footerBottomLinks}>
                <a href="#">Conditions of Use</a>
                <a href="#">Privacy Notice</a>
                <a href="#">Consumer Health Data Privacy Disclosure</a>
                <a href="#">
                  Your Ads Privacy Choices{" "}
                  <span className={styles.navicon_ccba} id="nav_sprite">
                    {" "}
                  </span>
                </a>
              </div>
              <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
