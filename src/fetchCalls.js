import logo from './Imgs/logo.svg'
import React, {useState, useEffect} from 'react';

export const getAccount = (setAccount) => {
  fetch("https://backend-notary-now.herokuapp.com/api/v1/notaries/1")
  .then(response => response.json())
  .then(result => setAccount(result))
  .catch(error => console.log('error', error));
}

const postStatus = async (id, status) => {
  await fetch(`https://backend-notary-now.herokuapp.com/api/v1/notaries/1/appointments/${id}`,
  {method: 'PATCH',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "status": status
})
})
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
          <p>Status: {data.status}</p>
          <span>
            <button onClick={async () => {await postStatus(data.id,'COMPLETED'); await getAppointments(setSchedule)}}>COMPLETED</button>
            <button onClick={async () => {await postStatus(data.id,'CANCELLED'); await getAppointments(setSchedule)}}>CANCEL</button>
          </span>
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
        console.log(result);
        return (
          <section className="account">
            <span className='notary-name'>{account.first_name} {account.last_name}</span>
            <span><img className="account-img" src={account.profile_photo} alt='notary'/><span className="verfied-text"><img className="verified" alt='verified' src={logo}/>VERIFIED</span></span>
            <span className="bio">{account.notary_values.bio}</span>
            <span className="bio">Location: {account.zip_code} </span>
            <span className="bio">Radius: {account.notary_values.radius} </span>
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

export const putAccount = (body, setAccount) => {
  console.log(body);
  fetch('https://backend-notary-now.herokuapp.com/api/v1/notaries/1/',
  {method: 'PUT',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})
.then(response => response.json())
  .then(data => {setAccount(data)})
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
