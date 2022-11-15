import React, { useEffect, useState } from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import { BsArrowDownRight } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { financeAppContractAddress, financeAppContract_Abi } from '../../utilies/Contract';
import RepetationComponent from '../My_team/RepetationComponent';
import './Reward_info.css'
import {useSelector} from 'react-redux'
import Web3 from 'web3';
const web3Supply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/")
function Reward_info() {

	let acc = useSelector((state) => state.connect?.connection);
	const [rewardInfo, setrewardInfo] = useState([])
	const [reward, setReward] = useState({})
	const [dayTopUsers, setDayTopUsers] = useState([])
	const getDetail = async () => {
			try {
				if (acc == "No Wallet") {
					console.log("No Wallet");
				  } else if (acc == "Wrong Network") {
					console.log("Wrong Wallet");
				  } else if (acc == "Connect Wallet") {
					console.log("Connect Wallet");
				  }else{
				const web3 = window.web3;
				let obj = {};
				let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
                let reward=await financeAppcontractOf.methods.rewardInfo(acc).call();
				obj["diamond"] = web3.utils.fromWei(reward.diamond)
				obj["doubleDiamond"] = web3.utils.fromWei(reward.doubleDiamond)
				obj["top"] = web3.utils.fromWei(reward.top)
				setReward(obj)
				let getCurDays = await financeAppcontractOf.methods.getCurDay().call();
				let arr = []
				for (let index = 0; index < 3; index++) {
					let topUser = await financeAppcontractOf.methods.dayTopUsers(getCurDays, index).call();
					arr.push(topUser)
				}
				setDayTopUsers(arr)

				// for (let i = 0; i < getDayLuckLength; i++) {
				// 	let dayLuckUser = await financeAppcontractOf.methods.dayLuckUsers(getCurDays, i).call();
				// 	let dayLuckDeposit = await financeAppcontractOf.methods.dayLuckUsersDeposit(getCurDays, i).call();
				// 	dayLuckDeposit = web3.utils.fromWei(dayLuckDeposit)
				// 	obj['adress'] = dayLuckUser;
				// 	obj['value'] = dayLuckDeposit;
				// 	arr.push(obj)
				// }
				// setrewardInfo(arr)
				// let daytopsueradress = []
				// for (let i = 0; i < getDayLuckLength; i++) {
				// 	let dayTopUsersAdress = await financeAppcontractOf.methods.dayTopUsers(getCurDays, i).call();
				// 	daytopsueradress.push(dayTopUsersAdress)
				// }
			}
			} catch (e) {
				toast.error(e.message);
			}
	}
	const getTopUser = async () => {
		try {
			let financeAppcontractOf = new web3Supply.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
			let getCurDays = await financeAppcontractOf.methods.getCurDay().call();
				let arr = []
				for (let index = 0; index < 3; index++) {
					let topUser = await financeAppcontractOf.methods.dayTopUsers(getCurDays, index).call();
					arr.push(topUser)
				}
				setDayTopUsers(arr)
		} catch (error) {
			console.error("error while get top user", error);
		}
	}
	useEffect(() => {
		getDetail()
		getTopUser()
	}, [acc]);

	return (
		<div>
			<h3 className='text-white mt-5 mb-3'>Reward Infos</h3>
			<RepetationComponent />
			<div className="main_deposit">
				<div className="second_deposit">
					<div className="fi_line">
						<p>Diamond</p>
						<p>{reward.diamond}</p>
					</div>
					
					<div className="fi_line">
						<p>Double Diamond</p>
						<p>{reward.doubleDiamond}</p>
					</div>
					<div className="fi_line">
						<p>Top</p>
						<p>{reward.top}</p>
					</div>
				</div>
			</div>
			<div className="main_deposit mb-3">
				<div className="second_deposit">
					<div className="fi_line">
						<p>Top 3 Players</p>
						{
							dayTopUsers.length===0?(
								<p>...0 Player</p>
							):(	
								<></>
							)
						}
					</div>
					
					{dayTopUsers.map((item, index) => {
						return (
							item != "0x0000000000000000000000000000000000000000" &&
							(<div className="pehli_line" key={index}>
								<div className="nill">{index + 1} <span className='ms-2 me-2'>|</span><span className='spn'> {item}</span></div>
								<div className='group_img'><BsArrowUpRight></BsArrowUpRight></div>
							</div>)
						)
					})}
				</div>
			</div>
		</div>
	)
}
export default Reward_info