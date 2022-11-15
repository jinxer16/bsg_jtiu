import React, { useEffect, useState } from "react";
import { loadWeb3 } from "../../apis/api";
import {
  financeAppContractAddress,
  financeAppContract_Abi,
} from "../../utilies/Contract";
import "./My_team.css";
import Moment from "react-moment";
import moment from "moment";
import { MdLocationOn } from "react-icons/md";
import { BsFillStopwatchFill } from "react-icons/bs";
import { GiCycle } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import {getRemaintime} from '../../Redux/remaintime/action'
import Countdown from 'react-countdown';
import Web3 from "web3";
const web3Supply = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/")
const RepetationComponent = () => {
  let acc = useSelector((state) => state.connect?.connection);
  let {remaintime} = useSelector((state)=>state.remaintime);
   const [depositTime, setdepositTime] = useState("");
  const [day, setDays] = useState("");
  const Completionist = () => <div className="d-flex stact_inner">
  <div className="div">
    <BsFillStopwatchFill className='icon_color fs-3'></BsFillStopwatchFill>
  </div>
  <div>
    <p className='stack_p'>Deposit Time: 0 Days 0 Hours 0 Minutes 0 Seconds</p>
  </div>
</div>;
  const renderer = ({ days,hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <div className="d-flex stact_inner">
      <div className="div">
        <BsFillStopwatchFill className='icon_color fs-3'></BsFillStopwatchFill>
      </div>
      <div>
        <p className='stack_p'>Deposit Time: {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</p>
      </div>
    </div>;
    }
  };
  const getDetail = async () => {
    try {
      let financeAppcontractOf = new web3Supply.eth.Contract(
        financeAppContract_Abi,
        financeAppContractAddress
      );
      let depostTime = await financeAppcontractOf.methods.getCurDay().call();
      setdepositTime(depostTime)
      let day = await financeAppcontractOf.methods.dayPerCycle().call();
      setDays(day);
    } catch (e) {
      console.log(e.message);
    }
  };
 
 
const dispatch = useDispatch()
  const getDeposit_time = async () => {
    try {
        if (acc == "No Wallet") {
            console.log(acc);
            dispatch(getRemaintime(acc))
          } else if (acc == "Wrong Network") {
            console.log(acc);
            dispatch(getRemaintime(acc))
          } else if (acc == "Connect Wallet") {
            console.log(acc);
            dispatch(getRemaintime(acc))
          }else{
            dispatch(getRemaintime(acc))
       }
    } catch (e) {
      
      console.log("Error While Get Time", e.message);
    }
  };

 
  useEffect(() => {
    getDetail();
    getDeposit_time();
    
  }, [acc]);


  return (
    <div className='Stack_income_bg'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card stacking_card">
            <div className="d-flex stact_inner">
              <div className="div">
                <MdLocationOn className='icon_color fs-3'></MdLocationOn>
              </div>
              <div>
                <p className='stack_p width_adjust'>Contract address: <a href={`https://testnet.bscscan.com/address/${financeAppContractAddress}`} className="stack_p" target="_blank">{financeAppContractAddress} </a></p>
                <p className='stack_p width_adjust2'>Contract address: <a href={`https://testnet.bscscan.com/address/${financeAppContractAddress}`} className="stack_p" target="_blank" >{(financeAppContractAddress?.substring(0, 4) + "..." + financeAppContractAddress?.substring(financeAppContractAddress?.length - 4))}</a></p>
                {/* <p className=' aliment width_adjust2'>{refrealAdress?.substring(0,8) + "..." + refrealAdress?.substring(refrealAdress?.length -8)}</p> */}
              </div>
            </div>
            <div className="d-flex stact_inner">
              <div className="div">
                <BsFillStopwatchFill className='icon_color fs-3'></BsFillStopwatchFill>
              </div>
              <div><p className='stack_p'>Platform Running Time:  {depositTime} days
              </p>
              </div>
            </div>
            <div className="d-flex stact_inner">
              <div className="div">
                <GiCycle className='icon_color fs-3'></GiCycle>
              </div>
              <div><p className='stack_p'>Income: {day} days per cycle.
              </p></div>
            </div>
              <Countdown date={Date.now() + (((parseInt(remaintime)  * 1000))-Date.now()) } renderer={renderer} />
          </div>
        </div>
      </div>
    </div>
  </div >
    // <div>
    //   <div className="main_first">
    //     <div className="main_scnd">
    //       <div className="main_third">
    //         <MdLocationOn className="icon_color fs-3"></MdLocationOn>
    //         <p className="contract1">
    //           Contract Address:{" "}
    //           <a
    //             href={`https://polygonscan.com/address/${financeAppContractAddress}`}
    //             className="stack_p2"
    //             target="_blank"
    //           >
    //             {financeAppContractAddress}{" "}
    //           </a>
    //         </p>
    //         <p className="contract2">
    //           Contract Address:{" "}
    //           <a
    //             href={`https://polygonscan.com/address/${financeAppContractAddress}`}
    //             className="stack_p2"
    //             target="_blank"
    //           >
    //             {financeAppContractAddress?.substring(0, 4) +
    //               "..." +
    //               financeAppContractAddress?.substring(
    //                 financeAppContractAddress?.length - 4
    //               )}
    //           </a>
    //         </p>
    //       </div>
    //       <div className="main_third">
    //         <BsFillStopwatchFill className="icon_color fs-3"></BsFillStopwatchFill>
    //         {/* <p>Platform Running time: <Moment format="D MMM YYYY HH:MM:SS" unix >{unixTime}</Moment></p> */}
    //         <p>Platform Running Time: {depositTime} days</p>
    //       </div>
    //       <div className="main_third">
    //         <GiCycle className="icon_color fs-3"></GiCycle>
    //         <p>Income: 15 days per cycle. Monthly 16%</p>
    //       </div>
    //       <Countdown date={Date.now() + (((parseInt(depositStartTime)  * 1000))-Date.now()) } renderer={renderer} />
    //       {/* <div className="main_third">
    //         <BsFillStopwatchFill className="icon_color fs-3"></BsFillStopwatchFill>
    //         <p>
    //           Deposit Time: {days} Days {hours} Hours {minutes} Minutes{" "}
    //           {seconds} Seconds
    //         </p>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default RepetationComponent;
