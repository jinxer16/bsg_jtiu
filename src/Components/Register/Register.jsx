import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdArrowBackIos } from 'react-icons/md';
import {RiRefreshFill} from 'react-icons/ri'
import "./register.css"
import m1 from "../Assets/m1.png"
import { financeAppContractAddress, financeAppContract_Abi, financeAppTokenAddress, financeAppTokenAbi } from '../../utilies/Contract';
import { loadWeb3 } from '../../apis/api';
import Web3 from 'web3'
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import {useSelector} from 'react-redux'
const web3Supply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/")
function Register(props, getAccount) {
    let acc = useSelector((state) => state.connect?.connection);
    let [accadress, setaccadress] = useState('')
    let [regisdterAdress, setRegisdterAdress] = useState('')
    let [amount, setAmount] = useState('')
    const [RefID, setRefID] = useState("")
    let [loader, setloader] = useState(false)

    const registerAddress = async () => {
        try {
            setloader(true)
            const web3 = window.web3;
            const contract =new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
            await contract.methods.register(regisdterAdress).send({
                from:acc
            });
            props.onHide()
            toast.success("user registerd successfully")
            setloader(false)
        } catch (error) {
            setloader(false)
            console.error("error while register address", error.message);
        }
    }
    const newRegister = async () => {
        try {
            if (acc == "No Wallet") {
                toast.info("No Wallet");
              } else if (acc == "Wrong Network") {
                toast.info("Wrong Wallet");
              } else if (acc == "Connect Wallet") {
                toast.info("Connect Wallet");
              }else{
                const web3 = window.web3;
                const contract =new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
                const refAddress = await contract.methods.defaultRefer().call();
                if(refAddress == regisdterAdress){
                    registerAddress();
                }else{
                    const {maxDeposit} = await contract.methods.userInfo(regisdterAdress).call();
                    if(maxDeposit > 0){
                        registerAddress();
                    }else{
                        toast.error("Invalid referral");
                        toast.info("Click on referral and use default referral")
                    }            
                 }
              }
        } catch (error) {
            console.error("error while new register", error.message);
        }
    }


    const ReferralAddress = async () => {

        try {

            let URL = window.location.href;


            if (URL.includes("referrallink")) {
                // setcheckreffarl(true)
                let pathArray = URL.split('?');

                let UserID = pathArray[pathArray.length - 1]
                UserID = UserID.split('=')
                UserID = UserID[UserID.length - 1]
                // console.log("LAST", UserID);

                setRegisdterAdress(UserID)


            } else {

            }



        } catch (e) {
            console.log("Erroe Whille Referral Fuction Call", e);
        }
    }
    const getReferral = async () => {
        try {
            const contract = new web3Supply.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
            const address = await contract.methods.defaultRefer().call();
            setRegisdterAdress(address)
        } catch (error) {
            console.error("error while get Refferral", error.message);
        }
    }
    useEffect(() => {
        getReferral()
        // ReferralAddress()
    }, []);



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
                                        <Button onClick={() => props.onHide()} style={{ backgroundColor: "#ffbf00", border: "1px solid #ffbf00" }}><MdArrowBackIos ></MdArrowBackIos></Button> </div>
                                    <h4 className='ms-5 modal_h4'>Register</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className='body_m_bg'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <input type="text" placeholder='Enter Address' value={regisdterAdress} onChange={(e) => { setRegisdterAdress(e.target.value) }} className='input_modal' />
                                <Button className='mt-2 ' onClick={getReferral} style={{ backgroundColor: "#ffbf00", border: "1px solid #ffbf00" , color:"#000"}}><RiRefreshFill/></Button>
                                {/* <input type="text" placeholder='Enter amount in BSG' value={amount} onChange={(e) => { setAmount(e.target.value) }} className='input_modal mt-3' /> */}

                            </div>

                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer className='footer_m_bg'>
                    <Button className='s_d_Ws  w-100' onClick={() => { newRegister() }}>{loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Confirm Registration"}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Register
