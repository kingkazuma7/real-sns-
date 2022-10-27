import React from 'react'
import { MoreVert } from "@mui/icons-material"
import "./Post.css";
import { Users } from '../../dummyData'; 

export default function Post({ post }) {
  // console.log(post.date);
  // const user = Users.filter((user) => user.id === 2);
  // console.log(user[0]);
  // console.log(Users.filter((user) => user.id === post.id));
  // console.log(Users.filter((user) => user.id === post.id)[0]);
  return (
    <div className='post'>
      <div className="postTop">
        <div className="postTopLeft">
          <img src={Users.filter((user) => user.id === post.id)[0].profilePicture } alt="" className='postProfileImg' />
          <span className="postUsername">{Users.filter((user) => user.id === post.id)[0].username}</span>
          <div className="postDate">{post.date}</div>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post.desc}</span>
        <img src="./assets/post/1.jpeg" alt="" className='postImg' />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img src="./assets/heart.png" alt="" className='likeIcon' />
          <span className="postLikeCounter">{post.like}人がいいねを押しました</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment}：コメント</span>
        </div>
      </div>
    </div>
  )
}
