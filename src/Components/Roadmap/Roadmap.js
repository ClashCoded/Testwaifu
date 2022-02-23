import React from "react"
import "./Roadmap.css"
import bg from "../../Assets/Images/background-2.png"
import launch from "../../Assets/Images/launch2.png"
import q1 from "../../Assets/Images/q1.png"
import q2 from "../../Assets/Images/q2.png"
import q3 from "../../Assets/Images/q3.png"
import beyond from "../../Assets/Images/beyond.png"
function Roadmap() {
  return (
    <div id="roadmap" className="roadmap">
      <h4 className="about_title">ロードマップ</h4>
      <h1 data-aos="fade-down">RoadMap</h1>
      <div className="roadmap-image">
        <img
          data-aos-delay="200"
          data-aos="fade-down"
          className="roadmap-bg"
          src={bg}
          alt=""
        />
        <div
          data-aos-delay="300"
          data-aos="fade-down"
          className="pointer-div pointer-div1"
        >
          <div className="left-pointer2">
            <img
              data-aos="zoom-in"
              data-aos-delay="350"
              src={launch}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4 className="roadmap-title">Launch</h4>
            <p>• The Drop</p>
          </div>
        </div>
        <div
          data-aos-delay="400"
          data-aos="fade-down"
          className="pointer-div pointer-div2"
        >
          <div className="left-pointer">
            <img
              data-aos="zoom-in"
              data-aos-delay="450"
              src={q1}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4 className="roadmap-title">Q1 2022</h4>
            <p>
              • Prize Lottery
              <br /> • Decentraland
              <br />
              metaverse storefront
              <br /> • NFT gachapons
              <br /> • Game asset gachapons <br /> • Kyoto Animation Donation
            </p>
          </div>
        </div>
        <div
          data-aos-delay="500"
          data-aos="fade-down"
          className="pointer-div pointer-div3"
        >
          <div className="left-pointer2">
            <img
              data-aos="zoom-in"
              data-aos-delay="550"
              src={q2}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4 className="roadmap-title">Q2 2022</h4>
            <p>
              • Sandbox
              <br />
              metaverse storefront
              <br />• Somnium Space
              <br />
              metaverse storefront
              <br />• Cross chain
              <br />• DAO governance
              <br />• Celebrity
              <br/>endorsement
            </p>
          </div>
        </div>
        <div
          data-aos-delay="600"
          data-aos="fade-down"
          className="pointer-div pointer-div4"
        >
          <div className="left-pointer">
            <img
              data-aos="zoom-in"
              data-aos-delay="650"
              src={q3}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4 className="roadmap-title">Q3 2022</h4>
            <p>
              • Matrix World
              <br />
              metaverse storefront
              <br /> • New arcade games
              <br /> • Crypto crate gachapons
              <br /> • Secret drop
            </p>
          </div>
        </div>
        <div
          data-aos-delay="700"
          data-aos="fade-down"
          className="pointer-div pointer-div5"
        >
          <div className="left-pointer2">
            <img
              data-aos="zoom-in"
              data-aos-delay="750"
              src={beyond}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4 className="roadmap-title">Beyond</h4>
            <p>
              • Open storefronts in new
              <br />
              DAO proposed metaverses
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
