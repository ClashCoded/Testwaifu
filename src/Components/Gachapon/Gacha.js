import React, { useEffect } from "react";
import "./Gacha.css";
import { connect } from "react-redux"
import { createAction } from "@reduxjs/toolkit"
import GachaConnected from "./GachaConnected"
//assets
import img from "../../Assets/Images/yellow.jpg";
import img2 from "../../Assets/Images/blue.jpg";
import img3 from "../../Assets/Images/orange.jpg";
import img4 from "../../Assets/Images/green.jpg";
import img5 from "../../Assets/Images/pink.jpg";
import img6 from "../../Assets/Images/red.jpg";
import img7 from "../../Assets/Images/iridescent.jpg";
import img8 from "../../Assets/Images/god.jpg"

const connectWallet = createAction("CONNECT_WALLET")
const nftValues = createAction("NFT_VALUES")

const Gacha = props => {
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

  if (address) return <GachaConnected />
 
  return (
    <div id="gacha" className="gacha">
      <h1>WaifuStation</h1>
      <p className="gacha-p">
      Community owned gachapon aracdes in the metaverse.
      <br />
Hold waifus, Earn ETH.
      </p>
        <button
          onClick={() => handleClick()}
          className="gacha_connect"
        >
          {/* Connect */}
          Connect
        </button>
      <div
        className="gacha_card-mine-div"
      >
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img className="card-mine-img" src={img} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity yellow">Yellow</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img2} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity blue">Blue</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img3} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity orange">Orange</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img4} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity green">Green</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img5} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity pink">Pink</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img6} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity red">Red</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img7} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity iridescent">Iridescent</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img8} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity-g god">God</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity yellow">Yellow</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img2} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity blue">Blue</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img3} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity orange">Orange</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img4} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity green">Green</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img5} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity pink">Pink</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img6} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity red">Red</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img7} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity iridescent">Iridescent</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img8} alt="..." />
              <p className="card-mine-title">Waifu</p>
              <div className="card-mine-lower">
                <p className="number">#???</p>
                <p className="rarity-g god">God</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="gacha-desc">
        The gang: 5000 clumsy, simpleminded, and endangered beans, who are more
        ofá threat to themselves than anything else. Seriously. We're not sure
        how they've managed to survive this long to come with each others
      </p> */}
    </div>
  );
}

const mapStateToProps = state => ({
  address: state.metamask.address,
})

export default connect(mapStateToProps, { connectWallet, nftValues })(Gacha)
