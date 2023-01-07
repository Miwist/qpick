import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import cl from "./Main.module.scss";
import Banner from "./Product/Banner";
import ProductList from "./Product/ProductList";

const Main = () => {
  return (
    <div className={cl.Main}>
      <Header />
      <Banner />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Main;
