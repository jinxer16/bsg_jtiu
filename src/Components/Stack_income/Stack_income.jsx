import React, { useEffect, useState } from 'react'
import "./Stack_income.css"
import { financeAppContractAddress, financeAppContract_Abi } from '../../utilies/Contract';
import { loadWeb3 } from '../../apis/api';
import { toast } from 'react-toastify';
import Moment from 'react-moment';
import { BsFillStopwatchFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { GiCycle } from 'react-icons/gi'

function Stack_income() {
  const [income, setIncome] = useState('7 Days Per Cycle,Monthly 16%')
  const [depositTime, setdepositTime] = useState('')
  const [unixTime, setUnixTime] = useState(0)
  const [days, setDays_here] = useState(0)

  const [hours, setHours_here] = useState(0)

  const [minutes, setMunits_here] = useState(0)

  const [seconds, setSeconds] = useState(0)



  const getDetail = async () => {
    // let acc = await loadWeb3();

    try {
      const web3 = window.web3;
      let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
      let depostTime = await financeAppcontractOf.methods.getCurDay().call();
      setdepositTime(depostTime)
      let startTime = await financeAppcontractOf.methods.startTime().call();
      setUnixTime(startTime)
    } catch (e) {
      // toast.error(e.message);
      console.log("Error While Get ",e.message);
    }

  }

  const getDeposit_time = async () => {
    let acc = await loadWeb3();

    try {

      const web3 = window.web3;
      let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);



      let getOrderLength = await financeAppcontractOf.methods.getOrderLength(acc).call();
      if (getOrderLength > 0) {
        getOrderLength = getOrderLength - 1

        let orderInfos = await financeAppcontractOf.methods.orderInfos(acc, getOrderLength).call();

        // let FinalTime= Number(orderInfos.unfreeze) - Number(orderInfos.start) 
        let FinalTime = Number(orderInfos.unfreeze)


        var currentDateTime = new Date();
        let resultInSeconds = currentDateTime.getTime() / 1000;

        // console.log("Time_here",parseInt(FinalTime) );
        let Time_here = (FinalTime) - parseInt(resultInSeconds)
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

          // user = 'yes'


        }
        else {
          setDays_here(0)
          setHours_here(0)
          setMunits_here(0)
          setSeconds(0)
          // setIsDisable(false)

        }



      }
      else {
        // toast.error('please deposit 1st')

      }

    } catch (e) {
      console.log("Error While Get Time", e);
    }
  }

  // useEffect(() => {
  //   getDetail()
  //   let id=setInterval(() => {
  //     getDeposit_time()
  //   }, 1000);
  //   return () => {
  //     clearInterval(id)
  // }
  // }, []);

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
                  <p className='stack_p width_adjust'>Contract address: <a href={`https://polygonscan.com/address/${financeAppContractAddress}`} className="stack_p" target="_blank">{financeAppContractAddress} </a></p>
                  <p className='stack_p width_adjust2'>Contract address: <a href={`https://polygonscan.com/address/${financeAppContractAddress}`} className="stack_p" target="_blank" >{(financeAppContractAddress?.substring(0, 4) + "..." + financeAppContractAddress?.substring(financeAppContractAddress?.length - 4))}</a></p>
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
                <div><p className='stack_p'>Income: {income}
                </p></div>
              </div>
              <div className="d-flex stact_inner">
                <div className="div">
                  <BsFillStopwatchFill className='icon_color fs-3'></BsFillStopwatchFill>
                </div>
                <div>
                  <p className='stack_p'>Deposit Time: {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Stack_income
