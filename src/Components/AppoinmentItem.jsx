import React from 'react';

const AppointmentItem = ({ appointment, onToggleStar }) => {
  const { id, title, date, isStarred } = appointment;
  const starImgUrl = isStarred 
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png';

  const handleStarClick = () => {
    onToggleStar(id);
  };

  return (
    <li className="appointment-item">
      <div className="appointment-header">
        <h3 className="appointment-title">{title}</h3>
        <button type="button" onClick={handleStarClick} className="star-button">
          <img src={starImgUrl} alt="star" className="star-img" />
        </button>
      </div>
      <p className="appointment-date">{date}</p>
    </li>
  );
};

export default AppointmentItem;
