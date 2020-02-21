import React, {useState, useEffect} from 'react';
import logo from '../Imgs/logo.svg'


function Find(props) {
  let [notaries, setNotaries] = useState({})
  let [booking, setBooking] = useState({show: false})

  useEffect(() => {

  let awaitNotaries = fetch("https://backend-notary-now.herokuapp.com/api/v1/notaries/")
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
                <button onClick={()=> {props.showChat(true)}} className="chat-button">CHAT NOW</button>
                <button onClick={()=> {setBooking({show:true, name: `${account.first_name} ${account.last_name}`})}} className="chat-button">BOOKING</button>
              </span>


            </section>
          )
        })
          setNotaries(allNotaries)
      }
    )
    .catch(error => console.log('error', error));
    },[])

  return (
    <div className={booking ? "find dark" : "find"}>
    {booking.show &&
      <article className="date-picker">
        Book with: {booking.name}
        <input type="date"/><button onClick={() => setBooking({show:false})}>X</button>
        <button>Submit</button>
      </article>
              }
    {notaries.length && notaries}
    </div>
  );
}

export default Find;
