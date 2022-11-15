import React, {useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import m1 from "../Assets/m1.png"
import { MdArrowBackIos } from 'react-icons/md'
import "./Withdraw_m.css"
import ReactLoading from 'react-loading';
import { financeAppContractAddress, financeAppContract_Abi } from '../../utilies/Contract';
import { loadWeb3 } from '../../apis/api';
import { toast } from 'react-toastify';
import {useSelector}  from "react-redux"

function Withdraw_m(props) {
    
  let acc = useSelector((state) => state.connect?.connection);
    const [loader, setLoader] = useState(false);
    const [available_withdraw, setAvailableWithdraw] = useState(0);
    const [rewardinfo, setRewardInfo] = useState({});
    const [toatlWithdraw, settotalWithdraw] = useState(0)
    const getDetail = async () => {
        try {
         if (acc == "No Wallet") {
            console.log("No Wallet");
          } else if (acc == "Wrong Network") {
            console.log("Wrong Wallet");
          } else if (acc == "Connect Wallet") {
            console.log("Connect Wallet");
          }else{
                let obj = {}
                const web3 = window.web3;
                let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
                let availWithdraw = await financeAppcontractOf.methods.withDraw_(acc).call();
                availWithdraw = Number(web3.utils.fromWei(availWithdraw)).toFixed(2)
                setAvailableWithdraw(availWithdraw);
                let remianReward = await financeAppcontractOf.methods.remainingReward(acc).call();
                obj['remianReward'] = Number(web3.utils.fromWei(remianReward)).toFixed(2);
                
                let reward_info = await financeAppcontractOf.methods.rewardInfo(acc).call();
                let capitals = web3.utils.fromWei(reward_info.capitals)
               
                let all_val =  (parseInt(web3.utils.fromWei(reward_info.capitals)) + parseInt(web3.utils.fromWei(reward_info.statics)) + parseInt(web3.utils.fromWei(reward_info.directs)) + parseInt(web3.utils.fromWei(reward_info.level4Released)) + parseInt(web3.utils.fromWei(reward_info.level5Released)) + parseInt(web3.utils.fromWei(reward_info.diamond)) + parseInt(web3.utils.fromWei(reward_info.doubleDiamond)) + parseInt(web3.utils.fromWei(reward_info.top)))
                settotalWithdraw(all_val)

                obj['directs'] = web3.utils.fromWei(reward_info.directs)
                obj['statics'] = Number(web3.utils.fromWei(reward_info.statics)).toFixed(2)
                obj['capitals'] = Number(web3.utils.fromWei(reward_info.directs)).toFixed(2)
                obj['level4Released'] = Number(web3.utils.fromWei(reward_info.level4Released)).toFixed(2)
                obj['level5Released'] = Number(web3.utils.fromWei(reward_info.level5Released)).toFixed(2)
                obj['level4Freezed'] = (Number(web3.utils.fromWei(reward_info.level4Freezed)) + Number(web3.utils.fromWei(reward_info.level5Freezed))).toFixed(2);
                obj['diamond'] = Number(web3.utils.fromWei(reward_info.diamond)).toFixed(2)
                obj['doubleDiamond'] = Number(web3.utils.fromWei(reward_info.doubleDiamond)).toFixed(2)
                obj['top'] = Number(web3.utils.fromWei(reward_info.top)).toFixed(2)
                obj['unlock'] = Number(capitals).toFixed(2)
                setRewardInfo(obj)
            }
            } catch (e) {
                console.log("error while get detiail",e);
            }

    }
    useEffect(() => {
        getDetail()
    }, [acc]);
    const withdrawAmount = async () => {
        try {
            if (acc == "No Wallet") {
                toast.info("No Wallet");
              } else if (acc == "Wrong Network") {
                toast.info("Wrong Wallet");
              } else if (acc == "Connect Wallet") {
                toast.info("Connect Wallet");
              }else{
                setLoader(true)
                console.log("available_withdraw",typeof toatlWithdraw);
                if(toatlWithdraw > 0 ){

                    const web3 = window.web3;
                    let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
                    await financeAppcontractOf.methods.withdraw().send({
                        from: acc 
                    });
                    getDetail()
                    props.onHide()
                    setLoader(false)
                    toast.success("successfully withdraw");
                }else{
                    setLoader(false);
                    toast.info("You don't have any reward yet!")
                }
            }
        }
        catch (e) {
            setLoader(false)
            console.log(e);
    }
}
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='modal_bg'>
                    {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 p-o">
                                <div className="d-flex">
                                    <div className="icons_m">
                                        <Button onClick={() => props.onHide()} className='color-black' style={{ backgroundColor: "#ffbf00", border: "1px solid #ffbf00" }}><MdArrowBackIos ></MdArrowBackIos></Button>
                                    </div>
                                    <h4 className='ms-5 modal_h4'>Withdraw</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className='body_m_bg bb'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Unlock principal</p>
                                    <p className='witddraw_p'>{rewardinfo.unlock} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Cycle reward</p>
                                    <p className='witddraw_p'>{rewardinfo.statics} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>1st level</p>
                                    <p className='witddraw_p'>{rewardinfo.capitals} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>2-4 level</p>
                                    <p className='witddraw_p'>{rewardinfo.level4Released} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>5-25 level</p>
                                    <p className='witddraw_p'>{rewardinfo.level5Released} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Freezing</p>
                                    <p className='witddraw_p'>{rewardinfo.level4Freezed} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Diamond reward</p>
                                    <p className='witddraw_p'>{rewardinfo.diamond} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Double Diamond reward</p>
                                    <p className='witddraw_p'>{rewardinfo.doubleDiamond} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Top player reward</p>
                                    <p className='witddraw_p'>{rewardinfo.top} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'> Remaining Reward</p>
                                    <p className='witddraw_p'>{rewardinfo.remianReward} ULE</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer className='footer_m_bg'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Total withdraw</p>
                                    <p className='witddraw_p'>{toatlWithdraw} ULE</p>
                                </div>
                            </div>
                        </div>

                        {toatlWithdraw && <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Maximum withdraw</p>
                                    <p className='witddraw_p'>{available_withdraw} ULE</p>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <Button className='s_d_Ws  w-100' onClick={() => { withdrawAmount() }}>{loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Withdraw"}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Withdraw_m
