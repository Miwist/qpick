import React, { useEffect, useState } from "react";
import cl from "./Header.module.scss";
import favorite from "../../assets/icons/favorite.png";
import basket from "../../assets/icons/basket.png";
import phone from "../../assets/icons/phone.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [model, setModel] = useState(false);
  const [selectModel, setSelectModel] = useState(0);
  let favoriteAll = JSON.parse(localStorage.getItem("favorite"));
  let basketAll = JSON.parse(localStorage.getItem("basket"));



  useEffect(() => {
    basketAll = JSON.parse(localStorage.getItem("basket"));
    favoriteAll = JSON.parse(localStorage.getItem("favorite"));
  }, []);

  function openModel() {
    if (model === false) {
      setModel(true);
    } else {
      setModel(false);
    }
  }
  return (
    <div className={cl.Header}>
      <div className={cl.Header_select}>
        <h2>QPICK</h2>
        <img src={phone} alt="phone" />
        <p>Выбрать модель телефона</p>
        {model ? (
          <i className="ri-arrow-drop-up-line" onClick={openModel}></i>
        ) : (
          <i className="ri-arrow-drop-down-line" onClick={openModel}></i>
        )}
        {model && (
          <div className={cl.Header__choice}>
            <div className={cl.Header__choice_item}>
              <h3>Apple</h3>
              {selectModel === 1 ? (
                <i
                  className="ri-arrow-drop-up-line"
                  onClick={() => setSelectModel(4)}
                ></i>
              ) : (
                <i
                  className="ri-arrow-drop-down-line"
                  onClick={() => setSelectModel(1)}
                ></i>
              )}
            </div>
            {selectModel === 1 && (
              <div className={cl.Header_choice__phone}>
                <p>iPhone 12</p>
                <p>iPhone 13</p>
                <p>iPhone 14</p>
                <p>iPhone 14 Pro</p>
              </div>
            )}
            <div className={cl.Header__choice_item}>
              <h3>Samsung</h3>
              {selectModel === 2 ? (
                <i
                  className="ri-arrow-drop-up-line"
                  onClick={() => setSelectModel(4)}
                ></i>
              ) : (
                <i
                  className="ri-arrow-drop-down-line"
                  onClick={() => setSelectModel(2)}
                ></i>
              )}
            </div>
            {selectModel === 2 && (
              <div className={cl.Header_choice__phone}>
                <p>Samsung 12</p>
                <p>Samsung 13</p>
                <p>Samsung 14</p>
                <p>Samsung 14 Pro</p>
              </div>
            )}
            <div className={cl.Header__choice_item}>
              <h3>Nokia</h3>
              {selectModel === 3 ? (
                <i
                  className="ri-arrow-drop-up-line"
                  onClick={() => setSelectModel(4)}
                ></i>
              ) : (
                <i
                  className="ri-arrow-drop-down-line"
                  onClick={() => setSelectModel(3)}
                ></i>
              )}
            </div>
            {selectModel === 3 && (
              <div className={cl.Header_choice__phone}>
                <p>Nokia 12</p>
                <p>Nokia 13</p>
                <p>Nokia 14</p>
                <p>Nokia 14 Pro</p>
              </div>
            )}
            <div className={cl.Header__choice_item}>
              <h3>Xiaomi</h3>
              {selectModel === 10 ? (
                <i
                  className="ri-arrow-drop-up-line"
                  onClick={() => setSelectModel(4)}
                ></i>
              ) : (
                <i
                  className="ri-arrow-drop-down-line"
                  onClick={() => setSelectModel(3)}
                ></i>
              )}
            </div>
            <div className={cl.Header__choice_item}>
              <h3>Honor</h3>
              {selectModel === 10 ? (
                <i
                  className="ri-arrow-drop-up-line"
                  onClick={() => setSelectModel(4)}
                ></i>
              ) : (
                <i
                  className="ri-arrow-drop-down-line"
                  onClick={() => setSelectModel(3)}
                ></i>
              )}
            </div>
          </div>
        )}
      </div>
      <div className={cl.Header_purchase}>
        <div className={cl.Header__favorite}>
          {favoriteAll.length > 0 && (
            <div className={cl.amount}>{favoriteAll.length}</div>
          )}
          <Link to="Favorite">
            <img src={favorite} alt="favorite" />
          </Link>
        </div>
        <div className={cl.Header__basket}>
          {basketAll.length > 0 && (
            <div className={cl.amount}>{basketAll.length}</div>
          )}

          <Link to="Basket">
            <img src={basket} alt="basket" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
