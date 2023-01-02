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
    let amount = await document.getElementById("input_text").value;
    const options = {value: ethers.utils.parseEther(amount)}            //will be used as msg.value
    await Signer_trans.usage_send(id.acc, options);
    //------------------- sending ethers to some other account -------------------

  };  


  return (
    <div className='FundingProject'>
      {/* {console.log(id)} */}
      <p>Address: {id.acc}</p>
      <p>Title: {id.protitle}</p>
      <p>Amount: {id.amount}</p>
      <p>Description: {id.projdesc}</p>
      <p>Expiry: {id.expdate}</p>

      <div className="passAmount">
        <input id='input_text' type="text"/>
        <button type='submit' onClick={Fund}>Fund</button>
      </div>
      
    </div>
  )
}

export default Funding