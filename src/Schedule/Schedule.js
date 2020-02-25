import React, {useState, useEffect} from 'react';
import {getAppointments} from '../fetchCalls.js'


function Schedule() {

  let [schedule, setSchedule] = useState()

  useEffect(() => {
    getAppointments(setSchedule)
},[])

  return (
    <>
      <h2 className="schedule-header">All Upcoming Appointments</h2>
      <section className="schedule">{schedule}</section>
    </>
  );
}

export default Schedule;
