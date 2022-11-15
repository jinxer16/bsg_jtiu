import React from 'react'
import MetaMask from "../Assets/MetaMask.webp"
import usdt from "../Assets/usdt.jpg"
import binance from "../Assets/binance.png"

function Project_images() {
  return (
    <div className='project_main py-5 bg'>
      <div className="container">
        <h2 className='text-white '>DFS smart contract powered by Polygon Chain use metamask wallet to resume it.</h2>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <img src={MetaMask} alt='metmast' className='img-fluid' />
          </div>
          <div className='col-md-4'>
            <img src={usdt} alt='metmast' className='img-fluid mt-5' width="100%" style={{ height: '17.5rem' }} />
          </div>
          <div className='col-md-4 mt-5'>
            <img src={binance} alt='metmast' className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project_images
