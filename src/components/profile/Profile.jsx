import React, { useContext, useEffect, useState } from 'react'
import Rightbar from '../rightbar/Rightbar'
import Sidebar from '../sidebar/Sidebar'
import Timeline from '../timeline/Timeline'
import Topbar from '../topbar/Topbar'
import "./Profile.css";
import axios from "axios";
import { useParams } from 'react-router-dom'

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(PUBLIC_FOLDER);
  // console.log(username);
  
  
  const [user, setUser] = useState([]);
  const username = useParams().username;
  
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      // console.log(response);
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
              <img src={
                user.profilePicture || PUBLIC_FOLDER + "/post/3.jpeg"
                }
                className='profileCoverImg'
                alt=""
              />
              <img src={
                user.profilePicture
                    ? PUBLIC_FOLDER + user.profilePicture
                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
                className='profileUserImg'
              />{/* dbからパスを持ってくる */}
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  )
}
