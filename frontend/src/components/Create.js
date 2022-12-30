import React from 'react'
import axios from 'axios'


function Create() {

  const SendingReal = async () => {
    const userObject = {
      acc: document.getElementById('accN').value,
    };

    axios
      .post("https://crowd-funding-dapp-virid.vercel.app/api/upload", userObject)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const DBdata = async () => {
  //   axios
  //     .get("http://localhost:5000/demo")
  //     .then((res) => {
  //       console.log(res); //use res.data for exact data btw
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
        <h1>This is the Create Page</h1>
        
          <div className="addAcc">
            <label htmlFor="accN">Account No : - </label>
            <input type="text" className='accN' id='accN'/>
          </div>

          <button type='Submit' onClick={SendingReal}>Create Project</button>

        {/* <button type='submit' onClick={DBdata}>Get Data from DB</button> */}
    </div>
  )
}

export default Create