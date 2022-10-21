import React from 'react';
import { Chat, Notifications, Search } from "@mui/icons-material";
import "./Topbar.css";

export default function Topbar() {
return (
<div className='topbarContainer'>
  <div className='topbarLeft'>
    <span className='logo'>Real SNS</span>
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
    <img src="/assets/person/1.jpeg" alt="" className='topbarImg' />
  </div>
</div>
)
}
