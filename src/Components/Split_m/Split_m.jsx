import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdArrowBackIos } from 'react-icons/md'
import "./Split_m.css"
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import { financeAppContractAddress, financeAppContract_Abi, financeAppTokenAbi, financeAppTokenAddress } from '../../utilies/Contract';
import {getRemaintime} from '../../Redux/remaintime/action';
import {withdrawInfo} from "../../Redux/withdrawDetail/action"
import {useSelector, useDispatch}  from "react-redux"
function Split_m(props) {
  let acc = useSelector((state) => state.connect?.connection);
  let {split} = useSelector((state)=>state.withDrawInfo);
  let [amount, setAmount] = useState('')
  let [stdAmount, setsdtAmount] = useState('')
  let [recieverAdress, setRecieverAdress] = useState('')
  const [getsplit_Value, setgetsplit_Value] = useState("")
  const [depositcheck, setdepositcheck] = useState(1);
  const [loader, setloader] = useState(false)
  // const [transfor, settransfor] = useState(false)
  const dispatch = useDispatch()
  const splitbydeposit = async () => {
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
            if (parseFloat(amount) >= 50 && parseFloat(amount) <= 5000) {
                const {totalDeposit, referrer} = await contract.methods.userInfo(acc).call();
                const {split} = await contract.methods.rewardInfo(acc).call();
                if(parseFloat(split) >= parseInt(amount)){
                  if(parseFloat(totalDeposit) ==0){
                  if (parseInt(amount) % 50 === 0) {
                      if (referrer == '0x0000000000000000000000000000000000000000') {
                          toast.error('please Register Account 1st ')
                      }else {
                          setloader(true)
                          let value = web3.utils.toWei(amount);
                          await contract.methods.depositBySplit(value).send({
                              from:acc
                       })
                       dispatch(getRemaintime());
                       setdepositcheck(1);
                       toast.success("Amount Deposited successfully")
                       setloader(false)
                      }
                  }
                  else {
                      toast.error('please enter value in ratio 50 ')
                  }
            }else{
              setdepositcheck(1);
              toast.info("you have already deposited")
            }
                }else{
                  toast.info("You don't have any split amount")
                }
            }else{
                toast.info('value must be greater then 50 and less then 5000 ')
            }
          }
    } catch (error) {
        setloader(false)
        setdepositcheck(1)
        console.error("error while deposit amount", error.message);
    }
}

const splitbytransfer = async () => {
  try {
      if (acc == "No Wallet") {
          toast.info("No Wallet");
        } else if (acc == "Wrong Network") {
          toast.info("Wrong Wallet");
        } else if (acc == "Connect Wallet") {
          toast.info("Connect Wallet");
        }else{
          
          const web3 = window.web3;
          console.log("recieverAdress",recieverAdress,"amount",amount)
          const contract = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
          if (parseFloat(amount) >= 50 && parseFloat(amount) <= 50000) {
              const {totalDeposit, referrer} = await contract.methods.userInfo(recieverAdress).call();
            const {split} = await contract.methods.rewardInfo(acc).call();
                if(parseFloat(split) >= parseInt(amount)){
              if(parseFloat(totalDeposit) ==0){

              if (parseInt(amount) % 50 === 0) {
                 
                      setloader(true)
                      let value = web3.utils.toWei(amount);
                      console.log("value",value)
                      await contract.methods.transferBySplit(recieverAdress,value).send({
                          from:acc
                   })
                   setdepositcheck(1);
                   toast.success("Amount Deposited successfully")
                   setloader(false)
            
              }
              else {
                  toast.error('please enter value in ratio 50 ')
              }
        }else{
          setdepositcheck(1);
          toast.info("Receiver has already deposited")
        }
      }else{
        toast.info("You don't have any split amount")
      }
          }else{
              toast.info('value must be greater then 50 and less then 50000 ')
          }
        }
  } catch (error) {
      setloader(false)
      setdepositcheck(1)
      console.error("error while deposit amount", error.message);
  }
}
  const changeValue = async (e) => {
    setsdtAmount(e.target.value);
  }
  const changeValueAmount = async (e) => {
    setAmount(e.target.value)
  }
  const changeRecieverAdress = async (e) => {
    setRecieverAdress(e.target.value)
  }
  const getsplit = async () => {
      try {
        if (acc == "No Wallet") {
          console.log("No Wallet");
        } else if (acc == "Wrong Network") {
          console.log("Wrong Wallet");
        } else if (acc == "Connect Wallet") {
          console.log("Connect Wallet");
        }else{
        const web3 = window.web3;
        dispatch(withdrawInfo(acc))
        let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
        let getCurSplit = await financeAppcontractOf.methods.getCurSplit(acc).call();
        getCurSplit = web3.utils.fromWei(getCurSplit)
        getCurSplit = parseFloat(getCurSplit).toFixed(2)
        setgetsplit_Value(getCurSplit)
      }
      }
      catch (e) {
        toast.error(e.message);
      }
  }

  useEffect(() => {
    getsplit()
  }, [])

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='modal_bg' >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 p-o">
                <div className="d-flex">
                  <div className="icons_m">
                    <Button onClick={() => (props.onHide(),setdepositcheck(1))} style={{ backgroundColor: "#ffbf00", border: "1px solid #ffbf00" }}><MdArrowBackIos></MdArrowBackIos></Button>
                  </div>
                  <h4 className='ms-5 modal_h4'>Split Account</h4>
                </div>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className='body_m_bg'>
          
          
          {
            depositcheck ==2 ?

              <>
                <div className="container mt-3">
                  <div className="row">
                    <div className="col-lg-8">
                      <p className='text-white p-0 m-0 pb-1'>Amount</p>
                      <input type="text"
                        disabled={stdAmount.toString().length > 0}
                        value={amount}
                        onChange={changeValueAmount} className='input_modal' placeholder='50' />
                      <p className='modal_pa'>The ratio of 50</p>
                    </div>
                    <div className="col-lg-4">
                      <div className="d-flex gsaa">
                        <div>
                          <p className='input_sub_p asasaa ' >{split} Amount</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className='s_d_Ws  w-100'  onClick={() => { splitbydeposit() }}> {loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Deposit"}</Button>

              </>
              :  depositcheck ==3 ?
              <>
                <div className="container mt-3">
                  <div className="row">
                    <div className="col-lg-8">
                      <p className='text-white p-0 m-0 pb-1'>Amount</p>
                      <input type="text"
                        disabled={stdAmount.toString().length > 0}
                        value={amount}
                        onChange={changeValueAmount} className='input_modal' placeholder='50' />
                      <p className='modal_pa'>The ratio of 50</p>
                    </div>
                    <div className="col-lg-4">
                      <div className="d-flex gsaa">
                        <div>
                          <p className='input_sub_p asasaa ' >{split} Amount </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className='mb-0 text-white pb-2'>Receiver address</p>
                      <input type="text" value={recieverAdress} onChange={changeRecieverAdress} className='w-100 input_modal' placeholder='0x0000000000000000000000000000000000000000' />
                    </div>
                  </div>
                </div>
                <Button className='s_d_Ws  w-100'  onClick={splitbytransfer}>{loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Transfer"}</Button>


              </>
              :
              <>
               <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <Button className='s_d_Ws  w-100' onClick={() => { setdepositcheck(2) }}> {props.loader ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Deposit"}</Button>
                    </div>
                    <div className="col-lg-6">
                      <Button className='s_d_Ws  w-100'  onClick={() => setdepositcheck(3) }>{props.loaderr ? <ReactLoading type="spin" color="#ffffff" className='mb-2 mx-auto' height={30} width={30} /> : "Transfer"}</Button>
                    </div>
                  </div>
                </div>
              </>
          }

          


        </Modal.Body>
        <Modal.Footer className='footer_m_bg'>

        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Split_m
