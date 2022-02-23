import React from "react"
import "./Roadmap.css"
import bg from "../../Assets/Images/background-2.png"
import launch from "../../Assets/Images/launch2.png"
import q1 from "../../Assets/Images/q1.png"
import q2 from "../../Assets/Images/q2.png"
import q3 from "../../Assets/Images/q3.png"
import beyond from "../../Assets/Images/beyond.png"
function RoadmapCN() {
  return (
    <div id="roadmap" className="roadmap">
      <h4 className="about_title">ロードマップ</h4>
      <h1 data-aos="fade-down">发展路线</h1>
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
            <h4 className="roadmap-title">起点</h4>
            <p>• Waifustation出版</p>
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
              • 抽奖活动
              <br />• Decentraland
              <br />
              元宇宙店面
              <br />• NFT扭蛋机
              <br />• 游戏资产扭蛋机
              <br />• 京都动漫的赞助
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
              元宇宙店面
              <br />• Somnium Space
              <br />
              元宇宙店面
              <br />• 跨多个区块链
              <br />• DAO管理
              <br />• 明星代言
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
              亚洲明星代言
              <br />• 新的街机游戏
              <br />• 数字货币扭蛋机
              <br />• 神秘空投
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
            <h4 className="roadmap-title">未来发展</h4>

            <p>
              • 根据去中心化自治组织的决定，
              <br />
              在不同元宇宙中开店面
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapCN
