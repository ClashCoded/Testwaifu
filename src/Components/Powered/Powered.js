import React from "react";
import "./Powered.css";
import opensea from "../../Assets/Powered By/opensea.png";
import rarible from "../../Assets/Powered By/rarible.png";
import looksrare from "../../Assets/Powered By/looksrare.png";
import crunchyroll from "../../Assets/Powered By/crunchyroll.png"
import playstation from "../../Assets/Powered By/playstation.png"
import ana from "../../Assets/Powered By/ANA.png"
import arweave from "../../Assets/Powered By/arweave.png";
import cybertruck from "../../Assets/Powered By/cybertruck.png";
import decentraland from "../../Assets/Powered By/decentraland.png";
import gatebox from "../../Assets/Powered By/gatebox.png";
import kyotoanimation from "../../Assets/Powered By/kyotoanimation.png";
import nvidia from "../../Assets/Powered By/nvidia.png";
import sandbox from "../../Assets/Powered By/sandbox.png";
import somnium from "../../Assets/Powered By/somnium.png";
import matrix from "../../Assets/Powered By/matrix.png";
import partner1 from "../../Assets/Powered By/partners (2).png"


function Powered() {
  return (
    <div className="powered">
    <h4 className="about_title" data-aos="fade-up">パートナー</h4>
    <h1 data-aos="fade-up" className="partners-h1">Partners</h1>
    <div data-aos="fade-up" data-aos-delay="300" className="power_grid">
    <img src={partner1} alt="" className="power_img" />
    <img src={partner1} alt="" className="power_img" />
    <img src={partner1} alt="" className="power_img" />
    </div>
      <h1 data-aos="fade-up" className="powered-by-title">Powered By</h1>
      <div data-aos="fade-up" data-aos-delay="300" className="power_grid">
        <img src={cybertruck} alt="" className="power_img" />
        <img src={ana} alt="" className="power_img" />
        <img src={gatebox} alt="" className="power_img" />
        <img src={nvidia} alt="" className="power_img" />

        <img src={kyotoanimation} alt="" className="power_img" />
        <img src={playstation} alt="" className="power_img" />
        <img src={crunchyroll} alt="" className="power_img" />
        <img src={arweave} alt="" className="power_img" />

        <img src={sandbox} alt="" className="power_img" />
        <img src={decentraland} alt="" className="power_img" />
        <img src={somnium} alt="" className="power_img" />
        <img src={matrix} alt="" className="power_img" />
        

        <img src={opensea} alt="" className="power_img" />
        <img src={looksrare} alt="" className="power_img" />
        <img src={rarible} alt="" className="power_img" />
      </div>
    </div>
  );
}

export default Powered;
