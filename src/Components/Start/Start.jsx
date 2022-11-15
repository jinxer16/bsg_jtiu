import React from 'react'
import "./Start.css"
import s from "../Assets/s.png"
import s1 from "../Assets/s1.png"
import s2 from "../Assets/s2.png"
import s4 from "../Assets/s4 .jpeg"
import s5 from "../Assets/s5.jpeg"

function Start() {
  return (
    <div className='start_main_bg'>
      <div className="container">
        <div className='section-header--middle'>
          <div className="header--middle__content">
            <div className="title_bar">
              <h2 className='team_h2 text-white'> Decentralized Finance System rules</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-lg-4  start">
            <div>
              <img src={s} alt="" className='sh_img' />
            </div>
            <h4 className='beni_h4 sh'>1.Deposit
            </h4>
            <p className='text-white'>Minimum 50 DAI,
              maximum 10,000 DAI,
              in multiples of 50, the
              amount of each
              deposit must be
              greater than or equal
              to the previous
              deposit amount.</p>
          </div>
          <div className="col-lg-4 start">
            <div>
              <img src={s1} alt="" className='sh_img' />
            </div>
            <h4 className='beni_h4 sh'>2. Bonus</h4>
            <p className='text-white'>Bonus is calculated based
              on the small amount of the
              deposit.
            </p>

          </div>
          <div className="col-lg-4 start">
            <div>
              <img src={s2} alt="" className='sh_img' />
            </div>
            <h4 className='beni_h4 sh'>3. deposit
              logic
            </h4>

            <p className='text-white'>After the deposit of the previous
              cycle expires, the deposit must be
              continued for the next cycle, and
              the amount of the deposit is
              greater than or equal to the deposit
              amount of the previous cycle, and
              then the unfrozen deposit can be
              withdrawn.
            </p>

          </div>
          <div className="col-lg-4 start">
            <div>
              <img src={s4} alt="" className='sh_img' />
            </div>
            <h4 className='beni_h4 sh'>2+1 mode
            </h4>
            <p className='text-white'>
              add 1 day of freezing
              period for every 2
              deposits, no increase
              in income, maximum
              increase of 45 days,
              no more increase.
            </p>
          </div>
          <div className="col-lg-4 start">
            <div>
              <img src={s5} alt="" className='sh_img' />
            </div>
            <h4 className='beni_h4 sh'>5. Splitting
              mechanism
            </h4>
            <p className='text-white'>
              25% of all income goes into split
              account (this amount is only
              used as a new account deposit),
              this account is set up with
              transfer and deposit functions,
              the transfer amount must be a
              multiple of 10, and there are no
              other restrictions; the deposit
              function is only The newly
              registered account can only be
              activated once, and this function
              cannot be used for the activated
              account. 75% of all earnings are
              used for withdrawals, no
              additional withdrawal fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start
