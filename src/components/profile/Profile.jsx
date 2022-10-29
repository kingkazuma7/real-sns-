import React from 'react'
import Rightbar from '../rightbar/Rightbar'
import Sidebar from '../sidebar/Sidebar'
import Timeline from '../timeline/Timeline'
import Topbar from '../topbar/Topbar'
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="assets/post/3.jpeg" className='profileCoverImg' alt="" />
              <img src="assets/person/1.jpeg" className='profileUserImg' alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Kazuma Code</h4>
              <span className="profileInfoDesc">講師をしています。</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}
