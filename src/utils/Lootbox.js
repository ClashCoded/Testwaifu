/* eslint-disable no-console */
import Web3 from "web3"
import eggFactory from "../abi/eggFactory.json"
import eggToken from "../abi/eggToken.json"
import useCandy from "../abi/erc20.json"
import { useEggToken } from "../Components/hooks/useContract"

const eggFactoryAddress = "0x7863F37309Fa7FA7A110C1C1c5b42c72145Cf708"
const eggTokenAddress = "0x48E996069778e36627fA9Dd0Bd35856fa163a382"
const useCandyAddress = "0xb66534B8c50900C25368dEb23BAdD75FE8C2d32C"

const nftContractAddress = "0x6Cf91a82731f2f5943ef6522064Ee76D0972FEE4"

export const createWeb3Instance = async () => {
  let web3 = window.web3
  web3 = new Web3(web3.currentProvider)
  return web3
}

export const geteggFactoryContractInstance = async () => {
  try {
    let web3Instance = await createWeb3Instance()

    return await new web3Instance.eth.Contract(eggFactory.abi, eggFactoryAddress)
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const geteggTokenContractInstance = async () => {
  try {
    let web3Instance = await createWeb3Instance()

    return await new web3Instance.eth.Contract(
      eggToken.abi,
      eggTokenAddress
    )
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const getMaxNftPurchase = async () => {
  try {
    const testContract = await gettestContractInstance()
    const maxPurchase = await testContract.methods.MAX_NFT_PURCHASE().call()

    return maxPurchase
  } catch (err) {
    console.log("Max purchase ", err)
    throw err
  }
}

export const getMaxSupply = async () => {
  try {
    const testContract = await gettestContractInstance()
    const maxSupply = await testContract.methods.MAX_SUPPLY().call()

    return maxSupply
  } catch (err) {
    console.log("Max Supply ", err)
    throw err
  }
}

export const getNftPrice = async () => {
  try {
    const eggFactoryAddress = await geteggFactoryContractInstance()
    const nftPrice = await eggFactoryAddress.methods.getLootboxPrices().call()

    return parseInt(nftPrice) / 1e18
  } catch (err) {
    console.log("Max Supply ", err)
    throw err
  }
}

export const eggmint = async (tokens, from) => {
  try {
    const eggFactoryAddress = await geteggFactoryContractInstance()
    let value = await getNftPrice()
    value = value * tokens * 1e18
    const result = await eggFactoryAddress.methods.EggMinted(tokens).send({ from, value })
    return result
  } catch (err) {
    console.log("Mint ", err)
    throw err
  }
}

export const getTotalSupply = async () => {
  try {
    const ercContract = await getERCContractInstance()
    const totalSupply = await ercContract.methods.totalSupply().call()

    return totalSupply
  } catch (err) {
    console.log("Total Supply ", err)
    throw err
  }
}
