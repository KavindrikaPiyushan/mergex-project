import React from 'react'

import Jobs from '../components/jobs'

export default function JobApproval() {
  return (
    <div className='JobApprovalCover'>
     <div className='header'>
            <p>Job Approval</p>
        </div>
      <div className='cover'>
      
        <div className='jobContent'>
        <p className='jobTitle'>Pending Jobs</p>
        <Jobs></Jobs>
        <Jobs></Jobs>
        <Jobs></Jobs>
        <Jobs></Jobs>
        <Jobs></Jobs>
        <Jobs></Jobs>
        <Jobs></Jobs>
        </div>
      </div>
    </div>
  )
}
