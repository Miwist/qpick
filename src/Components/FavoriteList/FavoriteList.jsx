import React from "react";
import cl from "./FavoriteList.module.scss";
import { Link } from "react-router-dom";

const FavoriteList = () => {
  let favoriteAll = JSON.parse(localStorage.getItem("favorite"));
  return (
    <div className={cl.Favorite}>
      <h2>Избранное</h2>
      {favoriteAll.length > 0 ? (
        <div className={cl.FavoriteList}>
          {favoriteAll.map((item) => (
            <div className={cl.Favorite__item}>
              <div className={cl.img}>
                <img src={item.img} alt={item.name} />
              </div>

              <div className={cl.price}>
                <p>{item.name}</p>
                <p style={{ color: "orange" }}>{item.price} руб.</p>
              </div>
              <div className={cl.rating}>
                <img src={item.star} alt="star" className={cl.star} />
                <p>{item.rating}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 style={{ color: "#8e8e8e", marginBottom: "30px"}}>
            Вы ещё не добавили товары в избранное
          </h2>
        </div>
      )}
      <Link to="/">
        <button type="button">В каталог товаров</button>
      </Link>
    </div>
  );
};

export default FavoriteList;
