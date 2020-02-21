import React, {useState, useEffect} from 'react';


function Schedule() {

  let [schedule, setSchedule] = useState()

  useEffect(() => {
    fetch('https://backend-notary-now.herokuapp.com/api/v1/notaries/1/appointments')
    .then(result => result.json())
    .then(data => {
      let upcoming = data.map(data => {
        return (
          <div className="appointments">
            <p>Date: {data.date}</p>
            <p>Time: {data.time}</p>
            <p>Address: {data.location}</p>
          </div>
        )})
      setSchedule(upcoming)
  })
},[])

  return (
    <>
      <h2 className="schedule-header">All Upcoming Appointments</h2>
      <section className="schedule">{schedule}</section>
    </>
  );
}

export default Schedule;
