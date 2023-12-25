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
          زبائننا الكرام لطالما عودتكم سلسلة معجنات الحميدي على تقديم أجود أنواع
          المعجنات، والتي تعتمد فيها معايير عالية من الجودة في الإنتاج واستخدام
          المواد الأولية في السلامة الغذائية. وفي فرعنا الجديد / في شارع نديم
          الجسر نقدم بالإضافة للمعجنات أصنافا من السواريه والكرواسان والكعك،وقد
          اقتصرنا على هذه الأصناف لنبدع فيها ونتميز، وبالتالي نضع بين يدي
          زبائننا الكرام أطيب لقمة. ونعلن عن استعدادنا لتلبية طلباتكم في مختلف
          المناسبات على الرقم التالي: 71942435 على أن يكون الطلب قبل 24 ساعة
          يسعدنا تشريفكم، وتسرنا خدمتكم من الساعة ٦ صباحا حتى  ٤ عصرا
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
