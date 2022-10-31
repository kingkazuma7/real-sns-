import React from 'react'

export default function  SidebarFriend({friend}) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img src={PUBLIC_FOLDER + friend.image} alt="" className='sidebarFriendImg' />
      <span className="sidebarFriendName">{friend.name}</span>
    </li>
  )
}
