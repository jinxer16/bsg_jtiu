import React from "react";
import "./Tier.css";
import t from "../Assets/t.png";
function Tier() {
  const myarr = [6, 1, 2, 3, 2, 1, 2, 0.5, 0.2]
  return (
    <div className="tier_main_bg">
      <div className="container">
        <div className="section-header--middle">
          <div className="header--middle__content">
            <div className="title_bar">
              <p className="team_para text-white">Choose</p>
              <h2 className="team_h2 text-white">Tier System</h2>
              <p className="text-white">Income per cycle: the initial 7-day cycle, the fixed income per
                cycle is 4%, and then a 1-day freeze period is added for every 2
                deposits after that, and the income will not increase until it
                increases to 45 day's and no longer increases .</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">{
          myarr.map((value, index, array) => (
            <div className="col-lg-3 mt-3">
              <div className="card tier_card">
                <div className="card-body p-0">
                  <div className="tier_head py-3">
                    {index == 7 ? <h4>TIER 8 to Tier 15</h4> : index == 8 ? <h4>TIER 16 to Tier 25</h4> : <h4>TIER {index + 1}</h4>}
                    <div>
                      <img src={t} alt="" />
                    </div>
                    <div className="tier_body">
                      <div className="sasa p-3">
                        <h5>{value}%</h5>
                      </div>
                      <div className="ssa p-3">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Tier;
