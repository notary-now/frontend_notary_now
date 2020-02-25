import React, {useState, useEffect} from 'react';

import {getNotaries, postBooking} from '../fetchCalls.js'

function Find(props) {
  let [notaries, setNotaries] = useState({})
  let [booking, setBooking] = useState({show: false})
  let [date, setDate] = useState({})
  let [hour, setHour] = useState("06")
  let [minute, setMinute] = useState("00")
  let [location, setLocation] = useState({})



  useEffect(() => {
      getNotaries(setNotaries, setBooking, props.showChat)
    },[])

  return (
    <div className="find">
    {booking.show &&
      <article className="date-picker">
        <span className="date-center">
          <span>Book With: <p>{booking.name}</p></span>
          <span>
          &nbsp; Hours: &nbsp;
          <select className="hour" onChange={(event) => {setHour(event.target.value)}}>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
          </select>
          &nbsp; Minutes: &nbsp;
          <select className="minutes" onChange={(event) => {setMinute(event.target.value)}}>
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
          </span>
          <div><input type='text' className="location" placeholder="location" onChange={(event) => {setLocation(event.target.value)}}/></div>
          <input className="date-input" type="date" onChange={(event) => {setDate(event.target.value)}}/><button className="x-date" onClick={() => setBooking({show:false})}>X</button>
          <button className="date-submit" onClick={() => postBooking({
          appointee_id: 2,
          time: `${hour}:${minute}:00`,
          date: date,
          location: location
        }, setBooking)}>Submit</button>
        </span>
      </article>
              }
    {notaries.length && notaries}
    </div>
  );
}

export default Find;
