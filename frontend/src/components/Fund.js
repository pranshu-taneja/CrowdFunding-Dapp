import FlexProject from "./FlexProject";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import React from "react";
import './css/fund.css'
import { useState, useEffect } from "react";

function Fund(props) {
  const Provider = props.Provider;
  const Contract = props.Contract;
  const Signer = props.Signer;
  const [fetchdata, setFetchdata] = useState([]);
  const [loading, setLoading] = useState(true);         //will tell if data is loaded or not


  useEffect(() => {
    axios
      .get("https://crowd-funding-dapp-virid.vercel.app/api/demo")
      .then((res) => {
        setFetchdata(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return loading?
  (
      <div className="loading_fund">
        <img className="loadingimg" src="https://www.tsunami.gov/images/loader.gif" alt="loading" />
        <p className="loadingtxt">Loading...</p>
      </div>
  ):
  (
    <div className="App">

      <div className="Projects" id="pro">           {/*//rendering flex projects from db data fetched came through*/}
        {fetchdata.map((data) => (
            <FlexProject
              key={uuidv4()}
              Provider={Provider}
              Signer={Signer}
              Contract={Contract}
              dd = {data}
            ></FlexProject>
        ))}
      </div>

    </div>
  );
}

export default Fund;
