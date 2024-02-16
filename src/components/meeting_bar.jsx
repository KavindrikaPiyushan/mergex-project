import React from 'react';
import meetingIcon from "../images/calendar.png";

const Meeting_bar = () => {
  return (
   <div className="meeting_container">
    <div className="title">
        <img src={meetingIcon} alt="" />
        <p>SE Interview</p>
    </div>
    <div className="date">
        <p>Date - 12/2/2024</p>
        <p>Time - 9.00 am</p>
    </div>
   </div>
  );
};

export default Meeting_bar;
