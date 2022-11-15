import React, { useEffect, useState } from 'react'

import "./Stack_d.css"
import d from "../Assets/d.png"
import d1 from "../Assets/d1.png"
import d2 from "../Assets/d2.png"
import d3 from "../Assets/d3.png"
import Deposite_m from '../Deposite_m/Deposite_m'
import Button from 'react-bootstrap/Button';
import Withdraw_m from '../Withdraw_m/Withdraw_m'
import Split_m from '../Split_m/Split_m'
import Register from '../Register/Register'

function Stack_d() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    return (
        <div className='stack_d_main'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card stack_inner_card">
                            <div className="row">
                                <div className="col-lg-6 mt-3">
                                    <div className="card stack_sub_cards">
                                        <img src={d2} alt="" className='stack_d_img' />
                                        <Button className='start_btn s_d_W' onClick={() => setModalShow3(true)}>
                                            Register
                                        </Button>
                                        <Register
                                            show={modalShow3}
                                            onHide={() => setModalShow3(false)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <div className="card stack_sub_cards">
                                        <img src={d} alt="" className='stack_d_img' />
                                        <Button className='start_btn s_d_W' onClick={() => setModalShow(true)}>
                                            Deposit
                                        </Button>
                                        <Deposite_m
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-6 mt-3">
                                    <div className="card stack_sub_cards">
                                        <img src={d3} alt="" className='stack_d_img' />
                                        <Button className='start_btn s_d_W' onClick={() => setModalShow1(true)}>
                                            withdraw
                                        </Button>
                                        <Withdraw_m
                                            show={modalShow1}
                                            onHide={() => setModalShow1(false)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <div className="card stack_sub_cards">
                                        <img src={d1} alt="" className='stack_d_img' />
                                        <Button className='start_btn s_d_W' onClick={() => setModalShow2(true)}>
                                            Split Account
                                        </Button>
                                        <Split_m
                                            show={modalShow2}
                                            onHide={() => setModalShow2(false)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Stack_d
