import React from "react";
import "./DiscriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of products or services over the internet serves as a virtual
          marketplace where businesses and individ showcase their products,
          interact with customers, and conducti transactions without the need
          for a physical presence. E-commerce websites have gained immense
          popularity due to their conveni accessibility, and the global reach
          they offer.
        </p>
        <p>
          E-commerce websates typically display products or services along with
          detailed descriptions, images, prices, and any available varians
          (e.g., sizes, colors). Each product usually has its own detailed with
          relevent infirmation.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
