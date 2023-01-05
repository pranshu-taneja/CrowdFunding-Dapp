import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './css/funding.css'
import { ethers } from 'ethers';



function Funding(props) {
  const location = useLocation();
  const DD = location.state.propid
  const Contract = props.Contract;
  const Signer = props.Signer;
  const Provider = props.Provider;


  const [balance, setbalance] = useState(0)

  useEffect(() => {
    async function fetch_data(){
      let temp = await Provider.getBalance(DD.acc)
      temp = Number(ethers.utils.formatEther( temp )).toFixed(2);
      setbalance(temp);
    }
    fetch_data();
  }, [Provider,DD.acc])
  
  

  const Fund = async () => {            //Fund buttton functionality        

    //------------------- sending ethers to some other account -------------------
    const Signer_trans = Contract.connect(Signer);        //making the transaction through Signer 
    let amount = await document.querySelector(".fundingInput").value;
    const options = {value: ethers.utils.parseEther(amount)}            //will be used as msg.value
    await Signer_trans.usage_send(DD.acc, options);
    //------------------- sending ethers to some other account -------------------

  };  
  
  return (
    <div className='FundingProject'>
      <div>
        <img className='fundingimg' src={DD.imgLink} alt="" />
        <p className='fundingAdd'>Address: {DD.acc}</p>
        <p className='fundingTitle'>Title: {DD.protitle}</p>
        <p className='fundingAmount'>Amount Needed: {DD.amount} ETH</p>
        <p className='RaisedAmount'>Amount Raised: {balance} ETH</p>
        <p className='fundingDesc'>Description: {DD.projdesc}</p>
        <p className='fundingExp'>Expiry: {DD.expdate}</p>
        <input className='fundingInput' placeholder='Enter Amount Here' type="text"/>
      </div>

      <div className="fundingAmount">
        <button className='fundingButton' type='submit' onClick={Fund}>Fund</button>
      </div>

    </div>
  )
}

export default Funding