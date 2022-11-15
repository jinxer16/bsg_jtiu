import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdArrowBackIos } from 'react-icons/md'
import "./Deposite_m.css"
import m1 from "../Assets/1200px-Dai_Logo.png"
import { financeAppContractAddress, financeAppContract_Abi, financeAppTokenAddress, financeAppTokenAbi } from '../../utilies/Contract';
import {useSelector, useDispatch}  from "react-redux";
import {getpoolDetail} from '../../Redux/poolInfo/action';
import {getRemaintime} from '../../Redux/remaintime/action';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
function Deposite_m(props) {
    let acc = useSelector((state) => state.connect?.connection);
    let [loader, setloader] = useState(false)
    let [depositandintrest, setdepositandintrest] = useState("50")
    const dispatch = useDispatch()
    const depositAmount = async () => {
        try {
            if (acc == "No Wallet") {
                toast.info("No Wallet");
              } else if (acc == "Wrong Network") {
                toast.info("Wrong Wallet");
              } else if (acc == "Connect Wallet") {
                toast.info("Connect Wallet");
              }else{
                
                const web3 = window.web3;
                const contract = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
                if (parseFloat(depositandintrest) >= 50 && parseFloat(depositandintrest) <= 5000) {
                    const {maxDeposit, referrer} = await contract.methods.userInfo(acc).call();
                if(parseFloat(depositandintrest) >= parseFloat(web3.utils.fromWei(maxDeposit))){
                    if (parseInt(depositandintrest) % 50 === 0) {
                        if (referrer == '0x0000000000000000000000000000000000000000') {
                            toast.error('please Register Account 1st ')
                        }else {
                            setloader(true)
                            const token = new web3.eth.Contract(financeAppTokenAbi, financeAppTokenAddress);
                            let value = web3.utils.toWei(depositandintrest);
                            await token.methods.approve(financeAppContractAddress,value).send({
                                from:acc
                            });
                            await contract.methods.deposit(value).send({
                                from:acc
                         })
                         dispatch(getRemaintime())
                         dispatch(getpoolDetail())
                         props.onHide();
                         toast.success("Amount Deposited successfully")
                         setloader(false)
                        }
                    }
                    else {
                        toast.error('please enter value in ratio 50 ')
                    }
                }else{
                    toast.info(`please enter value ${web3.utils.fromWei(maxDeposit)} or above`)
                }
                }else{
                    toast.info('value must be greater then 50 and less then 5000 ')
                }
              }
        } catch (error) {
            setloader(false)
            console.error("error while deposit amount", error.message);
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
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 p-o">
                                <div className="d-flex">
                                    <div className="icons_m">
                                        <Button onClick={() => props.onHide()} style={{ backgroundColor: "#ffbf00", border: "1px solid #ffbf00" }}><MdArrowBackIos ></MdArrowBackIos></Button>
                                    </div>
                                    <h4 className='ms-5 modal_h4'>Deposit</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className='body_m_bg'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <input type="number" min="50" max="2000" value={depositandintrest} onChange={(e)=>{
                                    setdepositandintrest(e.target.value)
                                }} className='input_modal' placeholder='50' />
                                <p className='modal_pa'>Minimum deposit 50 ULE. A ratio of 50 max 10000</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='footer_m_bg'>
                    <Button className='s_d_Ws  w-100' onClick={depositAmount}>{loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Confirm"} </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Deposite_m
