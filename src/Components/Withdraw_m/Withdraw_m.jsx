import React, {useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import m1 from "../Assets/m1.png"
import { MdArrowBackIos } from 'react-icons/md'
import "./Withdraw_m.css"
import ReactLoading from 'react-loading';
import { financeAppContractAddress, financeAppContract_Abi } from '../../utilies/Contract';
import {withdrawInfo} from '../../Redux/withdrawDetail/action'
import { toast } from 'react-toastify';
import {useSelector,useDispatch}  from "react-redux"

function Withdraw_m(props) {
    const dispatch = useDispatch()
  let acc = useSelector((state) => state.connect?.connection);
  let {withdrawDetail,all_val, status} = useSelector((state)=>state.withDrawInfo);
    const [loader, setLoader] = useState(false);
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
            dispatch(withdrawInfo(acc));
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
                if(all_val> 0 ){

                    const web3 = window.web3;
                    let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
                    await financeAppcontractOf.methods.withdraw().send({
                        from: acc 
                    });
                    getDetail()
                    props.onHide()
                    setLoader(false)
                    dispatch(withdrawInfo(acc));
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
                          { status && <div className="col-lg-12">
                                <div className="d-flex justify-content-evenly">
                                    <h5 className='text-white'>You have to upgrade your package to get passive income</h5>
                                    <p className='light mt-3'></p>
                                    {/* <p className='witddraw_p'>{withdrawDetail.unlock} ULE</p> */}
                                </div>
                            </div>}
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Unlock principal</p>
                                    <p className='witddraw_p'>{withdrawDetail.unlock} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Cycle reward</p>
                                    <p className='witddraw_p'>{withdrawDetail.statics} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>capitals</p>
                                    <p className='witddraw_p'>{withdrawDetail.capitals} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>1st level</p>
                                    <p className='witddraw_p'>{withdrawDetail.directs} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>2-4 level</p>
                                    <p className='witddraw_p'>{withdrawDetail.level4Released} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>5-25 level</p>
                                    <p className='witddraw_p'>{withdrawDetail.level5Released} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Freezing</p>
                                    <p className='witddraw_p'>{withdrawDetail.level4Freezed} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Diamond reward</p>
                                    <p className='witddraw_p'>{withdrawDetail.diamond} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Double Diamond reward</p>
                                    <p className='witddraw_p'>{withdrawDetail.doubleDiamond} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Top player reward</p>
                                    <p className='witddraw_p'>{withdrawDetail.top} ULE</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Total withdrawl</p>
                                    <p className='witddraw_p'>{withdrawDetail.totalWithdrawls} ULE</p>
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
                                    <p className='text-white'>Total Withdrawable</p>
                                    <p className='witddraw_p'>{all_val} ULE</p>
                                </div>
                            </div>
                        </div>

                        {/* {toatlWithdraw && <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                    <p className='text-white'>Maximum withdraw</p>
                                    <p className='witddraw_p'>{available_withdraw} ULE</p>
                                </div>
                            </div>
                        </div>} */}
                    </div>
                    <Button className='s_d_Ws  w-100' onClick={() => { withdrawAmount() }}>{loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Withdraw"}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Withdraw_m
