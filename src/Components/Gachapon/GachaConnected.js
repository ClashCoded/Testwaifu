import React, { useState, useEffect } from 'react'
import "./Gacha.css";
import orderBy from 'lodash/orderBy'
// import { useEggFactory } from '../hooks/useContract'
import LootBoxs from '../config/constants/LootBox'
import LootboxCard from "./Components/LootboxCard"


const GachaConnected = () => {
    const [lootboxs, setLootboxs] = useState([{name: "Gachapon 1"}, {name: "Gachapon 2"}, {name: "Gachapon 3"}])
    const [prices, setPrices] = useState([0.01, 0.1, 1])
    const [probabilities, setProbabilities] = useState([[4, 5, 6], [4, 5, 3], [1, 2, 6]])
    const [asyncFetched, setAsyncFetched] = useState(false)
    // const contract = useEggFactory()

    // if (!asyncFetched) {
    //     contract.methods.getLootboxPrices().call().then((data) => {
    //         setAsyncFetched(true)
    //         contract.methods.getLootboxProbabilities().call().then((data2) => {
    //             // setProbabilities(data2)
    //             // setPrices(data)
    //             // setLootboxs(orderBy(LootBoxs, 'sortOrder'))
    //         })
    //     })
    // }
    let i = 0;

    return (
        <div className="gacha-connected" >
        <div className="nft-container">
        <div className="nft-page">
            <h1 className="gacha-connected-title">Try your luck with one of the randomized lootboxes!</h1>
            <div className="nft-grid">
            {
                lootboxs.map((lootbox) => 
                    <LootboxCard lootbox={lootbox} price={prices[i]} probabilities={probabilities[i]} id={i} key={i++} />
                )
            }
            </div>
            </div>
        </div>
        </div>
    )
}

export default GachaConnected