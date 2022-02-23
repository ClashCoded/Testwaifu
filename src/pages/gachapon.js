import React from "react"
import Header from "../Layout/Header/Header"
import Gacha from "../Components/Gachapon/Gacha"
import Footer from "../Layout/Footer/Footer"
import { startSaga } from '../saga/rootSaga';

const Gachapon = () => {
    return (
      <div style={{ overflow: "hidden" }}>
        <Header />
        <Gacha />
        <Footer />
      </div>
    )
  }
  
  
  export default () => {
    startSaga();
    return <Gachapon />
  };