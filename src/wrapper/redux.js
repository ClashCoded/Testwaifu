import React from "react"
import { Provider } from "react-redux"
import { UseWalletProvider } from "@binance-chain/bsc-use-wallet"
import getRpcUrl from "../Components/utils/getRpcUrl"
import store from "../stores/root.store"

export default ({ element }) =>  {
    const rpcUrl= getRpcUrl()
    const chainId = parseInt(process.env.REACT_APP_CHAIN_ID);
    return (

<Provider store={store}>

<UseWalletProvider
chainId ={chainId}
connectors={{
    walletconnect: {rpcUrl}
}}>{element}</UseWalletProvider>

</Provider>
    )
}