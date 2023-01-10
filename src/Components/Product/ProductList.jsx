import React, { useEffect, useState } from "react";
import cl from "./Product.module.scss";
import { covers, headphones, headphonesAir } from "./Products";
import Banner from "./Banner";

const ProductList = () => {
  const [counter, setCounter] = useState(0);
  let favoriteAll = JSON.parse(localStorage.getItem("favorite"));
  let basketAll = JSON.parse(localStorage.getItem("basket"));

  function addFavorite(id) {
    if (headphones[id].favorite === true) {
      headphones[id].favorite = false;
      favoriteAll.splice(id, 1);
      alert("Удалено из избранного");
    } else {
      favoriteAll.push(headphones[id]);
      headphones[id].favorite = true;
      alert("Добавлено в избранное");
    }

    localStorage.setItem("favorite", JSON.stringify(favoriteAll));
    setCounter((prev) => prev + 1);
  }

  function addBasket(id) {
    let item = basketAll.filter((item) => item.id === id);

    if (item[0]) {
      let indexId = basketAll.indexOf(item[0]);
      basketAll[indexId].count = basketAll[indexId].count + 1;
      alert("Добавили ещё один товар");
    } else {
      basketAll.push(headphones[id]);
      alert("Добавлено в корзину");
    }

    localStorage.setItem("basket", JSON.stringify(basketAll));
  }

  function addBasketAir(id) {
    let item = basketAll.filter((item) => item.id === id);
    let head = headphonesAir.filter((item) => item.id === id);
    let headId = headphonesAir.indexOf(head[0]);
    if (item[0]) {
      let indexId = basketAll.indexOf(item[0]);
      basketAll[indexId].count = basketAll[indexId].count + 1;
      alert("Добавили ещё один товар");
    } else {
      basketAll.push(headphonesAir[headId]);
      alert("Добавлено в корзину");
    }

    localStorage.setItem("basket", JSON.stringify(basketAll));
  }

  function addFavoriteAir(id) {
    let head = headphonesAir.filter((item) => item.id === id);
    let headId = headphonesAir.indexOf(head[0]);

    if (headphonesAir[headId].favorite === true) {
      headphonesAir[headId].favorite = false;
      favoriteAll.splice(headId, 1);
      alert("Удалено из избранного");
    }
    headphonesAir[headId].favorite = true;
    favoriteAll.push(headphonesAir[headId]);
    alert("Добавлено в избранное");
    localStorage.setItem("favorite", JSON.stringify(favoriteAll));

    setCounter((prev) => prev + 1);
  }

  return (
    <div className={cl.ProductList}>
      <Banner />
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
              {item.favorite ? (
                <i
                  className="ri-heart-line"
                  style={{ color: "red" }}
                  onClick={() => addFavorite(item.id)}
                ></i>
              ) : (
                <i
                  className="ri-heart-line"
                  onClick={() => addFavorite(item.id)}
                ></i>
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
              <img src={item.star} alt="star" className={cl.star} />
              <p>{item.rating}</p>
              <i
                className="ri-shopping-cart-2-line"
                onClick={() => addBasket(item.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
      <span>Беспроводные наушники</span>
      <div className={cl.headphones}>
        {headphonesAir.map((item) => (
          <div className={cl.headphones_item}>
            <div className={cl.favorite}>
              {item.favorite ? (
                <i
                  className="ri-heart-line"
                  style={{ color: "red" }}
                  onClick={() => addFavoriteAir(item.id)}
                ></i>
              ) : (
                <i
                  className="ri-heart-line"
                  onClick={() => addFavoriteAir(item.id)}
                ></i>
              )}
            </div>

            <img src={item.img} alt={item.name} />
            <div className={cl.price}>
              <p>{item.name}</p>
              <p style={{ color: "orange" }}>{item.price} руб.</p>
            </div>
            <div className={cl.rating}>
              <img src={item.star} alt="star" className={cl.star} />
              <p>{item.rating}</p>
              <i
                className="ri-shopping-cart-2-line"
                onClick={() => addBasketAir(item.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
