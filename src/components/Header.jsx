import React from 'react';
import notification from "../images/notification.png";
import profile from "../images/profile.jpg";

const Header = () => {
  return (
    <header>
    <div></div>
      <img src={notification} alt="" />

      <div className="user">

        <div className="user-img">
          <img src={profile} alt="" />
        </div>

        <div className="user-txt">
            <h3>Piyushan</h3>
            <p>Hiring Manager</p>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
