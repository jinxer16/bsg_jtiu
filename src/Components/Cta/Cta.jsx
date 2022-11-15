import React from 'react'
import "./Cta.css"

function Cta() {
  return (
    <div className='cta_main_bg'>
        <div className="container " data-aos="fade-up" 
     data-aos-duration="1000">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card w-100 cta_card_bg">
                        <div className="card-body inner_body">
                            <p className='card_para ' >Have Any Project?</p>
                            <h2 className='cta_h2'>Apply For IDO/INO</h2>

                        <button className='cta_btn btn'>Apply to launch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Cta
