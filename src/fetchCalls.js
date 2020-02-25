import logo from './Imgs/logo.svg'
import React, {useState, useEffect} from 'react';

export const getAccount = (setAccount) => {
  fetch("https://backend-notary-now.herokuapp.com/api/v1/notaries/1")
  .then(response => response.json())
  .then(result => setAccount(result))
  .catch(error => console.log('error', error));
}

export const getAppointments = (setSchedule) => {
  fetch('https://backend-notary-now.herokuapp.com/api/v1/notaries/1/appointments')
  .then(result => result.json())
  .then(data => {
    let upcoming = data.map(data => {
      return (
        <div className="appointments">
          <h3>{data.appointee.name}</h3>
          <hr/>
          <p>Date: {data.date}</p>
          <p>Time: {data.time}</p>
          <p>Address: {data.location}</p>
          <p>Address: {data.status}</p>
        </div>
      )})
    setSchedule(upcoming)
  })
}

export const getNotaries = (setNotaries, setBooking, showChat) => {
  fetch("https://backend-notary-now.herokuapp.com/api/v1/notaries/")
  .then(response => response.json())
  .then(result => {
      let allNotaries = result.map(account => {
        return (
          <section className="account">
            <span className='notary-name'>{account.first_name} {account.last_name}</span>
            <span><img className="account-img" src={account.profile_photo} alt='notary'/><span className="verfied-text"><img className="verified" alt='verified' src={logo}/>VERIFIED</span></span>
            <span className="bio">{account.notary_values.bio}</span>
            <span className="bio">Location: {account.zip_code}</span>
            <span className="bio">Commission: {account.notary_values.commission_date}<br/>Expiration: {account.notary_values.expiration_date}</span>
            <span>
              <button onClick={()=> {showChat(true)}} className="chat-button">CHAT NOW</button>
              <button onClick={()=> {setBooking({show:true, name: `${account.first_name} ${account.last_name}`})}} className="chat-button">BOOKING</button>
            </span>


          </section>
        )
      })
        setNotaries(allNotaries)
    }
  )
  .catch(error => console.log('error', error));
}


export const postBooking = (body, setBooking) => {
  fetch('https://backend-notary-now.herokuapp.com/api/v1/notaries/1/appointments/',
  {method: 'POST',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})
  .then(data => setBooking({show:false}))

}
