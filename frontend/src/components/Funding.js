import React from 'react'
import { useLocation } from 'react-router-dom';
import './css/funding.css'
import { ethers } from 'ethers';



function Funding(props) {
  const location = useLocation();
  const id = location.state.propid
  const Contract = props.Contract;
  const Signer = props.Signer;


  const Fund = async () => {            //Fund buttton functionality        

    //------------------- sending ethers to some other account -------------------
    const Signer_trans = Contract.connect(Signer);        //making the transaction through Signer 
    let amount = await document.querySelector(".fundingInput").value;
    const options = {value: ethers.utils.parseEther(amount)}            //will be used as msg.value
    await Signer_trans.usage_send(id.acc, options);
    //------------------- sending ethers to some other account -------------------

  };  


  return (
    <div className='FundingProject'>
      <div>
        <img className='fundingimg' src="https://imageio.forbes.com/specials-images/imageserve/621e5699a4be707faf89aafa/0x0.jpg?format=jpg&width=1200" alt="" />
        <p className='fundingAdd'>Address: {id.acc}</p>
        <p className='fundingTitle'>Title: {id.protitle}</p>
        <p className='fundingAmount'>Amount Needed: {id.amount}</p>
        <p className='fundingDesc'>Description: {id.projdesc}</p>
        <p className='fundingExp'>Expiry: {id.expdate}</p>
        <input className='fundingInput' type="text"/>
      </div>

      <div className="fundingAmount">
        <button className='fundingButton' type='submit' onClick={Fund}>Fund</button>
      </div>
      
    </div>
  )
}

export default Funding