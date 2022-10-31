import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar({ profile }) {
  // console.log(Users);
  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className='starImg' />
          <span className="eventText">
            フォロワー限定イベント開催中!
          </span>
        </div>
        <img src="assets/post/5.jpeg" alt="" className='eventImg' />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
          <Online user={user} key={user.id} />
          ))}
        </ul>
        <h4 className="promotionTitle">プロモーション広告</h4>
        <img src="assets/promotion/promotion1.jpeg" alt="" className='rightbarPromotionImg' />
        <p className="promotionName">ショッピング</p>
        <img src="assets/promotion/promotion2.jpeg" alt="" className='rightbarPromotionImg' />
        <p className="promotionName">株式会社HOGE</p>
        <img src="assets/promotion/promotion3.jpeg" alt="" className='rightbarPromotionImg' />
        <p className="promotionName"></p>
      </>
    )
  };
  
  const ProfileRightbar = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <>
      <h4 className="rightbarTitle">ユーザー情報</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">出身：</span>
          <span className="rightbarInfoKey">福岡</span>
        </div>
        <h5 className="rightbarTitle">あなたの友達</h5>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/1.jpeg"} className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">Kazuma Code</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/2.jpeg"} className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">yamaki</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/3.jpeg"} className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">hoge</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/4.jpeg"} className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">fuga</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/5.jpeg"} className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">soge</span>
          </div>
        </div>
      </div>
      </>
    )
  };
  
  console.log(<ProfileRightbar />);
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* Rightbar内にprofile Propsがあれば ... ProfileRightbar()を */}
        {/* Rightbar内にprofile Propsがなければ ... HomeRightbar()を */}
        {profile ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  )
}
