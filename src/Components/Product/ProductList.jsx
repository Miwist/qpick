import React from "react";
import cl from "./Product.module.scss";
import { covers, headphones, headphonesAir } from "./Products";
import star from "../../assets/icons/star.png";

const ProductList = () => {
  return (
    <div className={cl.ProductList}>
      <span>Чехлы</span>
      <div className={cl.covers}>
        {covers.map((item) => (
          <div className={cl.covers_item}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <span>Наушники</span>
      <div className={cl.headphones}>
        {headphones.map((item) => (
          <div className={cl.headphones_item}>
            <div className={cl.favorite}>
              <i className="ri-heart-line"></i>
            </div>
            <img src={item.img} alt={item.name} />
            <div className={cl.price}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <div className={cl.rating}>
              <img src={star} alt="star" className={cl.star}/>
              <p>{item.rating}</p>
            </div>
          </div>
        ))}
      </div>
      <span>Наушники</span>
      <div className={cl.headphones}>
        {headphonesAir.map((item) => (
          <div className={cl.headphones_item}>
            <div className={cl.favorite}>
              <i className="ri-heart-line"></i>
            </div>
            <img src={item.img} alt={item.name} />
            <div className={cl.price}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <div className={cl.rating}>
            <img src={star} alt="star" className={cl.star}/>
              <p>{item.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
