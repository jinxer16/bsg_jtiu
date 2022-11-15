import React, { useEffect, useState } from 'react'
import RepetationComponent from '../My_team/RepetationComponent'
import './Latest_Deposit.css'
import Stacking_top from '../Stacking_top/Stacking_top'
import { loadWeb3 } from '../../apis/api'
import { financeAppContractAddress, financeAppContract_Abi } from '../../utilies/Contract'
import { toast } from 'react-toastify'
import Moment from 'react-moment';
import m1 from "../Assets/download.png"
import Web3 from 'web3'
import { useSelector } from "react-redux";
// import Moment from 'react-moment';
import moment from 'moment';
import { ColorRing } from 'react-loader-spinner'
const web3Supply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/")
function Latest_Deposit() {

	const [orderInfos, setOrderInfo] = useState('')
	const [userinfo, setUserInfo] = useState('')
	const [orderamount, setOrderAmount] = useState('')
	const [amount, setAmount] = useState([])
	const [rewardInfo, setrewardInfo] = useState([])
	const [isloading, setisloading] = useState(false)
	const gertRewardAddress = async () => {
			try {
				const web3 = window.web3;
				let financeAppcontractOf = new web3Supply.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
				let depositLength = await financeAppcontractOf.methods.getDepositorsLength().call();
				let dd = {}
				setisloading(true)
				for (let i = 0; i < depositLength; i++) {
					let depositAddress = await financeAppcontractOf.methods.depositors(i).call()
					let next = await financeAppcontractOf.methods.getOrderLength(depositAddress).call()
					dd[depositAddress] = next;
				}
				// console.log("wIT FOR ME", dd, Object.keys(dd))
				let objectdata = []
				for (let index = 0; index < Object.keys(dd).length; index++) {
					const elementKey = Object.keys(dd)[index];
					const next = dd[elementKey]
					for (let j = next - 1; j >= 0; j--) {
						let userinfos = await financeAppcontractOf.methods.orderInfos(elementKey, j).call()

						let address_here = elementKey?.substring(0, 15) + "..." + elementKey?.substring(elementKey?.length - 15);
						let reward = web3.utils.fromWei(userinfos.amount)
						reward = parseFloat(reward).toFixed(3)
						let newArr = { address: address_here, userinfos1: moment((userinfos?.start * 1) * 1000).format('D MMM YYYY hh:mm:ss a'), userinfos: (userinfos?.start), amount: reward }
						objectdata.push(newArr)
					}
				}

				let objectdata1 = objectdata.sort(function (left, right) {
					return Number(left?.userinfos) < Number(right?.userinfos) ? 1 : -1
				});
				setrewardInfo(objectdata1)
				setisloading(false)


			} catch (e) {
				console.log(e.message);


			}
	}
	useEffect(() => {
		gertRewardAddress()
	}, []);

	return (
		<div>

			<h3 className='text-white mt-5 mb-3'>Latest Deposit</h3>
			<RepetationComponent />
			<div className="main_deposit my-5">
				<div className="second_deposit">
					<div className="fi_line">
						<p>Latest Depositors</p>
					</div>
					{isloading ? <div className="first_line"><ColorRing
						visible={true}
						height="80"
						width="80"
						ariaLabel="blocks-loading"
						wrapperStyle={{}}
						wrapperClass="blocks-wrapper"
						colors={['#ffbf00', '#ffbf00', '#ffbf00', '#ffbf00', '#ffbf00']}
					/>
					</div> : <>	
					{
					rewardInfo && rewardInfo.slice(0, 10).map((item, index) => {
						return (
							<div className="first_line">
								<span className='spn '>{`${index + 1}).`}</span>
								<span className='inlarge'>{item.address}</span>
								<span className='inResponse' style={{marginLeft:'1rem'}}>{item.address?.substring(0, 4) + "..." + item.address?.substring(item.address?.length - 4)}</span>
								<span><Moment format="D MMM YYYY hh:mm:ss a" unix >{`${item.userinfos}`}</Moment></span>

								<div className='group_img '><img  src={m1} className='rounded-circle' alt="" width="15%" />&nbsp;&nbsp; &nbsp; {item.amount} &nbsp;ULE</div>
							</div>)
					})}</>}

				</div>
			</div>
		</div>
	)
}

export default Latest_Deposit