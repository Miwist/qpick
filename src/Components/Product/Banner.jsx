import React from "react";
import cl from "./Product.module.scss";
import iphone from "../../assets/img/iPhone13.png";

const Banner = () => {
  return (
    <div className={cl.Banner}>
      <div className={cl.Banner__text}>
        <h2>Аксессуары для Iphone 13 Pro Max</h2>
      </div>
      <div className={cl.Banner__img}>
        <img src={iphone} alt="iphone13" />
      </div>
    </div>
  );
};

export default Banner;
