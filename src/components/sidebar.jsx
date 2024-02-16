import React, { useState } from 'react';
import profile from "../images/profile.jpg";
import dashboardIcon from "../images/dashboard.png";
import interviewIcon from "../images/job-interview.png";
import feedbackIcon from "../images/feedback.png";
import evaluationIcon from "../images/check-list.png";
import schedulingIcon from "../images/schedule.png";
import messageIcon from "../images/message copy 1.png";
import logoutIcon from "../images/logout.png";
import Header from './Header.jsx';
import Content from './content.jsx';

import {FaBars,}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon: <img src={dashboardIcon} alt="Dashboard" />,
        },
        {
            path:"/job_approval",
            name:"Job Approval",
            icon:<img src={interviewIcon} alt="Dashboard" />,
        },
        {
            path:"/interview_feedback",
            name:"Interview Feedback",
            icon: <img src={feedbackIcon} alt="Dashboard" />,
        },
        {
            path:"/hiring_decision",
            name:"Hiring Decision",
            icon: <img src={evaluationIcon} alt="Dashboard" />,
        },
        {
            path:"/reporting",
            name:"Reporting",
            icon: <img src={schedulingIcon} alt="Dashboard" />,
        },
        {
            path:"/message",
            name:"Message",
            icon: <img src={messageIcon} alt="Dashboard" />,
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "280px" : "50px"}} className="sidebar">
               <div className="top_section ">
                   <div style={{display: isOpen ? "block" : "none"}} className="profile">
                    <img src= {profile} alt="" />
                   </div>
                   <div className="name">
                    <h3>Kavindrika Piyushan</h3>
                    <p>Hiring Manager</p>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
                <div className="logout">
                    <img src={logoutIcon} alt="" />
                    <a href="#">Log Out</a>
                </div>

           </div>
           <main>
            <Header />
           
            {children}
            </main>
        </div>
    );
};

export default Sidebar;