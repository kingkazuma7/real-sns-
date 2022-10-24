import React from 'react'
import "./Rightbar.css"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className='starImg' />
          <span className="eventText">
            フォロワー限定イベント開催中!
          </span>
        </div>
        <img src="assets/post/5.jpeg" alt="" className='eventImg' />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/1.jpeg" alt="" className='rightbarProfileImg' />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Kazuma Code</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/2.jpeg" alt="" className='rightbarProfileImg' />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">HOGE</span>
          </li>
        </ul>
        <h4 className="promotionTitle">プロモーション広告</h4>
        <img src="assets/promotion/promotion1.jpeg" alt="" className='rightbarPromotionImg' />
        <p className="promotionName">ショッピング</p>
        <img src="assets/promotion/promotion2.jpeg" alt="" className='rightbarPromotionImg' />
        <p className="promotionName">株式会社HOGE</p>
        <img src="assets/promotion/promotion3.jpeg" alt="" className='rightbarPromotionImg' />
        <p className="promotionName"></p>
      </div>
    </div>
  )
}
