import React from "react";
import "./css/FlexProject.css";
import { Link } from "react-router-dom";

function FlexProject(props) {
  const DD = props.dd;


  const time = ()=>{
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
        <img className="fleximg" src={DD.imgLink} alt="" />
        <p className="flextitle">{DD.protitle}</p>     
        <p className="flexdesc">{DD.projdesc.slice(0,70)}...</p>
        <div className="FlexAmntExp">
          <span className="flexamount">{Number(DD.amount).toFixed(3)} ETH</span>
          <span className="flexexp">{time()}</span>
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
