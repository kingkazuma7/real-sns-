import React, { useState } from 'react'
import { MoreVert } from "@mui/icons-material"
import "./Post.css";
import { Users } from '../../dummyData'; 

export default function Post({ post }) {
  
  /* いいねのclick */
  //const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  
  const haldleLike = () => {
    setLike(isLiked ? like -1 : like + 1) // 押された情報
    setIsLiked(!isLiked);
  }
  
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='post'>
      <div className="postTop">
        <div className="postTopLeft">
          <img src={PUBLIC_FOLDER + Users.filter((user) => user.id === post.id)[0].profilePicture } alt="" className='postProfileImg' />{/* dbからパスを持ってくる */}
          <span className="postUsername">{Users.filter((user) => user.id === post.id)[0].username}</span>
          <div className="postDate">{post.date}</div>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post.desc}</span>
        <img src={PUBLIC_FOLDER + "/post/1.jpeg"} alt="" className='postImg' />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img src={PUBLIC_FOLDER + "/heart.png"} alt="" className='likeIcon' onClick={() => haldleLike()} />
          <span className="postLikeCounter">{like}人がいいねを押しました</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment}：コメント</span>
        </div>
      </div>
    </div>
  )
}
