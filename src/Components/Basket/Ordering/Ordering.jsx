import React from "react";
import cl from "./Ordering.module.scss";
import map from "../../../assets/img/map.png";
import { Link } from "react-router-dom";

const Ordering = () => {
  let basketAll = JSON.parse(localStorage.getItem("basket"));
  let totalSum = JSON.parse(localStorage.getItem("totalPrice"));
  return (
    <div className={cl.Ordering}>
      <h2>Оформление</h2>
      <div className={cl.row}>
        <div className={cl.delivery}>
          <div className={cl.delivery__title}>
            <h3>Доставка курьером</h3>
            <p>499 руб.</p>
          </div>
          <div>
            <img src={map} alt="map" />
          </div>
          <div className={cl.adress}>
            <div className={cl.adress__title}>
              <i className="ri-map-pin-2-line"></i>
              <h4>Адрес доставки</h4>
            </div>
            <div className={cl.input}>
              <input type="text" name="" placeholder="Город" />
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <div className={cl.input}>
              <input type="text" name="" placeholder="Район" />
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <div className={cl.input__row}>
              <div className={cl.input}>
                <input type="text" name="" placeholder="Дом" />
                <i className="ri-pencil-line"></i>
              </div>
              <div className={cl.input}>
                <input type="text" name="" placeholder="Подъезд" />
                <i className="ri-pencil-line"></i>
              </div>
            </div>

            <div className={cl.input} style={{ maxWidth: "174px" }}>
              <input type="text" name="" placeholder="Квартира" />
              <i className="ri-pencil-line"></i>
            </div>
          </div>
        </div>
        <div className={cl.payment}>
          <div className={cl.payment_box}>
            <h2>Ваш заказ</h2>
            {basketAll.map((item) => (
              <div className={cl.payment_box__item}>
                <p>x {item.count}</p>
                <p>{item.name}</p> <b>{item.price * item.count} руб</b>
              </div>
            ))}
            <div className={cl.payment_box__item}>
              <p>Доставка</p> <b>499 руб</b>
            </div>
            <div className={cl.payment_box__item}>
              <p>К оплате:</p>
              <b style={{ color: "orange" }}>{totalSum + 499} руб</b>
            </div>
          </div>
          <div className={cl.payment_box}>
            <h2>Способ оплаты</h2>
            <div className={cl.payment_box__item}>
              <div className={cl.row}>
                <i className="ri-visa-fill"></i>
                <p style={{ marginLeft: "5px" }}>Банковской картой онлайн</p>
              </div>

              <i className="ri-arrow-down-s-line"></i>
            </div>
            <div className={cl.payment_box__item}>
              <div className={cl.row}>
                <i className="ri-coupon-2-line"></i>
                <input
                  type="text"
                  style={{ marginLeft: "5px" }}
                  placeholder="Есть промокод?"
                />
              </div>
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
          <div className={cl.payment_box}>
            <h2>Номер получателя</h2>
            <div className={cl.input}>
              <input type="text" name="phone" placeholder="+7 ___ ___ __ __"/>
              <i className="ri-pencil-line"></i>
            </div>
          </div>
          <Link to="/SuccessOrdering">
            <button type="button">Закончить оформление</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ordering;
