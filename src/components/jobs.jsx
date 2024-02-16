import React from 'react'
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";



export default function jobs() {
  return (
    <div className='jobposting'>
      <div className="posts">
      <BiSolidShoppingBags className='bagicon'/>
          <div ><p className='postname '>Software Engineer</p>
          <p className='postDescription'>Published on 21/3/2024</p>
          <p className='postDescription'>Created by Dasun Shanaka</p></div>
      </div>
      <div className="choice">
      <IoEyeOutline className='eyeicon'/>
      <div>
        <button className='btn'>Reject</button>
        <button className='btn'>Accept</button>
      </div>
        

      </div>
    </div>
  )
}
