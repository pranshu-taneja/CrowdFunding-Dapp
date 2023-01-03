import React from "react";
import { useState, useEffect } from "react";
import "./css/FlexProject.css";
import { ethers } from "ethers";
import { Link } from "react-router-dom";

function FlexProject(props) {
  // const Provider = props.Provider;
  const Contract = props.Contract;
  const Signer = props.Signer;
  const AccN = props.AccN;
  const DD = props.dd;

  const [data, setData] = useState({
    //for storing the data of flexproject
    accN: null,
  });

  useEffect(() => {
    //setting up all the values for flex project
    const setAcc = async () => {
      setData({ accN: AccN });
    };
    setAcc();
  }, [AccN]);

  const Fund = async () => {
    //Fund buttton functionality

    //------------------- sending ethers to some other account -------------------
    const Signer_trans = Contract.connect(Signer); //making the transaction through Signer
    let amount = await document.getElementById("input_text").value;
    const options = { value: ethers.utils.parseEther(amount) }; //will be used as msg.value
    await Signer_trans.usage_send(data.accN, options);
    //------------------- sending ethers to some other account -------------------
  };

  const rund = ()=>{
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(DD.expdate);
  const secondDate = new Date();

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    return (
      <span> <ins className="watchlogo">◷</ins> {diffDays} days left</span>
    )
  }

  return (
    <div>
      <div className="bg">
        <h1>crowd funding</h1>
      </div>

      <div className="box">
        <img className="fleximg" src="https://imageio.forbes.com/specials-images/imageserve/621e5699a4be707faf89aafa/0x0.jpg?format=jpg&width=1200" alt="" />
        <p className="flextitle">{DD.protitle}</p>     
        <p className="flexdesc">{DD.projdesc.slice(0,70)}...</p>
        <div className="FlexAmntExp">
          <span className="flexamount">{Number(DD.amount).toFixed(3)} ETH</span>
          <span className="flexexp">{rund()}</span>
        </div>

        <button className="FlexFund" type="button" >
          <Link className="LinkFund" to="/Funding" state={{ propid: DD }}>
            Fund Project
          </Link>
        </button>
      </div>
    </div>
  );
}

export default FlexProject;
