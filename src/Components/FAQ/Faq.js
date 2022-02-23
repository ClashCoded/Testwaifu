import React from "react"
import "./Faq.css"
import Accordion from "react-bootstrap/Accordion"
import "bootstrap/dist/css/bootstrap.min.css"
function Faq() {
  return (
    <div id="faq" className="faq">
      <div data-aos="fade-up" className="faq_left">
        <h4 className="about_title">よくある質問</h4>
        <h1>
          frequently <br /> asked <br /> questions
        </h1>
        {/* removed code temp till we open discord */}
        <p>
          Join our support channel on{" "}
          <a href="http://discord.gg/BQacmjg8kg" target="__blank">
            Discord
          </a>{" "}
          if you have more questions!
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
            <Accordion.Header>WHEN IS THE DROP?</Accordion.Header>
            <Accordion.Body>MM/DD/YYYY</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>WHAT'S A WAIFU NFT?</Accordion.Header>
            <Accordion.Body>
              A waifu is the love of your life in anime format. Waifus are rare
              1 of 1 NFTs that grants special access to the Waifustation
              community. Each waifu NFT acts as a lottery ticket for the Prize
              Lottery. Waifus are also used for community voting after Mission
              Roadmap completion. Waifustation will be governed by the community
              via a DAO (Decentralized Autonomous Organization) where members
              will determine the future roadmap through the process of voting
              with their NFTs. Each NFT represents 1 vote regardless of rarity.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              HOW MUCH IS THE COST AND HOW TO BUY?
            </Accordion.Header>
            <Accordion.Body>
              The mint price is 0.05 ETH for Community Mint, 0.06 for Partner Mint, and
              0.07 for Public Sale. After initial mint, waifus will be available
              on secondary NFT markets such as Opensea, where prices will vary
              depending on the seller. You will need to have Ethereum (ETH) in a
              Metamask crypto wallet in order to purchase a waifu. Learn about
              Metamask at{" "}
              <a href="https://metamask.io/" target="__blank">
                https://metamask.io/
              </a>{" "}
              Also please be aware there are gas fees for sending transactions
              on the Ethereum network. These fees are variable and will
              fluctuate based on the traffic of the network. Please use{" "}
              <a href="https://ethgasstation.info/" target="__blank">
                https://ethgasstation.info/
              </a>{" "}
              to see the live cost of gas at any given moment. On drop day, you
              can get a waifu on the Waifustation homepage. If you missed the
              drop, you can also get one on secondary NFT markets such as
              Opensea and Rarible.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>HOW MANY WAIFUS WILL THERE BE?</Accordion.Header>
            <Accordion.Body>
              Only a total of 8,888 waifus will ever be minted into existence.
              We will reserve 100 waifus for giveaways, lotteries, marketing,
              and team.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>WHO'S ON THE TEAM?</Accordion.Header>
            <Accordion.Body>
              We are a team of artists, developers, and marketers that have been
              in the crypto space since early 2017. Most importantly, we are all
              lovers of anime waifus and NFTs. Our team is very honored to watch
              the crypto space grow and be able to bring together a community of
              like-minded people to do some good for the world.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>HOW ARE YOU SUPPORTING ARTISTS?</Accordion.Header>
            <Accordion.Body>
              To support artists and creators of Japanese animation, our team
              has pledged to donate 10 ETH to Kyoto Animation when the launch is
              complete. Our team will be in Japan to make the donation in person
              to commemorate the 36 artists and creators who have passed away
              during the July 18 2019 tragedy. The entire process will be
              recorded for our community to watch.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default Faq
