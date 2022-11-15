import React, { useEffect, useState } from 'react'
import "./Stack_level.css"
import { AiOutlineStar } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"

import { AiOutlineQuestionCircle } from "react-icons/ai"
import { financeAppContractAddress, financeAppContract_Abi, financeAppTokenAddress, financeAppTokenAbi } from '../../utilies/Contract';
import { loadWeb3 } from '../../apis/api';
import Web3 from 'web3'
import { toast } from 'react-toastify';
import Rating from 'react-rating';
import { CopyToClipboard, onCopy } from 'react-copy-to-clipboard';
import { AiOutlineCopy } from 'react-icons/ai'
import {useSelector} from 'react-redux'
function Stack_level() {
    let acc = useSelector((state) => state.connect?.connection);
    const [refrealAdress, setrefrealAdress] = useState('')
    const [usdtBalance, setUsdtBalance] = useState(0)
    const [trxBalance, setTrxBalance] = useState('')
    const [myLevel, setMyLevel] = useState('')
    const [userIncome, setUserIncome] = useState('')
    const [userAccountbalance, setUserAccountBalance] = useState('')
    const [copyTest, setcopyTest] = useState(false)



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
                let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
                let financeAppTokenOf = new web3.eth.Contract(financeAppTokenAbi, financeAppTokenAddress);

                let balanceOf = await financeAppTokenOf.methods.balanceOf(acc).call();
                let usdtamount = Number(web3.utils.fromWei(balanceOf)).toFixed(2)

                setUsdtBalance(usdtamount)

                let userinfo = await financeAppcontractOf.methods.userInfo(acc).call();

                setMyLevel(userinfo.level)
                let userincome = web3.utils.fromWei(userinfo.totalRevenue)
                userincome = parseFloat(userincome).toFixed(2)

                setUserIncome(userincome)
                let balance = new web3.eth.getBalance(acc).then((response) => {
                    let userBalance = web3.utils.fromWei(response)
                    // console.log('what is balance', userBalance)

                    userBalance = Number(userBalance).toFixed(2)
                    setUserAccountBalance(userBalance)
                    // console.log('what is balance', userBalance)
                })
                setrefrealAdress(userinfo.referrer)
            }
            } catch (e) {
                // toast.error(e.message);
                console.log(e.message);


            }

    }
    useEffect(() => {
        getDetail()


    }, [acc]);


    useEffect(() => {
        copyTest ? toast.success("Copied") : <></>
        setTimeout(() => {
            setcopyTest(false)
        }, 10);
    }, [copyTest])




    return (
        <div className='stack_level_main_bg py-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card stack_inner_card">
                            <div className="stack_level_content">
                                <h6 className='stack_level_h6'><Rating
                                    style={{ color: "#ffbf00" }}
                                    initialRating={myLevel}
                                    emptySymbol={<AiOutlineStar />}
                                    fullSymbol={<AiFillStar className='star_color' />}
                                    start={0}
                                    stop={5}
                                    readonly

                                /></h6>

                            </div>
                            <div className="d-flex S_sss">
                                <p className='s_l_p'>Income</p>
                                <p className=' aliment'>{Number(userIncome).toFixed(2)}</p>
                            </div>
                            <div className="d-flex S_sss">
                                <p className='s_l_p'>BNB Balance</p>
                                <p className=' aliment'>{userAccountbalance}</p>
                            </div>
                            <div className="d-flex S_sss">
                                <p className='s_l_p'>ULE Balance:</p>
                                <p className=' aliment '>{usdtBalance} ULE</p>
                            </div>
                            <div className="d-flex S_sss">
                                <p className='s_l_p'>Referral:</p>
                                <p className=' aliment width_adjust'>{refrealAdress}</p>
                                <p className=' aliment width_adjust2'>{refrealAdress?.substring(0, 8) + "..." + refrealAdress?.substring(refrealAdress?.length - 8)}</p>

                            </div>
                            <div className="d-flex S_ssss">
                                <p className='s_l_p'>Address:</p>
                                <p className=' aliment width_adjust3'>{window.location.href}</p>
                                <span style={{ marginTop: "-0.8rem" }}>

                                    <CopyToClipboard onCopy={() => setcopyTest(true)} text={
                                        refrealAdress == "0x0000000000000000000000000000000000000000" ?
                                            `${window.location.href}`


                                            :
                                            `${window.location.href}?referrallink=${acc}`



                                    } >
                                        <AiOutlineCopy className="text-white fs-4" />

                                    </CopyToClipboard>
                                </span>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Stack_level
