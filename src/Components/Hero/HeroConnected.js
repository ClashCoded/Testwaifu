import React, { useRef, useState, useEffect } from "react"
import "./Hero.css"
import InputButton from "./InputButton"
import { connect } from "react-redux"
import { createAction } from "@reduxjs/toolkit"
import { mint } from "../../utils/nft"
import { ProgressBar } from "react-step-progress-bar";
//assets
import img from "../../Assets/Images/yellow.jpg";
import img2 from "../../Assets/Images/blue.jpg";
import img3 from "../../Assets/Images/orange.jpg";
import img4 from "../../Assets/Images/green.jpg";
import img5 from "../../Assets/Images/pink.jpg";
import img6 from "../../Assets/Images/red.jpg";
import img7 from "../../Assets/Images/iridescent.jpg";
import img8 from "../../Assets/Images/god.jpg"

const nftValues = createAction("NFT_VALUES")

const HeroConnected = props => {
  const { prices, address, nftValues, balances } = props
  const [count, setCount] = useState(1)

  const handleClick = async () => {
    try {
      if (balances < prices.mintPrice * count)
        alert("Insufficient fund in Wallet.")
      else {
        const result = await mint(count, address)
        console.log("result:=======", result)
        await nftValues()
      }
    } catch (err) {
      console.log("minting:========", err)
      alert(err.message)
    }
  }

  const [showTimer, setShowTimer] = useState(true)
  const [showMint, setShowMint] = useState(false)
  const [timerDays, setTimerDays] = useState("00")
  const [timerHours, setTimerHours] = useState("00")
  const [timerMinutes, setTimerMinutes] = useState("00")
  const [timerSeconds, setTimerSeconds] = useState("00")
  let interval = useRef()
  const startTimer = () => {
    const countdownDate = new Date("Jan 1, 2022 22:9:00").getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      if (distance <= 0) {
        // stop our timer
        // setShowTimer(false)
        // clearInterval(interval.current)
        // setShowMint(true)
        setShowTimer(false)
        clearInterval(interval.current)
        setShowMint(true)
      } else {
        // update timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }
  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  })
  return (
    <div id="hero" className="hero">
      <h1>WaifuStation</h1>
      {/* <p className="hero-p">
      Cashflow positive metaverse gachapon arcades owned by the community.
Own Waifustation NFTs to earn ETH.
      </p> */}
      {/* {(timerDays && timerHours && timerMinutes && timerSeconds == "00") ||
      (timerDays && timerHours && timerMinutes && timerSeconds == "0") ? ( */}
      {!showTimer ? (
        <div className="progress-minting-container">
        <h2 className="minting-title">Community Presale</h2>
        <div
        className="hero_card-mine-div-connected"
      >
        <div className="sliderConnect">
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
        <h3 className="minting-subtitle">Remaining Waifus</h3>
        <ProgressBar
        percent={prices.remainingNft / 10000 * 100}
        filledBackground="rgba(255, 204, 255, 0.6)"
        height="50px"
        text={prices.remainingNft}
      />
        <div className="minting-container">
        <div className="display-price">
        <p className="mint-p">
        <span className="eth-font">Ξ</span>{prices.mintPrice * count}
        </p>
        </div>
        <InputButton count={count} setCount={setCount} />
        </div>
        <button
          onClick={() => {
            // setShowMint(true)
            handleClick()
          } }
          className="hero_mint hero_mint"
        >
          Mint
        </button>
        </div>
        
      ) : (
        <div className="timer-div">
          <div className="time-box">
            <h2>Days</h2>
            <h2>{timerDays}</h2>
          </div>
          <div className="time-box">
            <h2>Hours</h2>
            <h2>{timerHours}</h2>
          </div>
          <div className="time-box">
            <h2>Minutes</h2>
            <h2>{timerMinutes}</h2>
          </div>
          <div className="time-box">
            <h2>Seconds</h2>
            <h2>{timerSeconds}</h2>
          </div>
        </div>
      )}
      {/* <p className="hero-desc">
        The gang: 5000 clumsy, simpleminded, and endangered beans, who are more
        ofá threat to themselves than anything else. Seriously. We're not sure
        how they've managed to survive this long to come with each others
      </p> */}
    </div>
  )
}
const mapStateToProps = state => ({
  prices: state.nft,
  address: state.metamask.address,
  balances: state.metamask.balances,
})

export default connect(mapStateToProps, { nftValues })(HeroConnected)
