import React from "react";
import { Link } from "react-router-dom";
import cl from "./Ordering.module.scss";

const SuccesOrdering = () => {
  return (
    <div className={cl.SuccessOrdering}>
      <div className={cl.Message}>
        <b>Номер вашего заказа №123123, с Вами свяжется наш менеджер.</b>
      </div>
      <Link to="/">
        <button type="button">В каталог товаров</button>
      </Link>
    </div>
  );
};

export default SuccesOrdering;
