import React from 'react'
import axios from 'axios'
import './css/create.css'


function Create() {

  const SendingReal = async () => {
    const userObject = {
      acc: document.querySelector('.accN').value,
      protitle: document.querySelector('.protitle').value,
      expdate : document.querySelector('.expdate').value,
      amount : document.querySelector('.needamnt').value,
      projdesc : document.querySelector('.proj_des').value
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
          <div className="bar_create">
            <div className='create_bar'>
              <div className="add_address">
                <label htmlFor="accN">Add Address </label>
                <input type="text" className='accN' />
              </div>
            
              <div className="amount">
                <label htmlFor="needamnt">Amount</label>
                <input type="number" className='needamnt'/>
              </div>
            </div>

            <div className="create_bar2">
              <div className="project_title">
                  <label htmlFor="protitle">Project Title</label>
                  <input type="text" className='protitle'/>
                </div>
                <div className="expiry">
                  <label htmlFor="expdate">Expiry Date</label>
                  <input type="date" className='expdate'/>
                </div>
            </div>

            <div className='create_bar3'>
                <div className="project_desc">
                  <label htmlFor="proj_des">Description</label>
                  <textarea type="text" className='proj_des'/>
                </div>
            </div>
          </div>

        <button type='Submit' onClick={SendingReal} className="create_btn">Create Project</button>
    </div>
  )
}

export default Create