import React, { useState } from 'react';
import AppointmentItem from './AppoinmentItem';


const AppointmentsApp = () => {
  const [appointments, setAppointments] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleAddAppointment = (event) => {
    event.preventDefault();
    if (title && date) {
      const newAppointment = {
        id: new Date().getTime(),
        title,
        date,
        isStarred: false,
      };
      setAppointments([...appointments, newAppointment]);
      setTitle('');
      setDate('');
    }
  };

  const handleToggleStar = (id) => {
    setAppointments(appointments.map(appointment => 
      appointment.id === id ? { ...appointment, isStarred: !appointment.isStarred } : appointment
    ));
  };

  return (
    <div className="appointments-app">
      <h1 className="appointments-title">Appointments</h1>
      <div className="appointments-form-container">
        <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" alt="appointments" className="appointments-img" />
        <form className="appointments-form" onSubmit={handleAddAppointment}>
          <input
            type="text"
            className="input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            className="input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit" className="button">Add Appointment</button>
        </form>
      </div>
      <ul className="appointments-list">
        {appointments.map(appointment => (
          <AppointmentItem
            key={appointment.id}
            appointment={appointment}
            onToggleStar={handleToggleStar}
          />
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsApp;
