import React, { useContext, useEffect, useState } from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import "./Timeline.css"
// import { Posts } from '../../dummyData'
import axios from "axios";
import { AuthContext } from '../../state/AuthContext';


export default function Timeline({ username }) {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  // console.log(axios);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
      ? await axios.get(`/posts/profile/${username}`) // プロフィールの場合
      : await axios.get(`/posts/timeline/${user._id}`); // ホームの場合
      // console.log(response);
      setPosts(response.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
  
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}
