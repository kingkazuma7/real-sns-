import React, { useEffect, useState } from 'react'
import Rightbar from '../rightbar/Rightbar'
import Sidebar from '../sidebar/Sidebar'
import Timeline from '../timeline/Timeline'
import Topbar from '../topbar/Topbar'
import "./Profile.css";
import axios from "axios";

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(PUBLIC_FOLDER);
  
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=kingkazuma7`);
      console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, []);
  
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
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline username="kingkazuma7" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  )
}
