import React, { useState, useEffect, useRef } from 'react'
import './Stack_re.css'
import { BsFillStopwatchFill } from 'react-icons/bs'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { GiTrophyCup } from 'react-icons/gi'
import { BsStars } from 'react-icons/bs'
import { financeAppContractAddress, financeAppContract_Abi, financeAppTokenAddress, financeAppTokenAbi } from '../../utilies/Contract';
import { loadWeb3 } from '../../apis/api';
import Web3 from 'web3'
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap'

function Stack_re() {

    const [days, setDays_here] = useState('')

    const [hours, setHours_here] = useState('')

    const [minutes, setMunits_here] = useState('')

    const [seconds, setSeconds] = useState('')

    const [info1, setinfo1] = useState(false)
    const [info2, setinfo2] = useState(false)
    const [info3, setinfo3] = useState(false)
    const [info4, setinfo4] = useState(false)


    const [claimdays, setClaimDays_here] = useState('')

    const [claimhours, setClaimHours_here] = useState('')

    const [claimminutes, setClaimMunits_here] = useState('')

    const [claimseconds, setClaimSeconds] = useState('')

    const [isdisable, setIsDisable] = useState(true)
    const [userfee_Amount, setuserfee_Amount] = useState("")



    let user = useRef()

    const getDetail = async () => {
        let acc = await loadWeb3();

        const web3 = window.web3;
        let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
        let startTime = await financeAppcontractOf.methods.lastDistribute().call();
        // console.log("startTime",startTime);


        let timer_get = startTime;

        if (timer_get <= 0) {
            setDays_here(0)
            setHours_here(0)
            setMunits_here(0)
            setSeconds(0)

        }
        else {
            
            var currentDateTime = new Date();
            let resultInSeconds = currentDateTime.getTime() / 1000;
            let topupInSeconds = Number(timer_get) + Number(86400);
            // console.log("timer_get",topupInSeconds);

            let Time_here =   topupInSeconds - resultInSeconds
            let TimeFinal = parseInt(Time_here)
            if (TimeFinal > 0) {
                let days = parseInt(TimeFinal / 86400)

                setDays_here(days)
                TimeFinal = TimeFinal % (86400)
                let hours = parseInt(TimeFinal / 3600)
                setHours_here(hours)
                TimeFinal %= 3600
                let munites = parseInt(TimeFinal / 60)
                setMunits_here(munites)
                TimeFinal %= 60
                let second_here = parseInt(TimeFinal)

                setSeconds(second_here)
                user = 'yes'

            }
            else {
                setDays_here(0)
                setHours_here(0)
                setMunits_here(0)
                setSeconds(0)


                if (user == "yes") {
                    distributePoolReward()

                }
                user = ''


            }

        }

    }
    const startclaimtime = async () => {
        let acc = await loadWeb3();

        const web3 = window.web3;
        let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);

        let startTime_for_claimGassFee = await financeAppcontractOf.methods.UserFee(acc).call();
        setuserfee_Amount(web3.utils.fromWei(startTime_for_claimGassFee?.amount))
        // console.log('startTime_for_claimGassFee', startTime_for_claimGassFee.time)

        if (startTime_for_claimGassFee?.amount > 0) {
            setIsDisable(false)

        } else {
            setIsDisable(true)

        }

        if (startTime_for_claimGassFee.time > 0) {
            let sevenDaysSeconds = 604800
            startTime_for_claimGassFee = parseInt(startTime_for_claimGassFee.time) + parseInt(sevenDaysSeconds)
            let timer_get = startTime_for_claimGassFee;
            if (timer_get <= 0) {
                setClaimDays_here(0)
                setClaimHours_here(0)
                setClaimMunits_here(0)
                setClaimSeconds(0)
            }
            else {
                var currentDateTime = new Date();
                let resultInSeconds = currentDateTime.getTime() / 1000;
                let Time_here = (timer_get) - resultInSeconds
                let TimeFinal = parseInt(Time_here)
                if (TimeFinal > 0) {
                    let days = parseInt(TimeFinal / 86400)

                    setClaimDays_here(days)
                    TimeFinal = TimeFinal % (86400)
                    let hours = parseInt(TimeFinal / 3600)
                    setClaimHours_here(hours)
                    TimeFinal %= 3600
                    let munites = parseInt(TimeFinal / 60)
                    setClaimMunits_here(munites)
                    TimeFinal %= 60
                    let second_here = parseInt(TimeFinal)

                    setClaimSeconds(second_here)

                    // user = 'yes'


                }
                else {
                    setClaimDays_here(0)
                    setClaimHours_here(0)
                    setClaimMunits_here(0)
                    setClaimSeconds(0)
                    // setIsDisable(false)

                }

            }
        }
        else {
            // alert('time must be greater then 0')
        }


    }



    const distributePoolReward = async () => {
        let acc = await loadWeb3();
        const web3 = window.web3;
        let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
        let distributePoolReward = await financeAppcontractOf.methods.distributePoolRewards().send({ from: acc });
       
    }
    const claimGassFee = async () => {
        let acc = await loadWeb3();
        const web3 = window.web3;
        let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
        let ClainGassFee = await financeAppcontractOf.methods.ClaimGassFee().send({ from: acc });
    
    }
    // useEffect(() => {

    //   let id=  setInterval(() => {
    //         getDetail()
    //         startclaimtime()

    //     }, 1000);
    //     return () => {
    //         clearInterval(id)
    //     }

    // }, []);

    return (
        <div className='stack_re_main_bg'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card stack_re_card">
                            <div className="d-flex dsds">
                                <BsFillStopwatchFill className='icon_color fs-3'></BsFillStopwatchFill>
                                <div>
                                    <h3 className='stack_re_h3'>Lucky Reward</h3>
                                    <p className='text-white'>Time Remaining</p>
                                </div>
                            </div>
                            <div className="d-flex sdsd text-white" style={{ alignItems: "center", fontSize: "1.2rem" }}> {days} D : {hours} H : {minutes} M : {seconds} S
                                {/* <div className="zero">0</div>
                                <div className="zero ms-1">0</div>
                                <p className='text-white ms-2 fs-4 mb-1 pas'>:</p>
                                <div className="zero ms-1">0</div>
                                <div className="zero ms-1">0</div>
                                <p className='text-white ms-2 fs-4 mb-1 pas'>:</p>
                                <div className="zero ms-1">0</div>
                                <div className="zero ms-1">0</div> */}

                                <div className="d-flex ques mt-3">
                                    <p className='aliment '>info</p>
                                    <AiFillQuestionCircle className='icon_color s_i' onClick={() => setinfo1(!info1)}></AiFillQuestionCircle>
                                </div>
                                {
                                    info1 ? <>   <div className='rounded py-1 px-2' style={{ border: "1px solid #ffbf00" }}>
                                        <p className='font_size mb-0'>Daily Last 10 <br />depositer shall <br />be rewarded</p>
                                    </div></> : ""
                                }

                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-8">
                        <div className="card stack_re_card">
                            <div className="d-flex dsds">
                                <GiTrophyCup className='icon_color fs-3'></GiTrophyCup>
                                <div>
                                    <h3 className='stack_re_h3'>Daily Top Reward</h3>
                                    <p className='text-white'>Time Remaining</p>
                                </div>
                            </div>
                            <div className="d-flex sdsd text-white" style={{ alignItems: "center", fontSize: "1.2rem" }}> {days} D : {hours} H : {minutes} M : {seconds} S
                                {/* <div className="zero">0</div>
                                <div className="zero ms-1">0</div>
                                <p className='text-white ms-2 fs-4 mb-1 pas'>:</p>
                                <div className="zero ms-1">0</div>
                                <div className="zero ms-1">0</div>
                                <p className='text-white ms-2 fs-4 mb-1 pas'>:</p>
                                <div className="zero ms-1">0</div>
                                <div className="zero ms-1">0</div> */}

                                <div className="d-flex ques mt-3">
                                    <p className='aliment '>info</p>
                                    <AiFillQuestionCircle className='icon_color s_i' onClick={() => setinfo2(!info2)}></AiFillQuestionCircle>
                                </div>
                                {
                                    info2 ? <>   <div className='rounded py-1 px-2' style={{ border: "1px solid #ffbf00" }}>
                                        <p className='font_size mb-0'>Top 3 inviter daily<br />shall split the <br />pool daily</p>
                                    </div></> : ""
                                }

                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-8">
                        <div className="card stack_re_card">
                            <div className="d-flex dsds">
                                <BsStars className='icon_color fs-3'></BsStars>
                                <div>
                                    <h3 className='stack_re_h3'>Star Reward</h3>
                                    <p className='text-white'>Time Remaining</p>
                                </div>
                            </div>
                            <div className="d-flex sdsd text-white" style={{ alignItems: "center", fontSize: "1.2rem" }}> {days} D : {hours} H : {minutes} M : {seconds} S


                                <div className="d-flex ques mt-3">
                                    <p className='aliment'>info</p>
                                    <AiFillQuestionCircle className='icon_color s_i' onClick={() => setinfo3(!info3)}></AiFillQuestionCircle>
                                </div>
                                {
                                    info3 ? <>  <div className='rounded py-1 px-2' style={{ border: "1px solid #ffbf00" }}>
                                        <p className='font_size mb-0'>4 star  player shall <br />split the daily <br />pool daily</p>
                                    </div></> : ""
                                }

                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-8">
                        <div className="card stack_re_card">
                            <div className="d-flex dsds">
                                <BsStars className='icon_color fs-3'></BsStars>
                                <div className='' style={{ textAlign: "left" }}>
                                    <h3 className='stack_re_h3'>Claim Gas Fee</h3>
                                    <p className='text-white'>Claim your Gas Fee any Time</p>

                                    {/* <p className='text-white'>Time Remaining</p> */}
                                </div>
                            </div>
                            <div className="d-flex sdsd claim_bottom text-white" style={{ alignItems: "center", fontSize: "1.2rem" }}>



                                <div className='d-flex sdsd'>
                                    {/* {claimdays} D : {claimhours} H : {claimminutes} M : {claimseconds} S */}

                                    {/* <div className="d-flex ques ">
                                        <p className='aliment'>info</p>
                                        <AiFillQuestionCircle className='icon_color s_i' onClick={() => setinfo4(!info4)}></AiFillQuestionCircle>
                                    </div> */}
                                </div>
                                {/* {
                                    info4 ? <>  <div className='rounded py-1 px-2' style={{ border: "1px solid #ffbf00" }}>
                                        <p className='font_size mb-0'>You can claim your<br />gas fee after<br /> any Time</p>
                                    </div></> : ""
                                } */}

                                <div className='claim_amount' >
                                    Amount  &nbsp;&nbsp;
                                    {userfee_Amount} DAI
                                </div>
                                {/* {
                                    info3 ? <>  <div className='rounded py-1 px-2' style={{ border: "1px solid #ffbf00" }}>
                                        <p className='font_size mb-0'>4 star  player shall <br />split the daily <br />pool daily</p>
                                    </div></> : ""
                                } */}

                            </div>

                            <Button className='start_btn  mt-3' disabled={isdisable} onClick={() => claimGassFee()} style={{ backgroundColor: "#ffbf00", color: "black", border: "1px solid #ffbf00" }}>
                                Claim Gas Fee
                            </Button>
                        </div>
                    </div>
                </div>

                {/* <Button className=' mt-3 ' disabled={isdisable} onClick={() => distributePoolReward()} style={{ backgroundColor: "#ffbf00", color: "black", border: "none" }}>Distribute Pool Reward</Button> */}
                {/* <button className='stack_btn_s mt-3 ' disabled={isdisable} onClick={distributePoolReward}>Distribute Pool Reward</button> */}

            </div>

        </div>
    )
}

export default Stack_re
