import React from "react"
import "./Launch.css"
import img1 from "../../Assets/Launch Images/launch (1).png"
import img2 from "../../Assets/Launch Images/launch (2).png"
import img4 from "../../Assets/Launch Images/launch (4).png"
import img6 from "../../Assets/Launch Images/launch (6).png"
import img7 from "../../Assets/Launch Images/launch (7).png"
import img8 from "../../Assets/Launch Images/launch (8).png"
import img9 from "../../Assets/Launch Images/launch (9).png"
import img10 from "../../Assets/Launch Images/launch (10).png"
import img11 from "../../Assets/Launch Images/launch (11).png"
import img12 from "../../Assets/Launch Images/launch (12).png"
import img14 from "../../Assets/Launch Images/launch (14).png"
import img15 from "../../Assets/Launch Images/launch (15).png"
function LaunchCN() {
  const clickHandler = e => {
    const mobile = window.innerWidth
    if (mobile <= 1050) {
      if (document.querySelector(".content_hover") !== null) {
        document
          .querySelector(".content_hover")
          .classList.remove("content_hover")
        document.querySelector(".img_hover").classList.remove("img_hover")
      }
      console.log(e.target.firstChild)
      e.target.firstChild.classList.add("img_hover")
      e.target.lastChild.classList.add("content_hover")
    }
  }
  return (
    <div className="launch">
      <h4 className="about_title" data-aos="fade-up">
        宝くじ
      </h4>
      <h1 data-aos="fade-up">抽奖活动</h1>
      <p className="launch_p" data-aos="fade-up">
      查看我们的 Discord 以了解如何赢得这些奖品
      </p>
      {/* <div data-aos="fade-up" data-aos-delay="550" className="line-div">
        <div className="dot-div">
          <div className="circle"></div>
          <p>20%</p>
        </div>
        <div className="dot-div">
          <div className="circle"></div>
          <p>40%</p>
        </div>
        <div className="dot-div">
          <div className="circle"></div>
          <p>60%</p>
        </div>
        <div className="dot-div">
          <div className="circle"></div>
          <p>80%</p>
        </div>
        <div className="dot-div">
          <div className="circle"></div>
          <p>100%</p>
        </div>
      </div> */}
      <div className="launch-div">
        <div data-aos="fade-up" data-aos-delay="100" className="launch-box">
          <p className="box-title">NFT赠品</p>
          <div className="x10-div">
            {/* 3d flip ----------------- */}
            <div className="box" onClick={clickHandler}>
              <img src={img12} alt="" />
              <div className="content">
                <p>赢得 10 个 Waifustation NFT 中的 1 个。</p>
              </div>
            </div>
            {/* 3d flip end ----------------------- */}
          </div>
          <p className="box-title">CrunchyRoll Premium</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img1} alt="" />
              <div className="content">
                <p>赢得 10 个 Crunchyroll Premium 订阅中的 1 个</p>
              </div>
            </div>
          </div>
          <p className="box-title">Discord Nitro</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img4} alt="" />
              <div className="content">
                <p>赢得 10 个 Discord Nitro 订阅中的 1 个。</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="launch-box">
          <p className="box-title">合作伙伴 NFT</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img11} alt="" />
              <div className="content">
                <p>赢得 10 个合作伙伴项目 NFT 中的 1 个。</p>
              </div>
            </div>
          </div>
          <p className="box-title">扭蛋机票</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img6} alt="" />
              <div className="content">
                <p>赢得 50 张扭蛋卷票中的 1 张。</p>
              </div>
            </div>
          </div>
          <p className="box-title">游戏资产</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img7} alt="" />
              <div className="content">
                <p>赢得 30 个区块链游戏资产中的 1 个。</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="launch-box">
          <p className="box-title">加密箱</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img15} alt="" />
              <div className="content">
                <p>赢得 10 个加密箱中的 1 个，其中包含前 50 个山寨币。</p>
              </div>
            </div>
          </div>
          <p className="box-title">Gatebox AI</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img9} alt="" />
              <div className="content">
                <p>赢得 3 个 Gatebox AI 个人全息图 waifu 中的 1 个。</p>
              </div>
            </div>
          </div>
          <p className="box-title">PS5</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img14} alt="" />
              <div className="content">
                <p>在 10 个 Playstation 5 中赢得 1 个。</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="launch-box">
          <p className="box-title">游戏电脑 RTX3090</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img8} alt="" />
              <div className="content">
                <p>赢得 3 台 Nvidia RTX3090 游戏 PC 中的 1 台。</p>
              </div>
            </div>
          </div>
          <p className="box-title">日本往返机票</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img10} alt="" />
              <div className="content">
                <p>赢得 10 次日本往返旅行中的 1 次.</p>
              </div>
            </div>
          </div>
          <p className="box-title">Waifu Model 3</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img2} alt="" />
              <div className="content">
                <p>赢得 1 of 1 waifu 包装的 Tesla Model 3。</p>
              </div>
            </div>
          </div>
      </div>
        </div>
        
    </div>
  )
}

export default LaunchCN
