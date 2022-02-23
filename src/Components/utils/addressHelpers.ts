import addresses from '../config/constants/contracts'

const chainId = process.env.REACT_APP_CHAIN_ID

export const getCandyAddress = () => {
  return addresses.candy[chainId]
}
export const getEggLootboxAddress = () => {
  return addresses.eggLootbox[chainId]
}
export const getEggTokenAddress = () => {
  return addresses.eggToken[chainId]
}
export const getEggFactoryAddress = () => {
  return addresses.eggFactory[chainId]
  
}
export const getPetTokenAddress = () => {
  return addresses.petToken[chainId]
}
export const getPetFactoryAddress = () => {
  return addresses.petFactory[chainId]
}
