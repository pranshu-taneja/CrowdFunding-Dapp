import React from 'react'

function Create() {

  const SendCreate = ()=>{

  }

  return (
    <div>
        <h1>This is the Create Page</h1>
        <form action="" className='createProject'>
          <div className="addAcc">
            <label htmlFor="accN">Account No : - </label>
            <input type="text" className='accN' />
          </div>

          <button type='Submit' onClick={SendCreate}>Create Project</button>
        </form>
    </div>
  )
}

export default Create