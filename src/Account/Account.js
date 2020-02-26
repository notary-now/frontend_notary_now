import React, {useState, useEffect} from 'react';
import logo from '../Imgs/logo.svg'
import editImg from '../Imgs/edit.png'
import {getAccount, putAccount} from '../fetchCalls.js'


function Account() {
  let [account, setAccount] = useState({})
  let [edit, setEdit] = useState(false)
  let [editBio, setEditBio] = useState()
  let [editEmail, setEditEmail] = useState()
  let [editLocation, setEditLocation] = useState()
  let [editRadius, setEditRadius] = useState()
  let [editNotaryNumber, setEditNotaryNumber] = useState()
  let [editCommisson, setEditCommission] = useState()
  let [editExpiration, setEditExpiration] = useState()



  useEffect(() => {
    getAccount(setAccount)
    }
  ,[])

  return (

    <section className="account">
    {account.notary_values && <>
      <span className='notary-name'>{account.first_name} {account.last_name}</span>
      <span><img className="account-img" src={account.profile_photo} alt='notary'/><span className="verfied-text"><img className="verified" alt='verified' src={logo}/>VERIFIED</span></span>
      {edit ? <input type="textbox" className="bio" onChange={(event) => {setEditBio(event.target.value)}} placeholder={account.notary_values.bio}/> : <span className="bio">Bio: {account.notary_values.bio}</span>}
      {edit ? <input type="textbox" className="bio" onChange={(event) => {setEditNotaryNumber(event.target.value)}} placeholder={account.notary_values.state_notary_number}/> : <span className="bio">Notary Number: {account.notary_values.state_notary_number}</span>}
      {edit ? <input type="textbox" className="bio" onChange={(event) => {setEditEmail(event.target.value)}} placeholder={account.email}/> : <span className="bio">Email: {account.email}</span>}
      {edit ? <input type="textbox" className="bio" onChange={(event) => {setEditLocation(event.target.value)}} placeholder={account.zip_code}/> : <span className="bio">Location: {account.zip_code}</span>}
      {edit ? <input type="textbox" className="bio" onChange={(event) => {setEditRadius(event.target.value)}} placeholder={account.notary_values.radius}/> : <span className="bio">Radius: {account.notary_values.radius}</span>}
      {edit ? <><input type="textbox" className="bio" onChange={(event) => {setEditCommission(event.target.value)}} placeholder={account.notary_values.commission_date}/><input type="textbox" className="bio" onChange={(event) => {setEditExpiration(event.target.value)}} placeholder={account.notary_values.expiration_date}/></>: <span className="bio">Commission: {account.notary_values.commission_date}<br/>Expiration: {account.notary_values.expiration_date}</span>}
      <img onClick={() => {
        setEdit(true);
        setEditBio(account.notary_values.bio)
        setEditEmail(account.email)
        setEditNotaryNumber(account.notary_values.state_notary_number)
        setEditLocation(account.zip_code)
        setEditRadius(account.notary_values.radius)
        setEditCommission(account.notary_values.commission_date)
        setEditExpiration(account.notary_values.expiration_date)
      }} className="edit" src={editImg}/>
      {edit && <button className="chat-button" onClick={async () => {await putAccount({user_values:{id: 1,email: editEmail, zip_code: editLocation},notary_values: {bio: editBio, commission_date: editCommisson, expiration_date: editExpiration, state_notary_number: editNotaryNumber, radius: editRadius}}, setAccount); setEdit(false) }}>SUBMIT EDIT</button>}
      </>
    }
    </section>
  );
}

export default Account;
