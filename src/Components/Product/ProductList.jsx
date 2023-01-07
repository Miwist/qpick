import React, { useState } from "react";
import cl from "./Product.module.scss";
import { covers, headphones, headphonesAir } from "./Products";
import star from "../../assets/icons/star.png";
import active from "../../assets/icons/favoriteActive.png";
import heart from "../../assets/icons/favorite.png";

const ProductList = () => {
  const [favorite, setFavorite] = useState(0);

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
              {favorite === item.id ? (
                <img src={active} alt="favorite" />
              ) : (
                <img
                  src={heart}
                  alt="favorite"
                  onClick={() => setFavorite(item.id)}
                />
              )}
            </div>
            <div className={cl.img}>
              <img src={item.img} alt={item.name} />
            </div>

            <div className={cl.price}>
              <p>{item.name}</p>
              <p style={{ color: "orange" }}>{item.price} руб.</p>
            </div>
            <div className={cl.rating}>
              <img src={star} alt="star" className={cl.star} />
              <p>{item.rating}</p>
            </div>
          </div>
        ))}
      </div>
      <span>Беспроводные наушники</span>
      <div className={cl.headphones}>
        {headphonesAir.map((item) => (
          <div className={cl.headphones_item}>
            <div className={cl.favorite}>
              {favorite === item.id ? (
                <img src={active} alt="favorite" />
              ) : (
                <img
                  src={heart}
                  alt="favorite"
                  onClick={() => setFavorite(item.id)}
                />
              )}
            </div>
            <img src={item.img} alt={item.name} />
            <div className={cl.price}>
              <p>{item.name}</p>
              <p style={{ color: "orange" }}>{item.price} руб.</p>
            </div>
            <div className={cl.rating}>
              <img src={star} alt="star" className={cl.star} />
              <p>{item.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
