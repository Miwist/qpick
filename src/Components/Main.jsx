import React from 'react'
import Header from './Header/Header'
import cl from "./Main.module.scss"

const Main = () => {
  return (
    <div className={cl.Main}>
        <Header />
    </div>
  )
}

export default Main