import React, {useState, useEffect} from 'react';
import logo from '../Imgs/logo.svg'


function Find(props) {
  let [notaries, setNotaries] = useState({})

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
              <button onClick={()=> {props.showChat(true)}} className="chat-button">CHAT NOW!</button>
            </section>
          )
        })
          console.log(allNotaries);
          setNotaries(allNotaries)
      }
    )
    .catch(error => console.log('error', error));
    },[])

  return (
    <>
    {notaries.length && notaries}
    </>
  );
}

export default Find;
