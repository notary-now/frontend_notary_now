import React, {useState, useEffect} from 'react';
import cory from '../Imgs/cory.jpeg'


function Account() {
  let [account, setAccount] = useState({})

  useEffect(() => {setAccount({
  img: 'string',
  firstName: 'string',
  lastName:'string',
  bio:'string',
  location: '80444',
  startCommission:'1/2/12',
  endCommission: '1/1/2222',
  verfied: false
})},[])

  return (
    <section className="account">
      <span>{account.firstName} {account.lastName}</span>
      <img className="account-img" src={cory} alt='notary'/>
      <span>{account.bio}</span>
      <span>{account.location}</span>
      <span>{account.startCommission} - {account.endCommission}</span>
    </section>
  );
}

export default Account;
