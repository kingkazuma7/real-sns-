import React from 'react'
import { MoreVert } from "@mui/icons-material"
import "./Post.css";

export default function Post() {
  return (
    <div className='post'>
      <div className="postTop">
        <div className="postTopLeft">
          <img src="./assets/person/1.jpeg" alt="" className='postProfileImg' />
          <span className="postUsername">Kazuma Code</span>
          <div className="postDate">5分前</div>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">SNSを自作中です</span>
        <img src="./assets/post/1.jpeg" alt="" className='postImg' />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img src="./assets/heart.png" alt="" className='likeIcon' />
          <span className="postLikeCounter">5人がいいねを押しました</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">4：コメント</span>
        </div>
      </div>
    </div>
  )
}
