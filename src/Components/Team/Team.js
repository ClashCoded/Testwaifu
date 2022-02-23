import React, { useEffect } from "react"
import "./Team.css"
import img1 from "../../Assets/Team/team (1).png"
import img2 from "../../Assets/Team/team (2).png"
import img3 from "../../Assets/Team/team (3).png"
import img4 from "../../Assets/Team/team (4).png"
import AOS from "aos"
import "aos/dist/aos.css"
function Team() {
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
      <h1 data-aos="fade-up">OUR TEAM</h1>
      <div data-aos="fade-up" data-aos-delay="400" className="team-grid">
        <div className="team-container">
          <img className="team_image" src={img1} alt="..." />
          <h2 className="team_names">Alex Chan</h2>
          <h3 className="team_title">Creative Director</h3>
          <p className="team_des">
            Alex has 15 years in the Asian entertainment industry, hosting large
            scale celebrity events and concerts. He has worked with Big Bang,
            Gem Tang, JJlin, among many other Asian artists.
          </p>
        </div>
        <div className="team-container">
          <img className="team_image" src={img2} alt="..." />
          <h2 className="team_names">Xin Yang</h2>
          <h3 className="team_title">Developer</h3>
          <p className="team_des">
            Xin worked in blockchain and web3 since 2018. After losing 90% of
            his portfolio in the bear market, he decided to become a developer.
            Xin specializes in Solidity smart contracts and web development.
          </p>
        </div>
        <div className="team-container">
          <img className="team_image" src={img3} alt="..." />
          <h2 className="team_names">Yuuna</h2>
          <h3 className="team_title">Community Manager</h3>
          <p className="team_des">
            Mary has 2 years of experience working in Discord communities and
            acting as moderator. Fluent in English, Mandarin, and French. She
            hopes one day crypto and NFTs become mainstream worldwide.
          </p>
        </div>
        <div className="team-container">
          <img className="team_image" src={img4} alt="..." />
          <h2 className="team_names">Oxdegen</h2>
          <h3 className="team_title">Marketing</h3>
          <p className="team_des">
            Building online communities since 2019, 0xdegen helped bootstrapped
            crypto projects and promoted them to audiences on Twitter and
            Tiktok. He sold bayc at 1.2 eth and will carry the pain for the rest
            of his life.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team
