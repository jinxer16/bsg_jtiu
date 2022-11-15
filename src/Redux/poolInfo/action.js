import { ActionTypes } from "../types";
import { financeAppContractAddress, financeAppContract_Abi } from "../../utilies/Contract";
import Web3 from "web3";
const web3Supply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/")
export const getpoolDetail = () => {
    return async (dispatch) => {
      let obj = {}
      try {
        let financeAppcontractOf = new web3Supply.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
        let totalUsers = await financeAppcontractOf.methods.totalUser().call();
        obj = {...obj,totalUsers}
  
        let diamond = await financeAppcontractOf.methods.diamond().call();
        diamond = web3Supply.utils.fromWei(diamond)
        obj = {...obj, diamond}
  
        let doubleDiamond = await financeAppcontractOf.methods.doubleDiamond().call();
        doubleDiamond = web3Supply.utils.fromWei(doubleDiamond)
        obj = {...obj, doubleDiamond}
  
  
        let topPool = await financeAppcontractOf.methods.topPool().call();
        topPool = web3Supply.utils.fromWei(topPool);
        obj = {...obj, topPool}
        await dispatch({ type: ActionTypes.POOL_DETAIL, payload: obj });
    } catch (e) {
      console.error(e);
    }
    }
  }