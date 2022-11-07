import React, { useEffect, useState } from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import "./Timeline.css"
// import { Posts } from '../../dummyData'
import axios from "axios";

export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);
  // console.log(axios);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
      ? await axios.get(`/posts/profile/${username}`)
      : await axios.get("/posts/timeline/634cc0bfb1468cea62239896");
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);
  
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
