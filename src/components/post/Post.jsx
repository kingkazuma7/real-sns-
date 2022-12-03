import React, { useState, useEffect } from 'react'
import { MoreVert } from "@mui/icons-material"
import "./Post.css";
// import { Users } from '../../dummyData'; 
import axios from "axios";
import { format } from "timeago.js"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';

export default function Post({ post }) {
  /* いいねのclick */
  //const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  
  
  const handleLike = async () => {
    try {
      // いいねのAPIをたたく
      await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (error) {
      console.log(error);
    }
    
    setLike(isLiked ? like -1 : like + 1) // 押された情報
    setIsLiked(!isLiked);
  }
  
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext); // ログインuser
  
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`); //apiを叩いてる
      // console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);
  
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <div className='post'>
      <div className="postTop">
        <div className="postTopLeft">
          <Link to={`profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                ? PUBLIC_FOLDER + user.profilePicture
                : PUBLIC_FOLDER + "person/noAvatar.png"
              }
              alt=""
              className="postProfileImg"
            />
          </Link>
          <span className="postUsername">{user.username}</span>
          <span className="postDate">{format(post.createdAt)}</span>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post.desc}</span>
        <img src={PUBLIC_FOLDER + post.img} alt="" className='postImg' />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img src={PUBLIC_FOLDER + "/heart.png"} alt="" className='likeIcon' onClick={() => handleLike()} />
          <span className="postLikeCounter">{like}人がいいねを押しました</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment}：コメント</span>
        </div>
      </div>
    </div>
  )
}