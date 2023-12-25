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
            <span>6.00 am to 4.00 pm</span>
          </div>
          <div className="location-description-topics location-text">
            <div className="location-description-topics-header">
              <img src={loactionLogo} style={{ width: "25px" }} />
              <p>Location</p>
            </div>
            <span>Tripoli - monla street - face to chater hassan</span>
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
          src="https://maps.google.com/maps?q=Al-Hamidi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          style={{ width: "100%", height: "400px" }}
        ></iframe>
      </div>
    </div>
  );
}
