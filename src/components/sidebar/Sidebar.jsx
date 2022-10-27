import React from 'react'
import { Bookmark, Home, Notifications, Person, Search, Settings } from '@mui/icons-material'
import "./Sidebar.css";
import { Users, SidebarFriends } from "../../dummyData"; // ダミーデータをUsersで使えるようになる
import SidebarFriend from '../sidebarFriend/SidebarFriend';

export default function Sidebar(sidebarFriend) {
  // console.log(SidebarFriends[1].name);
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <span className="sidebarListItemText">ホーム</span>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" />
            <span className="sidebarListItemText">通知</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">ブックマーク</span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <span className="sidebarListItemText">プロフィール</span>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemText">設定</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {SidebarFriends.map((friend) => (
            <SidebarFriend friend={friend} key={friend.id} /> //props friend
          ))}
        </ul>
      </div>
    </div>
  )
}
