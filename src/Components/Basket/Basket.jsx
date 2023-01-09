import React, { useEffect, useState } from "react";
import cl from "./Basket.module.scss";
import basket from "../../assets/img/basketEmpty.png";
import iconDelete from "../../assets/icons/delete.png";

import { Link } from "react-router-dom";

const Basket = () => {
  let basketAll = JSON.parse(localStorage.getItem("basket"));
  const [total, setTotal] = useState(0);

  function totalPrice() {
    for (let i = 0; i < basketAll.length; i++) {
      setTotal((prev) => prev + basketAll[i].price * basketAll[i].count);
    }
  }

  useEffect(() => {
    totalPrice();
  }, []);

  useEffect(() => {
    basketAll = JSON.parse(localStorage.getItem("basket"));
  }, [total]);

  function countDown(id, price, count) {
    if (count > 1) {
      setTotal((prev) => prev - price);
      let item = basketAll.filter((item) => item.id === id);
      let indexId = basketAll.indexOf(item[0]);
      basketAll[indexId].count = basketAll[indexId].count - 1;
      localStorage.setItem("basket", JSON.stringify(basketAll));
    }
  }

  function countUp(id, price) {
    setTotal((prev) => prev + price);
    let item = basketAll.filter((item) => item.id === id);
    let indexId = basketAll.indexOf(item[0]);
    basketAll[indexId].count = basketAll[indexId].count + 1;
    localStorage.setItem("basket", JSON.stringify(basketAll));
  }

  function deleteItem(id, price) {
    setTotal((prev) => prev - price);
    let item = basketAll.filter((item) => item.id === id);
    let indexId = basketAll.indexOf(item[0]);
    basketAll.splice(indexId, 1);
    localStorage.setItem("basket", JSON.stringify(basketAll));
  }

  return (
    <div className={cl.Basket}>
      {basketAll.length <= 0 ? (
        <div className={cl.Basket}>
          <img src={basket} alt="basket" />
          <h2>Корзина пуста</h2>
          <p>Но это никогда не поздно исправить</p>
          <Link to="/">
            <button type="button">В каталог товаров</button>
          </Link>
        </div>
      ) : (
        <div className={cl.Basket}>
          <h2>Корзина</h2>
          <div className={cl.Basket_row}>
            <div className={cl.Basket_list}>
              {basketAll.map((item) => (
                <div className={cl.Basket__item}>
                  <div className={cl.row}>
                    <div className={cl.img}>
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className={cl.price}>
                      <p>{item.name}</p>
                      <p style={{ color: "#8e8e8e" }}>{item.price} руб.</p>
                    </div>
                  </div>

                  <div className={cl.counter}>
                    <img
                      src={iconDelete}
                      alt="delete"
                      className={cl.delete}
                      onClick={() => deleteItem(item.id, item.price)}
                    />
                    <div
                      className={cl.count}
                      onClick={() => countDown(item.id, item.price, item.count)}
                    >
                      -
                    </div>
                    <p>{item.count}</p>
                    <div
                      className={cl.count}
                      onClick={() => countUp(item.id, item.price)}
                    >
                      +
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={cl.totalPrice}>
              <div className={cl.title}>
                <h2>Итого:</h2>
                <p>{total}</p>
              </div>
              <button type="button">Перейти к оформлению</button>
              <Link to="/">
                <button type="button">В каталог товаров</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
