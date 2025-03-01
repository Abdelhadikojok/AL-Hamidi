import React from "react";
import loactionLogo from "../../assets/location-logo.svg";
import clockIcon from "../../assets/clock-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import separator from "../../assets/separator.svg";

export default function Location() {
  return (
    <div className="location-section" id="Location">
      <div>
        <div className="special-sections">
          <p>Location & Contact</p>
          <img src={separator} alt="separator" />
        </div>
        <div className="location-description">
          <div className="location-description-topics oppening-time">
            <div className="location-description-topics-header">
              <img src={clockIcon} alt="clock-icon" style={{ width: "25px" }} />
              <p>Opening Time</p>
            </div>
            <span>8.00 am to 5.00 pm</span>
          </div>
          <div className="location-description-topics location-text">
            <div className="location-description-topics-header">
              <img src={loactionLogo} style={{ width: "25px" }} />
              <p>Location</p>
            </div>
            <span>Tripoli - mina street - nearby by howa-chicken</span>
          </div>
          <div className="location-description-topics phone-number">
            <div className="location-description-topics-header">
              <img src={phoneIcon} style={{ width: "25px" }} />
              <p>Phone Number</p>
            </div>
            <span>
              <a
                href="https://api.whatsapp.com/send?phone=71942435"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                +961 71942435
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.9771068494595!2d35.82727514304606!3d34.44613464656726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI2JzQ1LjYiTiAzNcKwNDknMzguNiJF!5e0!3m2!1sen!2slb!4v1634567890123!5m2!1sen!2slb"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
