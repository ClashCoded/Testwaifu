import React, { useState } from 'react'
// import { useCandy, useEggFactory, useEggToken } from '../../hooks/useContract'
// import { getEggFactoryAddress } from '../../utils/addressHelpers'
// import { getWeb3 } from "../../utils/web3"
import PopUpMessage from './PopUpMessage'
import { LootBox } from '../../config/constants/types'
import Preview from './Preview'

interface LootboxCardProps {
  price?: number
  probabilities: Array<number>
  id: number
  lootbox: LootBox
}

const LootboxCard: React.FC<LootboxCardProps> =  ({ price, probabilities, id, lootbox }) => {
  const [rewardMessage, setRewardMessage] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [buttonText, setButtonText] = useState('Gacha!')
  const [popUpVisible, setPopUpVisible] = useState(false)

  const handleClick = async () => {
    setIsOpen(!isOpen)
  }

  const { name } = lootbox

  // const ct = useCandy()
  // const ef = useEggFactory()
  // const et = useEggToken()
  // const w3 = getWeb3()

  const buyLootboxHandler = (i, p) => {
    setButtonDisabled(true)
    setButtonText('Gachaing...')

    let previousBalance
    // et.methods
    //   .balanceOf(w3.givenProvider.selectedAddress)
    //   .call()
    //   .then((bal) => {
    //     previousBalance = bal
    //   })

    // ct.methods
    //   .allowance(w3.givenProvider.selectedAddress, getEggFactoryAddress())
    //   .call()
    //   .then((data) => {
    //     if (data < p) {
    //       ct.methods
    //         .approve(getEggFactoryAddress(), 100000000)
    //         .send({ from: w3.givenProvider.selectedAddress })
    //         .then(() => {
    //           ef.methods
    //             .buyLootbox(i)
    //             .send({ from: w3.givenProvider.selectedAddress })
    //             .then((reciept) => {
    //               et.methods
    //                 .getUserEggs(w3.givenProvider.selectedAddress)
    //                 .call()
    //                 .then((mintedIds) => {
    //                   if (mintedIds.length > previousBalance) {
    //                     const newEggId = mintedIds[mintedIds.length - 1]
    //                     et.methods
    //                       .getEggFromMintedId(newEggId)
    //                       .call()
    //                       .then((data2) => {
    //                         setRewardMessage([data2[0], data2[1], data2[2]])
    //                         setPopUpVisible(true)
    //                         setButtonDisabled(false)
    //                         setButtonText('Gacha!')
    //                       })
    //                   }
    //                 })
    //             })
    //         })
    //     } else {
    //       ef.methods
    //         .buyLootbox(i)
    //         .send({ from: w3.givenProvider.selectedAddress })
    //         .then((reciept) => {
    //           et.methods
    //             .getUserEggs(w3.givenProvider.selectedAddress)
    //             .call()
    //             .then((mintedIds) => {
    //               if (mintedIds.length > previousBalance) {
    //                 const newEggId = mintedIds[mintedIds.length - 1]
    //                 et.methods
    //                   .getEggFromMintedId(newEggId)
    //                   .call()
    //                   .then((data2) => {
    //                     setRewardMessage([data2[0], data2[1], data2[2]])
    //                     setPopUpVisible(true)
    //                     setButtonDisabled(false)
    //                     setButtonText('Gacha!')
    //                   })
    //               }
    //             })
    //         })
    //     }
      // })

    // ct.methods.approve(getEggFactoryAddress(), p).send({ from: w3.givenProvider.selectedAddress }).then(() => {
    //     ef.methods.buyLootbox(i).send({ from: w3.givenProvider.selectedAddress }).then((reciept) => {
    //         et.methods.getUserEggs(w3.givenProvider.selectedAddress).call().then((mintedIds) => {
    //             if (mintedIds.length > previousBalance) {
    //                 const newEggId = mintedIds[mintedIds.length - 1]
    //                 et.methods.getEggFromMintedId(newEggId).call().then((data) => {
    //                     setRewardMessage(`The box returned ${data.color} egg. Visual: ${data.visual}, Class: ${data.class}`)
    //                 })
    //             }
    //         })
    //     })
    // })
  }

  let i = 0
  return (
    <div>
       {rewardMessage.length > 0 ? (
        <PopUpMessage message={rewardMessage} visibility={popUpVisible} setVisibility={setPopUpVisible} />
      ) : (
        ''
      )}

  <h1 className="lootboxcard-title">{name}</h1>
<div className="lootboxcard-container">
  <img className="gachapon-puller"src="/images/nfts/GachaponMachine2.png" />
  <div className="gachapon-components">
    
        <Preview lootbox={lootbox} />
        <p className="lootboxcard-p">{price} ETH</p>
        {/* <button className="lootbox-button-styled" onClick={() => buyLootboxHandler(id, price)} disabled={buttonDisabled}>
          <span className="lootbox-button-span" >
            <p className="lootbox-button-p">   {buttonText}</p>
          
          </span>
        </button> */}
        <button className="rotating-lootbox-button" onClick={() => buyLootboxHandler(id,price)} disabled={buttonDisabled}>
      
        </button>
        {/* <div className="lootboxcard-footer">
          <button className="lootboxcard-details" onClick={handleClick}>
              Details 
          </button>
          {isOpen && (
            <div className="info-block">
              <p className="details-p">
              Probabilities per class:{' '}
                {probabilities.map((prob) => {
                  return <span key={i++}>{prob}% </span>
                })}
              </p>
              <br />
              </div>
          )}
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default LootboxCard
