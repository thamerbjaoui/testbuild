import React, { useState } from 'react';

import './popup.scss'
//import { color } from '@mui/system';

const Popupmodifie = ({ row, isOpen }) => {

  const rolee = [{ role: 'ing', rate: 80 }, { role: 'tec', rate: 30 }, { role: "ing proc", rate: 100 }, { role: 'des', rate: 40 }]

  const [name, setName] = useState(row.name);
  const [nikName, setNikname] = useState(row.nikname);
  const [phone, setPhone] = useState(row.phone);
  const [email, setEmail] = useState(row.email);
  const [access, setAccess] = useState(row.access);
  const [role, setRole] = useState(row.role)
  const [rate, setRate] = useState(row.rate)

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
    ;
  const handelNiknamchange = (event) => {
    setNikname(event.target.value)
  }
  const handelphonechange = (event) => {
    setPhone(event.target.value)
  }
  const handelEmailchange = (event) => {
    setEmail(event.target.value)
  }
  const handelAccesschange = (event) => {
    setAccess(event.target.value)
  }
  const handelRolechange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);


    const selectedRoleObj = rolee.find((r) => r.role === selectedRole);
    if (selectedRoleObj) {
      setRate(selectedRoleObj.rate);
    }
  };


  console.log(access);

  return (

    <div className="add" >
      <div className="modal">
        <button className="close"style={{backgroundColor:'red'}} onClick={() => { isOpen(false) }}>
          X
        </button>
        <h1>Modify</h1>
        <form >
          <div className="item">
            <label htmlFor="name">Name</label>
            <input id="name" value={name} onChange={handleNameChange} />
          </div>
          <div className="item">
            <label htmlFor="Nikname">Nikname</label>
            <input id="Nikname" value={nikName} onChange={handelNiknamchange} />
          </div>
          <div className="item">
            <label htmlFor="Role">Role</label>
            <select onChange={handelRolechange} value={role}>
              {rolee.map((rol, i) => {
                return (
                  <>
                    <option key={i} value={rol.role}>{rol.role}</option>
                  </>
                )
              })}
            </select>
          </div>
          <div className="item">
            <label htmlFor="rate">Rate</label>
            <input id="name" value={rate} readOnly />
          </div>
          <div className="item">
            <label htmlFor="Phone number">Phone Number</label>
            <input id="Phone number" value={phone} onChange={handelphonechange} />
          </div>
          <div className="item">
            <label htmlFor="Email">Email</label>
            <input id="Email" value={email} onChange={handelEmailchange} />
          </div>
          <div className="item">
            <label htmlFor="Access">Access</label>
            <select onChange={handelAccesschange} value={access}>
              <option value="admin">Admin</option>
              <option value="superuser">Super User</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor='PassWord' > PassWord</label>
            <input />
          </div>
          <button onClick={() => { isOpen(false) }}>Modify</button>
        </form>
      </div>
    </div>
  )
}
export default Popupmodifie


