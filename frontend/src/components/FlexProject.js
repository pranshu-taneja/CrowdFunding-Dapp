import React from 'react'
import { useState,useEffect } from 'react'
import './ProjectStyle.css';
import { ethers } from 'ethers';

function FlexProject(props) {
  
  // const Provider = props.Provider;
  const Contract = props.Contract;
  const Signer = props.Signer;
  const AccN = props.AccN

  const [data, setData] = useState({        //for storing the data of flexproject
    accN : null,
  })  

  useEffect(() => {                     //setting up all the values for flex project
    const setAcc = async()=>{
      setData({accN:AccN})
    }
    setAcc();
  }, [AccN])
  

  const Fund = async () => {            //Fund buttton functionality        

    //------------------- sending ethers to some other account -------------------
    const Signer_trans = Contract.connect(Signer);        //making the transaction through Signer 
    let amount = await document.getElementById("input_text").value;
    const options = {value: ethers.utils.parseEther(amount)}            //will be used as msg.value
    await Signer_trans.usage_send(data.accN, options);
    //------------------- sending ethers to some other account -------------------

  };  

  return (
    <div className='box'>
      <p className='address'>Account No:- {data.accN}</p>
      <input id='input_text' type="text"/>
      <button type='submit' onClick={Fund}>Fund</button>
    </div>
  )
}

export default FlexProject