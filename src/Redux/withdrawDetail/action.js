import { ActionTypes } from "../types";
import { financeAppContractAddress, financeAppContract_Abi } from "../../utilies/Contract";
import Web3 from "web3";
export const withdrawInfo = (acc) => {
    return async (dispatch) => {
        try {
           
            let obj = {}
            let split="";
            const web3 = window.web3;
            let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress)
            let {status} =await financeAppcontractOf.methods.checkMaxPlusWithdrawable(acc).call()
            // let status = false
            let reward_info = await financeAppcontractOf.methods.rewardInfo(acc).call();
            let value= await financeAppcontractOf.methods.getCurSplit(acc).call();
            console.log("status", value);
             split=Number(web3.utils.fromWei(value)).toFixed(2)
            
            console.log("reward_info.directs",reward_info.directs)
            console.log("reward_info.capitals",reward_info.capitals)
            let capitals = web3.utils.fromWei(reward_info.capitals)
            let all_val =  (parseInt(web3.utils.fromWei(reward_info.capitals)) + parseInt(web3.utils.fromWei(reward_info.statics)) + parseInt(web3.utils.fromWei(reward_info.directs)) + parseInt(web3.utils.fromWei(reward_info.level4Released)) + parseInt(web3.utils.fromWei(reward_info.level5Released)) + parseInt(web3.utils.fromWei(reward_info.diamond)) + parseInt(web3.utils.fromWei(reward_info.doubleDiamond)) + parseInt(web3.utils.fromWei(reward_info.top)))

            obj['directs'] = Number(web3.utils.fromWei(reward_info.directs)).toFixed(2)
            obj['statics'] = Number(web3.utils.fromWei(reward_info.statics)).toFixed(2)
            obj['capitals'] = Number(web3.utils.fromWei(reward_info.capitals)).toFixed(2)
            obj['level4Released'] = Number(web3.utils.fromWei(reward_info.level4Released)).toFixed(2)
            obj['level5Released'] = Number(web3.utils.fromWei(reward_info.level5Released)).toFixed(2)
            obj['level4Freezed'] = (Number(web3.utils.fromWei(reward_info.level4Freezed)) + Number(web3.utils.fromWei(reward_info.level5Freezed))).toFixed(2);
            obj['diamond'] = Number(web3.utils.fromWei(reward_info.diamond)).toFixed(2)
            obj['doubleDiamond'] = Number(web3.utils.fromWei(reward_info.doubleDiamond)).toFixed(2)
            obj['top'] = Number(web3.utils.fromWei(reward_info.top)).toFixed(2)
            obj['unlock'] = Number(capitals).toFixed(2)
            obj['totalWithdrawls'] = Number(web3.utils.fromWei(reward_info.totalWithdrawls)).toFixed(2)
            

            dispatch({ type: ActionTypes.WITHDRAW_INFO, payload: obj, payload1:all_val,payload2:split, payload3:status });
            
            
        } catch (e) {
            console.log("error while get detiail",e);
        }
    }

}

