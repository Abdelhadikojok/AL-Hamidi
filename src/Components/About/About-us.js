import React from "react";
import bakeryOne from "../../assets/IMG_1515.JPG";
import bakeryTwo from "../../assets/IMG_1532.JPG";
import imagepattern from "../../assets/img-pattern.svg";
import badge2 from "../../assets/badge-2-bg.png";
import shape2 from "../../assets/shape-2.png";
import shape1 from "../../assets/shape-1.png";

export default function AboutUs() {
  return (
    <div className="container about-us-container" id="AboutUs">
      <div className="about-us-text-container">
        <div class="special-sections">
          <p>About Us</p>
        </div>
        <p className="about-us-text">
          اننا في هذا الفرع من سلسلتنا نقدم لكم افخر انواع المعجنات والسواريه
          والكروسان والكعك،ونحرص على ان نستعمل اجود انواع المواد لتحضير المنتجات
          وقد اقتصرنا على هذه الأصناف لكي نختص بها ونقدم لكم اطيب لقمة. نستقبل
          طلبياتكم ومناساباتكم على الرقم الموجود على ان تعلمونا بها قبل مدة.
          نفتح من الساعة ٦ صباحا حتى ٤ عصرا
        </p>
      </div>
      <div className="about-us-iamges">
        <div className="firstImage">
          <img
            src={bakeryOne}
            alt="about-us-iamges"
            className="about-us-iamge"
          />
          <p className="since-date">
            Since 1999
            <img className="badge2" alt="badge2" src={badge2} />
          </p>
        </div>
        <div className="secondImage">
          <img
            src={bakeryTwo}
            alt="about-us-iamges"
            className="about-us-iamge "
          />
          <img src={imagepattern} className="imagepattern" />
        </div>
      </div>
      <img src={shape1} className="shape1-image" />
      <img src={shape2} className="shape2-image" />
    </div>
  );
}
