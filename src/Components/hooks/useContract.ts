import { useEffect, useState } from 'react'
import { AbiItem } from 'web3-utils'
import { ContractOptions } from 'web3-eth-contract'
import useWeb3 from '../hooks/useWeb3'
import {getEggLootboxAddress, getEggFactoryAddress, getEggTokenAddress, getPetFactoryAddress, getPetTokenAddress, getCandyAddress } from '../utils/addressHelpers'
import erc20 from '../../abi/erc20.json'
import eggToken from '../../abi/eggToken.json'
import eggFactory from '../../abi/eggFactory.json'
import eggLootBox from "../../abi/eggLootbox.json"
import petToken from '../../abi/petToken.json'
import petFactory from '../../abi/petFactory.json'

const useContract = (abi: AbiItem, address: string, contractOptions?: ContractOptions) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState(new web3.eth.Contract(abi, address, contractOptions))

  useEffect(() => {
    setContract(new web3.eth.Contract(abi, address, contractOptions))
  }, [abi, address, contractOptions, web3])

  return contract
}

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
  const erc20Abi = (erc20 as unknown) as AbiItem
  return useContract(erc20Abi, address)
}

export const useCandy = () => {
  return useERC20(getCandyAddress())
}

export const useEggToken = () => {
  const abi = (eggToken as unknown) as AbiItem
  return useContract(abi, getEggTokenAddress())
}

export const useEggFactory = () => {
  const abi = (eggFactory as unknown) as AbiItem
  return useContract(abi, getEggFactoryAddress())
}
export const useEggLootBox = () => {
  const abi = (eggLootBox as unknown) as AbiItem
  return useContract(abi, getEggLootboxAddress())
}

export const usePetToken = () => {
  const abi = (petToken as unknown) as AbiItem
  return useContract(abi, getPetTokenAddress())
}

export const usePetFactory = () => {
  const abi = (petFactory as unknown) as AbiItem
  return useContract(abi, getPetFactoryAddress())
}


export default useContract
