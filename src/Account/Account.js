import React, {useState, useEffect} from 'react';
import logo from '../Imgs/logo.svg'


function Account() {
  let [account, setAccount] = useState({})

  useEffect(() => {

  fetch("https://backend-notary-now.herokuapp.com/api/v1/notaries/1")
    .then(response => response.json())
    .then(result => setAccount(result))
    .catch(error => console.log('error', error));
    }
  ,[])

  return (
    <section className="account">
      <span className='notary-name'>{account.first_name} {account.last_name}</span>
      <span><img className="account-img" src={account.profile_photo} alt='notary'/><img className="verified" alt='verified' src={logo}/></span>
      <span className="bio">Bio: I have been notarizing since a young age, I am currently based in Highlands Ranch. I am willing to travel as far as the DTC to meet to notarize. I prefer to work from 5:30-7:30 M - F.</span>
      <span className="bio">Location: 80224</span>
      <span className="bio">Commission Dates: 1/2/2020 - 1/2/2222</span>
      <button className="chat-button">CHAT NOW!</button>
    </section>
  );
}

export default Account;
