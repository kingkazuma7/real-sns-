import React, { useContext } from 'react';
import { Chat, Notifications, Search } from "@mui/icons-material";
import "./Topbar.css";
import "react-router-dom";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
return (
<div className='topbarContainer'>
  <div className='topbarLeft'>
    <Link to="/">
      <span className='logo'>Real SNS</span>
    </Link>
  </div>
  <div className='topbarCenter'>
    <div className='searchbar'>
      <Search className='searchIcon' />
      <input type="text" className='seachInput' placeholder='探しものはなんですか' />
    </div>
  </div>
  <div className='topbarRight'>
    <div className="topbarIconItem">
      <div className="topbarItemIcons">
        <div className="topbariconItem">
          <Chat />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbariconItem">
          <Notifications />
          <span className="topbarIconBadge">2</span>
        </div>
      </div>
    </div>
    <Link to={`/profile/${user.username}`}>
    <img src={
      user.profilePicture
      ? PUBLIC_FOLDER + user.profilePicture
      : PUBLIC_FOLDER + "/person/noAvatar.png"
      } alt="" className='topbarImg' />
    </Link>
  </div>
</div>
)
}
