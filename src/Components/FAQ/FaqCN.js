import React from "react"
import "./Faq.css"
import Accordion from "react-bootstrap/Accordion"
import "bootstrap/dist/css/bootstrap.min.css"
function FaqCN() {
  return (
    <div id="faq" className="faq">
      <div data-aos="fade-up" className="faq_left">
        <h4 className="about_title">よくある質問</h4>
        <h1>常见问题</h1>
        <p>
          如果您有更多问题，请加入我们在{" "}
          <a href="http://discord.gg/BQacmjg8kg" target="__blank">
            Discord
          </a>{" "}
          上的支持频道！
          {/* <span
            style={{
              color: "#FFC683",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            threat to themselves
          </span> */}
        </p>
      </div>
      <div data-aos="fade-up" data-aos-delay="400" className="faq_right">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>什么时候出版？</Accordion.Header>
            <Accordion.Body>MM/DD/YYYY</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>什么是waifu NFT?</Accordion.Header>
            <Accordion.Body>
              waifu 是动漫格式中你生命中的挚爱。 Waifus 是罕见的 1 个
              NFT，它授予对 Waifustation 社区的特殊访问权限。每个 waifu NFT
              都充当抽奖彩票。 Waifus 也用于任务路线图完成后的社区投票。
              Waifustation 将由社区通过
              DAO（去中心化自治组织）管理，成员将通过与 NFT
              投票的过程来确定未来的路线图。无论稀有程度如何，每个 NFT 代表 1
              票。
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>费用是多少以及如何购买？</Accordion.Header>
            <Accordion.Body>
              Community Mint 的铸币价格为 0.05 ETH，Partner Mint 的铸币价格为
              0.06，以及 0.07 公开发售。初始铸币后，waifus 将可用 在 Opensea
              等二级 NFT 市场上，价格会有所不同 取决于卖家。您将需要拥有以太坊
              (ETH) Metamask 加密钱包，以购买 waifu。学习关于 元掩码{" "}
              <a href="https://metamask.io/" target="__blank">
                https://metamask.io/
              </a>{" "}
              另请注意，发送交易需要支付汽油费
              在以太坊网络上。这些费用是可变的，将 根据网络流量波动。请用{" "}
              <a href="https://ethgasstation.info/" target="__blank">
                https://ethgasstation.info/
              </a>{" "}
              在任何给定时刻查看天然气的实时成本。在下降日，你 可以在
              Waifustation 主页上获得 waifu。如果你错过了 下降，您还可以在二级
              NFT 市场上获得一个，例如 Opensea和Rarible。
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>会有多少个流浪者？</Accordion.Header>
            <Accordion.Body>
              总共只有 8,888 个 waifus 将被铸造出来。 我们将为赠品、彩票、营销、
              和团队。
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>谁在团队中？</Accordion.Header>
            <Accordion.Body>
              我们是一支由艺术家、开发人员和营销人员组成的团队 自 2017
              年初以来在加密领域。最重要的是，我们都是
              动漫waifus和NFT的爱好者。我们的团队非常荣幸地观看
              加密空间不断发展并能够汇集一个社区 志同道合的人为世界做点好事。
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>您如何支持艺术家？</Accordion.Header>
            <Accordion.Body>
              为了支持日本动画的艺术家和创作者，我们的团队已承诺在我们出版成功时向京都动画捐赠
              10 ETH 。 我们的团队将在日本制作 亲自捐款纪念36位艺术家和创作者 在
              2019 年 7 月 18 日的悲剧中去世。整个
              过程将被记录下来供我们社区观看。
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default FaqCN
