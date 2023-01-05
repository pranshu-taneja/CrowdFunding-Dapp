import React, { useState } from 'react'
import axios from 'axios'
import './css/create.css'


function Create() {

  const [address, setaddress] = useState("");
  const [amount, setamount] = useState("");
  const [title, settitle] = useState("")
  const [URL, setURL] = useState("")

  const validate = () => {
    return address.length && amount.length && title.length && URL.length;
  };

  const SendingReal = async () => {
    const userObject = {
      acc: document.querySelector('.accN').value,
      protitle: document.querySelector('.protitle').value,
      expdate : document.querySelector('.expdate').value,
      amount : document.querySelector('.needamnt').value,
      projdesc : document.querySelector('.proj_des').value,
      imgLink : document.querySelector('.inputURL').value
    };

    axios
      .post("https://crowd-funding-dapp-virid.vercel.app/api/upload", userObject)
      .then((res) => {
        // console.log(res);
        alert("Project Created!")
      })
      .catch((error) => {
        console.log(error);
        alert("Some Error Occured!")
      });
  };

  return (
    <div>
      <div className="bar_create">
        <div className="create_bar">
          <div className="add_address">
            <label htmlFor="accN">Add Address </label>
            <input
              type="text"
              className="accN"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>

          <div className="amount">
            <label htmlFor="needamnt">Amount</label>
            <input
              type="number"
              className="needamnt"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
            />
          </div>
        </div>

        <div className="create_bar2">
          <div className="project_title">
            <label htmlFor="protitle">Project Title</label>
            <input
              type="text"
              maxLength={17}
              className="protitle"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <div className="expiry">
            <label htmlFor="expdate">Expiry Date</label>
            <input type="date" className="expdate"/>
          </div>
        </div>

        <div className="create_bar3">
          <div className="project_desc">
            <label htmlFor="proj_des">Description</label>
            <textarea maxLength={230} type="text" className="proj_des" />
          </div>
        </div>

        <div className="create_bar4">
          <div className="imageLink">
            <label htmlFor="inputURL">Image URL</label>
            <input
              type="text"
              className="inputURL"
              value={URL}
              onChange={(e) => setURL(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        disabled={!validate()}
        onClick={SendingReal}
        className="create_btn"
      >
        Create Project
      </button>
    </div>
  );
}

export default Create