import React from "react"
import "./Governance.css"
//assets
function GovernanceCN() {
  return (
    <div id="governance" className="governance">
      <div data-aos="fade-up" className="governance_right">
        <h4 className="about_title">ガバナンス</h4>
        <h2 className="governance_title2">项目管理及规划</h2>
        <p className="governance_desc">
        Waifustation是一个由去中心化自治组织（DAO）管
理的NFT一个基础板块，经营跨多个元宇宙中构建
的虚拟扭蛋机游戏中心。元宇宙包含: Sandbox,
Decentraland, Matrix World和由群众社区投票进
行选择的元宇宙。我们的扭蛋机项目是从各个渠道来收
集 NFT，并以固定的价格将它们重新分配给元宇
宙中的用户，每位用户通过随机抽奖的模式来获
得不同价值的NFT。作为 Waifustation NFT 持有者，您有权获得扭蛋机一部分总收益（以ETH支付).  Waifustation 的目标是在虚拟世界中不断扩展我们的扭蛋游戏机网络，并通过DAO给我们的社团成员带来持续的收益
        </p>
        {/* <div className="btn-div">
          <button className="hero_buy">Whitepaper</button>
          <button className="hero_create">计划书</button>
        </div> */}
      </div>
      <div data-aos="fade-up" className="governance_left">
        <model-viewer
          src="/images/littletokyo.glb"
          poster="/images/littletokyo.jpg"
          alt="littletokyo"
          loading="lazy"
          camera-controls
          disable-zoom
          field-of-view="30deg"
          auto-rotate
        />
        {/* <div className="card-mine-gov big_card-mine">
          <img className="card-mine-img big_img" src={img3} alt="..." />
        </div> */}
      </div>
    </div>
  )
}

export default GovernanceCN
