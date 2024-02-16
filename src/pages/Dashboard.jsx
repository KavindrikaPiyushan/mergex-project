import React from 'react';
import Card_1 from '../components/card1.jsx';
import Card_2 from '../components/card2.jsx';
import Meeting_bar from '../components/meeting_bar.jsx';
import Job_bar from '../components/job_bar.jsx';

const Dashboard = () => {
    return (
        <>
        <div className='header'>
            <p>Good Morning, <span>Piyushan</span></p>
        </div>
        <div className="card_container">
            <div className="card_container_1">
                <Card_1 name="Applications" />
                <Card_1 name="Candidates" />
                <Card_1 name="Posted Jobes" />
                <Card_1 name="Unread Message" />
            </div>
           
                
                    <div className="card_container_2">
                    
                        <Card_2 name="New Applications" />
                        <Card_2 name="New Candidates"/>
                        <Card_2 name="Today's Meetings"/>
                        <Card_2 name="Pending jobs"/>
                        
                    </div> 
                    <div className="middle">
               
                    <div className="meetings scrollable-content"> 
                        <h1>Today's Meeting</h1>
                        <Meeting_bar />
                        <Meeting_bar />
                        <Meeting_bar />
                        <Meeting_bar />
                        <Meeting_bar />
                        <Meeting_bar />
                        <Meeting_bar />
                        <Meeting_bar />
                        <Meeting_bar />
                        <Meeting_bar />
                    </div>
                
               
                <div className="meetings scrollable-content">
                        <h1>Jobs</h1>
                        <Job_bar />
                        <Job_bar />
                        <Job_bar />
                        <Job_bar />
                        <Job_bar />
                        <Job_bar />
                        <Job_bar />
                        <Job_bar />
                        <Job_bar />
                    </div>

                   
                </div>
                <div >
            </div>
        </div>
        </>
    );
};

export default Dashboard;