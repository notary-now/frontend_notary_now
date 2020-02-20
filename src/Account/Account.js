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
    {account.notary_values && <>
      <span className='notary-name'>{account.first_name} {account.last_name}</span>
      <span><img className="account-img" src={account.profile_photo} alt='notary'/><span className="verfied-text"><img className="verified" alt='verified' src={logo}/>VERIFIED</span></span>
      <span className="bio">{account.notary_values.bio}</span>
      <span className="bio">Location: {account.zip_code}</span>
      <span className="bio">Commission: {account.notary_values.commission_date}<br/>Expiration: {account.notary_values.expiration_date}</span>
      </>
    }
    </section>
  );
}

export default Account;
