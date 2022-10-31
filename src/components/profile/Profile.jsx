import React from 'react'
import Rightbar from '../rightbar/Rightbar'
import Sidebar from '../sidebar/Sidebar'
import Timeline from '../timeline/Timeline'
import Topbar from '../topbar/Topbar'
import "./Profile.css";

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(PUBLIC_FOLDER);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={PUBLIC_FOLDER + "/post/3.jpeg"} className='profileCoverImg' alt="" />
              <img src={PUBLIC_FOLDER + "/person/1.jpeg"} className='profileUserImg' alt="" />
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
