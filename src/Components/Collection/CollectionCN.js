import React from "react"
import "./Collection.css"
import img from "../../Assets/Images/fair-launch.png"
import img2 from "../../Assets/Images/good-cause.png"
import img3 from "../../Assets/Images/win-prizes.png"
import img4 from "../../Assets/Images/unique-art.png"
import img5 from "../../Assets/Images/make-history.png"
import img6 from "../../Assets/Images/royalties.png"
import img7 from "../../Assets/Images/ownership.png"
import img8 from "../../Assets/Images/limited.png"
import circle from "../../Assets/Images/circle.png"
function CollectionCN() {
  // const clickHandler = (e) => {
  //   const mobile = window.innerWidth;
  //   if (mobile <= 1000) {
  //     if (document.querySelector(".open_hidden") !== null) {
  //       document.querySelector(".open_hidden").classList.remove("open_hidden");
  //       document.querySelector(".translate_y").classList.remove("translate_y");
  //     }
  //     e.target.classList.add("translate_y");
  //     e.target.lastChild.classList.add("open_hidden");
  //   }
  // };
  return (
    <div id="collection" className="collection">
      <h4 className="about_title" data-aos="fade-up">
        利点
      </h4>
      <h1 className="collection_head" data-aos="fade-up">
        好处
      </h1>
      <p className="collection_p" data-aos="fade-up">
        了解更多关于以下收藏功能的信息!
      </p>
      <div className="collection_grid">
        <img
          data-aos="fade-down"
          data-aos-delay="600"
          src={circle}
          alt=""
          className="circle-img"
        />
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="collect-div number1"
        >
          <div className="collect_left">
            <h1>公平发布</h1>
            <p className="hover-p">
              发布包括 3 轮：社区预售、合作伙伴预售、公开发售。没有粘合曲线
            </p>
          </div>
          <div className="collect_right">
            <img src={img} alt="" className="collect_img" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="collect-div number2"
        >
          <div className="collect_left">
            <h1>赢奖品</h1>
            <p className="hover-p">
              每个waifu NFT都是一张参加每次抽奖抽奖的门票。
            </p>
          </div>
          <div className="collect_right">
            <img src={img3} alt="" className="collect_img" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="collect-div number3"
        >
          <div className="collect_left">
            <h1>限量</h1>
            <p className="hover-p">
              总共只有 8,888 个 waifus 会被铸造出来，非常稀有。 8
              种颜色的稀有品让您有机会铸造一个额外的稀有品！
            </p>
          </div>
          <div className="collect_right">
            <img src={img8} alt="" className="collect_img" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="collect-div number4"
        >
          <div className="collect_left">
            <h1>历史记载</h1>
            <p className="hover-p">
              所有 Waifustation NFT 所有者都将通过 Sandbox、Decentraland、Matrix
              World 等元节中的 Waifustation 店面永远铭刻在历史中。
            </p>
          </div>
          <div className="collect_right">
            <img src={img5} alt="" className="collect_img" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="collect-div number5"
        >
          <div className="collect_left">
            <h1>独特的艺术</h1>
            <p className="hover-p">
              每个 NFT waifu
              都是一件独特设计的一件艺术品。没有两个waifus是一样的！
            </p>
          </div>
          <div className="collect_right">
            <img src={img4} alt="" className="collect_img" />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="collect-div number6"
        >
          <div className="collect_left">
            <h1>友情回赠</h1>
            <p className="hover-p">
              在我们的发布完成后，将向京都动画捐赠 10 ETH，以支持创作者并纪念
              2019 年的悲剧。
            </p>
          </div>
          <div className="collect_right">
            <img src={img2} alt="" className="collect_img" />
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="600"
          className="collect-div number7"
        >
          <div className="collect_left">
            <h1>所有权</h1>
            <p className="hover-p">
              所有 waifu NFT
              都具备完整的商业使用权。您可以随心所欲地处理您的waifus!
            </p>
          </div>
          <div className="collect_right">
            <img src={img7} alt="" className="collect_img" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="collect-div number8"
        >
          <div className="collect_left">
            <h1>获利</h1>
            <p className="hover-p">
              NFT 所有者有权在所有元节中获得一部分扭蛋收入。
            </p>
          </div>
          <div className="collect_right">
            <img src={img6} alt="" className="collect_img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCN
