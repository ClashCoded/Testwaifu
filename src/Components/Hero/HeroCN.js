import React, { useEffect } from "react"
import "./Hero.css"
import { connect } from "react-redux"
import { createAction } from "@reduxjs/toolkit"
import HeroConnectedCN from "./HeroConnectedCN"
//assets
import img from "../../Assets/Images/yellow.jpg"
import img2 from "../../Assets/Images/blue.jpg"
import img3 from "../../Assets/Images/orange.jpg"
import img4 from "../../Assets/Images/green.jpg"
import img5 from "../../Assets/Images/pink.jpg"
import img6 from "../../Assets/Images/red.jpg"
import img7 from "../../Assets/Images/iridescent.jpg"
import img8 from "../../Assets/Images/god.jpg"

const connectWallet = createAction("CONNECT_WALLET")
const nftValues = createAction("NFT_VALUES")

const HeroCN = props => {
  const { connectWallet, address, nftValues } = props

  useEffect(() => {
    async function fetchValues() {
      await nftValues()
    }
    if (address) fetchValues()
  }, [address, nftValues])

  const handleClick = () => {
    connectWallet()
  }

  if (address) return <HeroConnectedCN />

  return (
    <div id="hero" className="hero">
      <h1 data-aos="fade-up">Waifustation</h1>
      <p data-aos="fade-up" className="hero-p">
      社群拥有的元宇宙扭蛋机。
      <br />
      抱住waifu, 赚ETH。
      </p>
      <button
        // onClick={() => handleClick()}
        data-aos="fade-up"
        data-aos-delay="200"
        className="hero_connect"
      >
          销售TBA
        {/* 连接 */}
      </button>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="hero_card-mine-div"
      >
        <div className="slider">
          <div className="slide-track">
          <div className="slide">
              <img className="card-mine-img" src={img} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity yellow">黄</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img2} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity blue">蓝</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img3} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity orange">橙</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img4} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity green">绿</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img5} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity pink">粉</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img6} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity red">红</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img7} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity iridescent">虹彩</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img8} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity-g god">神</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity yellow">黄</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img2} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity blue">蓝</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img3} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity orange">橙</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img4} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity green">绿</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img5} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity pink">粉</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img6} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity red">红</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img7} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity iridescent">虹彩</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img8} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity-g god">神</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="hero-desc">
        The gang: 5000 clumsy, simpleminded, and endangered beans, who are more
        ofá threat to themselves than anything else. Seriously. We're not sure
        how they've managed to survive this long to come with each others
      </p> */}
    </div>
  )
}

const mapStateToProps = state => ({
  address: state.metamask.address,
})

export default connect(mapStateToProps, { connectWallet, nftValues })(HeroCN)
