import React from "react"
import "./About.css"
//assets
import img3 from "../../Assets/Images/iridescent.jpg"
import smallLogo from "../../Assets/Images/about-logo.png"
function About() {
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
            <p className="rarity iridescent">Iridescent</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="about_right">
        <h4 className="about_title">妻ステーションへようこそ</h4>
        <h2 className="about_title2">
          Welcome to <br /> Waifustation
        </h2>
        <p className="about_desc">
          Waifustation is a collection of 8888 algorithmically drawn waifu NFTs.
          Each NFT is a unique 1 of 1 waifu that represents membership and
          unlimited metaverse ownership in Waifustation. By owning a waifustation NFT,
          you gain access to exclusive members-only giveaways, raffles,
          airdrops, gachapon ownership, and more.
        </p>
        <div className="btn-div">
          <a href="/documents/WaifustationEN.pdf" target="__blank"><button className="hero_buy">Whitepaper</button></a>
          <a href="/documents/WaifustationCN.pdf" target="__blank"><button className="hero_create">计划书</button></a>
        </div>
      </div>
    </div>
  )
}

export default About
