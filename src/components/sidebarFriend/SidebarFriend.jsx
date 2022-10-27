import React from 'react'

export default function  SidebarFriend({friend}) {
  return (
    <li className="sidebarFriend">
      <img src={friend.image} alt="" className='sidebarFriendImg' />
      <span className="sidebarFriendName">{friend.name}</span>
    </li>
  )
}
