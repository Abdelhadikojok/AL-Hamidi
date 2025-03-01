import { useEffect, useState } from "react";
import styles from "./Top.module.css";
import PhoneIcone from "../../assets/phone-icon.svg";

function TopBar() {
  const [isTopBarActive, setIsTopBarActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldTopBarBeActive = scrollY > 30;

      setIsTopBarActive(shouldTopBarBeActive);
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const phoneNumber = "71942435"; // Replace with the desired phone number

  return (
    <div className={`${styles.topbar} ${isTopBarActive ? styles.active : ""}`}>
      <div className={styles.container}>
        <div className={styles["left-topbar"]}>
          <div className={styles["topbar-location"]}>
            {/* <img
                src="../../../public/assets/location-pin-svgrepo-com.svg"
                alt="Location Pin"
              /> */}
            <span className={styles["topbar-item"]}>
              Tripoli - monla street-face to chater hassan
            </span>
          </div>
          <div className="separator"></div>
          <div className={styles["open-time"]}>
            <span className={styles["topbar-item"]}>
              Daily : 8.00 am to 5.00 pm
            </span>
          </div>
        </div>

        <div className={styles["phone-number"]}>
          <img
            src={PhoneIcone}
            alt="phoneIcone"
            width="12px"
            style={{ display: "inline", marginRight: "10px" }}
          />
          <a
            href="https://api.whatsapp.com/send?phone=71942435"
            target="_blank"
            style={{ display: "inline" }}
            className={styles["topbar-item"]}
          >
            +961 71942435
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
