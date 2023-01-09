import React from "react";
import cl from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={cl.Footer}>
      <div>
        <h2>QPICK</h2>
      </div>
      <div className={cl.Footer_nav}>
        <p>Избранное</p>
        <p>Корзина</p>
        <p>Контакты</p>
      </div>
      <div className={cl.Footer_service}>
        <p>Условия сервиса</p>
        <div className={cl.language}>
          <i className="ri-global-line"></i>
          <p>Каз</p>
          <p style={{ color: "orange" }}>Рус</p>
          <p>Eng</p>
        </div>
      </div>
      <div className={cl.Footer_icons}>
        <i className="ri-instagram-line"></i>
        <i className="ri-telegram-line"></i>
        <i className="ri-whatsapp-line"></i>
      </div>
    </div>
  );
};

export default Footer;
