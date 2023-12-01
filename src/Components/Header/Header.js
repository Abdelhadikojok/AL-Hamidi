import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/Asset 1.png";
import x from "../../assets/x-icon.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldHeaderBeActive = scrollY > 150;

      setIsHeaderActive(shouldHeaderBeActive);
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContainerClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <>
      <div
        className={`${styles.header} ${isHeaderActive ? styles.active : ""}`}
      >
        <div className={styles.container}>
          <div className={`${styles.logo} ${styles.bigscreen}`}>
            <img src={Logo} alt="logo" />
          </div>

          <div
            className={`${styles["nav-bar"]} ${isOpen ? styles.active : ""} `}
          >
            <div className={`${styles.logo} ${styles.smallscreen}`}>
              <img src={Logo} alt="logo" />
            </div>

            <button className={styles.exit} onClick={handleContainerClick}>
              <img src={x} alt="exit-logo" />
            </button>

            <ul>
              <li>
                <a
                  onClick={handleContainerClick}
                  href="#Home"
                  className={`${styles["navbar-link"]} ${styles["hover-underline"]} ${styles.active}`}
                >
                  <div className={styles.separator}></div>
                  <span className="span">Home</span>
                </a>
              </li>
              <li>
                <a
                  onClick={handleContainerClick}
                  href="#Menu"
                  className={`${styles["navbar-link"]} ${styles["hover-underline"]} `}
                >
                  <div className={styles.separator}></div>
                  <span className="span">Menu</span>
                </a>
              </li>
              <li>
                <a
                  onClick={handleContainerClick}
                  href="#AboutUs"
                  className={`${styles["navbar-link"]} ${styles["hover-underline"]} `}
                >
                  <div className={styles.separator}></div>
                  <span className="span">About Us</span>
                </a>
              </li>
              <li>
                <a
                  onClick={handleContainerClick}
                  href="#Location"
                  className={`${styles["navbar-link"]} ${styles["hover-underline"]} `}
                >
                  <div className={styles.separator}></div>
                  <span className="span">Contact</span>
                </a>
              </li>
              <li>
                <a
                  onClick={handleContainerClick}
                  href="#Location"
                  className={`${styles["navbar-link"]} ${styles["hover-underline"]} `}
                >
                  <div className={styles.separator}></div>
                  <span className="span">Location</span>
                </a>
              </li>
            </ul>

            <div className={styles["text-center"]}>
              <p className={`headline-1 ${styles["navbar-title"]}`}>Visit Us</p>

              <div className="body-4">
                Tripoli - monla street-face <br />
                to chater hassan
              </div>

              <p className="body-4 navbar-text">Open: 6.00 am to 4.00 pm</p>

              <div className="separator"></div>

              <a
                onClick={handleContainerClick}
                href="https://api.whatsapp.com/send?phone=71942435"
                target="_blank"
                style={{ color: "var(--gold-crayola)" }}
                className="body-1 contact-number hover-underline"
              >
                +961 71942435
              </a>
            </div>
          </div>

          <button
            className={styles["nav-open-btn"]}
            onClick={handleContainerClick}
          >
            <span className={`${styles.line} ${styles["line-1"]}`}></span>
            <span className={`${styles.line} ${styles["line-2"]}`}></span>
            <span className={`${styles.line} ${styles["line-3"]}`}></span>
          </button>

          <div className={styles.overLay}></div>
        </div>
      </div>
    </>
  );
}

export default Header;
