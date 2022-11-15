import React from 'react'
import "./Homef.css"
import hf from "../Assets/hf.png"
function Homef() {
  return (
    <div className='homef_main'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className='homef_h1'>
              DFS Decentralized<br></br> finance system is a future. <br /> <br /></h1>
            <p className='homef_p' style={{ textAlign: "justify " }}> The DFS is a future that cannot be let
              down, and it is the expectation of all
              our participants. We will all get rich benefits
              here. It is the most sincere and
              trustworthy. The mathematical model
              of this system and the precise
              simulation actuarial can run stably in
              the future, so take it seriously now and
              obtain stable and long-term benefits
              here. Our system is completely open,
              open, completely decentralized, and
              completely handed over to all  participants
              in the world.  participants are autonomous,
              and  participants are the system.</p>
          </div>
          <div className="col-lg-6">
            <div className='ani'>
              <img src={hf} className='home_f_img' alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homef
