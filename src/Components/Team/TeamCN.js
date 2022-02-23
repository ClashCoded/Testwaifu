import React, { useEffect } from "react"
import "./Team.css"
import img1 from "../../Assets/Team/team (1).png"
import img2 from "../../Assets/Team/team (2).png"
import img3 from "../../Assets/Team/team (3).png"
import img4 from "../../Assets/Team/team (4).png"
import AOS from "aos"
import "aos/dist/aos.css"
function TeamCN() {
  useEffect(() => {
    AOS.init({
      once: true,
    })
    AOS.refresh()
  }, [])
  return (
    <div id="team" className="team">
      <h4 className="about_title" data-aos="fade-up">
        私たちのチーム
      </h4>
      <h1 data-aos="fade-up">团队</h1>
      <div data-aos="fade-up" data-aos-delay="400" className="team-grid">
        <div className="team-container">
          <img className="team_image" src={img1} alt="..." />
          <h2 className="team_names">Alex Chan</h2>
          <h3 className="team_title">创意总监</h3>
          <p className="team_des">
            Alex在亚洲娱乐业拥有15年的经验，曾举办过大型名人活动和音乐会。他曾与
            Big Bang、Gem Tang、JJLin 以及许多其他亚洲艺术家合作。
          </p>
        </div>
        <div className="team-container">
          <img className="team_image" src={img2} alt="..." />
          <h2 className="team_names">Xin Yang</h2>
          <h3 className="team_title">软件开发师</h3>
          <p className="team_des">
            自 2018 年以来，Xin 一直在区块链和 web3 中工作。在熊市中失去了 90%
            的资金后，他成为一名软件程序员。 Xin 专注于 Solidity 智能合约和 Web
            开发。
          </p>
        </div>
        <div className="team-container">
          <img className="team_image" src={img3} alt="..." />
          <h2 className="team_names">Yuuna</h2>
          <h3 className="team_title">社区管理员</h3>
          <p className="team_des">
            Mary在营销和运营 Discord 社区领域拥有 3
            年的工作经验。她还掌握了流利的英语、普通话和法语。她希望有一天加密货币和
            NFT能够成为世界的主流。
          </p>
        </div>
        <div className="team-container">
          <img className="team_image" src={img4} alt="..." />
          <h2 className="team_names">Oxdegen</h2>
          <h3 className="team_title">营销</h3>
          <p className="team_des">
            2019 年，0xDegen 建立了在线社群，还帮助启动了很多加密项目，并通过
            Twitter和Tiktok等社交软件，将其推广给群众。他以 1.2
            eth的价格出售了bayc，这是他这一生中最后悔的决定。
          </p>
        </div>
      </div>
    </div>
  )
}

export default TeamCN
