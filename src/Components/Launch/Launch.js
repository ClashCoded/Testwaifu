import React from "react";
import "./Launch.css";
import img1 from "../../Assets/Launch Images/launch (1).png";
import img2 from "../../Assets/Launch Images/launch (2).png";
import img4 from "../../Assets/Launch Images/launch (4).png";
import img6 from "../../Assets/Launch Images/launch (6).png";
import img7 from "../../Assets/Launch Images/launch (7).png";
import img8 from "../../Assets/Launch Images/launch (8).png";
import img9 from "../../Assets/Launch Images/launch (9).png";
import img10 from "../../Assets/Launch Images/launch (10).png";
import img11 from "../../Assets/Launch Images/launch (11).png";
import img12 from "../../Assets/Launch Images/launch (12).png";
import img14 from "../../Assets/Launch Images/launch (14).png";
import img15 from "../../Assets/Launch Images/launch (15).png";
function Launch() {
  const clickHandler = (e) => {
    const mobile = window.innerWidth;
    if (mobile <= 1050) {
      if (document.querySelector(".content_hover") !== null) {
        document
          .querySelector(".content_hover")
          .classList.remove("content_hover");
        document.querySelector(".img_hover").classList.remove("img_hover");
      }
      console.log(e.target.firstChild);
      e.target.firstChild.classList.add("img_hover");
      e.target.lastChild.classList.add("content_hover");
    }
  };
  return (
    <div className="launch">
    <h4 className="about_title" data-aos="fade-up">宝くじ</h4>
      <h1 data-aos="fade-up">Prize Lottery</h1>
      <p className="launch_p" data-aos="fade-up">
      Check our Discord to learn how to win these prizes!
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
          <p className="box-title">NFT Giveaway</p>
          <div className="x10-div">
            {/* 3d flip ----------------- */}
            <div className="box" onClick={clickHandler}>
              <img src={img12} alt="" />
              <div className="content">
                <p>Win 1 of 10 Waifustation NFTs.</p>
              </div>
            </div>
            {/* 3d flip end ----------------------- */}
          </div>
          <p className="box-title">CrunchyRoll Premium</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img1} alt="" />
              <div className="content">
                <p>Win 1 of 10 Crunchyroll Premium subscriptions.</p>
              </div>
            </div>
          </div>
          <p className="box-title">Discord Nitro</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img4} alt="" />
              <div className="content">
                <p>
                Win 1 of 10 Discord Nitro subscriptions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="launch-box">
          <p className="box-title">Partner NFTs</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img11} alt="" />
              <div className="content">
                <p>Win 1 of 10 partner project NFTs.</p>
              </div>
            </div>
          </div>
          <p className="box-title">Gachapon Ticket</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img6} alt="" />
              <div className="content">
                <p>Win 1 of 50 gachapon roll tickets.</p>
              </div>
            </div>
          </div>
          <p className="box-title">Game Assets</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img7} alt="" />
              <div className="content">
                <p>Win 1 of 30 blockchain game assets.</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="launch-box">
          <p className="box-title">Crypto Crate</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img15} alt="" />
              <div className="content">
                <p>
                  Win 1 of 10 crypto crates charged with the top 50 altcoins.
                </p>
              </div>
            </div>
          </div>
          <p className="box-title">Gatebox AI</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img9} alt="" />
              <div className="content">
                <p>Win 1 of 3 Gatebox AI personal hologram waifu.</p>
              </div>
            </div>
          </div>
          <p className="box-title">Playstation 5</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img14} alt="" />
              <div className="content">
                <p>Win 1 of 10 Playstation 5.</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="launch-box">
          <p className="box-title">Gaming PC RTX3090</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img8} alt="" />
              <div className="content">
                <p>Win 1 of 3 Nvidia RTX3090 gaming PCs.</p>
              </div>
            </div>
          </div>
          <p className="box-title">Round Trip to Japan</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img10} alt="" />
              <div className="content">
                <p>Win 1 of 10 round trips to Japan.</p>
              </div>
            </div>
          </div>
          <p className="box-title">Waifu Model 3</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img2} alt="" />
              <div className="content">
                <p>Win a 1 of 1 waifu wrapped Tesla Model 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Launch;
