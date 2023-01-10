import React, { useEffect, useState } from "react";
import cl from "./Header.module.scss";
import phone from "../../assets/icons/phone.png";
import { Link } from "react-router-dom";
import { phones } from "./phonesList";

const Header = () => {
  const [model, setModel] = useState(false);
  const [selectModel, setSelectModel] = useState(12);
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
            {phones.map((item) => (
              <div className={cl.Header__choice_item}>
                <div className={cl.column}>
                  <div className={cl.title}>
                    <h3>{item.title}</h3>
                    {selectModel === item.id ? (
                      <i
                        className="ri-arrow-drop-up-line"
                        onClick={() => setSelectModel(12)}
                      ></i>
                    ) : (
                      <i
                        className="ri-arrow-drop-down-line"
                        onClick={() => setSelectModel(item.id)}
                      ></i>
                    )}
                  </div>

                  {selectModel === item.id && (
                    <div className={cl.Header_choice__phone}>
                      {item.phone.map((phone) => (
                        <p>{phone}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={cl.Header_purchase}>
        <div className={cl.Header__favorite}>
          {favoriteAll.length > 0 && (
            <div className={cl.amount}>{favoriteAll.length}</div>
          )}
          <Link to="Favorite">
            <i className="ri-heart-line"></i>
          </Link>
        </div>
        <div className={cl.Header__basket}>
          {basketAll.length > 0 && (
            <div className={cl.amount}>{basketAll.length}</div>
          )}

          <Link to="Basket">
            <i className="ri-shopping-cart-2-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
