import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "./Basket/Basket";
import Ordering from "./Basket/Ordering/Ordering";
import SuccesOrdering from "./Basket/Ordering/SuccesOrdering";
import FavoriteList from "./FavoriteList/FavoriteList";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import cl from "./Main.module.scss";
import ProductList from "./Product/ProductList";

const Main = () => {
  let favoriteAll = JSON.parse(localStorage.getItem("favorite"));
  let basketAll = JSON.parse(localStorage.getItem("basket"));
 
  useEffect(() => {
    if (favoriteAll === null || favoriteAll === undefined) {
      localStorage.setItem("favorite", JSON.stringify([]));
    }
    if (basketAll === null || basketAll === undefined) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
  }, []);

  return (
    <div className={cl.Main}>
      <Header />
      <Routes>
        <Route path="Basket" element={<Basket />} />
        <Route path="Favorite" element={<FavoriteList />} />
        <Route path="Ordering" element={<Ordering />} />
        <Route path="/" element={<ProductList />} />
        <Route path="SuccessOrdering" element={<SuccesOrdering />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
