import React from "react"
import "./About.css"
//assets
import img3 from "../../Assets/Images/iridescent.jpg"
import smallLogo from "../../Assets/Images/about-logo.png"
function AboutCN() {
  return (
    <div id="about" className="about">
      <div data-aos="fade-up" className="about_left">
        <div className="card-mine big_card-mine">
          <img
            data-aos="zoom-out-up"
            className="absolute-image"
            data-aos-delay="500"
            src={smallLogo}
            alt=""
          />
          <img className="card-mine-img big_img" src={img3} alt="..." />
          <p className="card-mine-title">Waifu</p>
          <div className="card-mine-lower">
            <p className="number">#???</p>
            <p className="rarity iridescent">虹彩</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="about_right">
        <h4 className="about_title">妻ステーションへようこそ</h4>
        <h2 className="about_title2">
          欢迎来到 <br /> Waifustation
        </h2>
        <p className="about_desc">
          由 8888 个算法绘制的 waifu NFT 的集合。 每个 NFT
          都是一个独特的，唯一的 waifu，用来代表会员资格和 Waifustation
          中无尽的元宇宙中的所有权。拥有一个waifustation NFT，
          您便可以获得会员专属的赠品、抽奖活动、 空投，以及gachapon所有权等等。
        </p>
        <div className="btn-div">
          <a href="/documents/WaifustationCN.pdf">
            <button className="hero_buy">计划书</button>
          </a>
          <a href="/documents/WaifustationEN.pdf">
            <button className="hero_create">Whitepaper</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutCN
