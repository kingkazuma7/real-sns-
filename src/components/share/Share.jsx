import React, { useContext, useRef, useState } from 'react'
import { Analytics, DeblurOutlined, Face, Gif, Image, LineAxisOutlined } from "@mui/icons-material"
import "./Share.css"
import axios from "axios";
import { AuthContext } from '../../state/AuthContext';

export default function Share() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext); // ログインuser
  const desc = useRef(); // useRefでinputの情報を取得
  
  const [file, setFile] = useState(null);
  console.log(file);
  
  const handleSubmit = async (e) => { //関数受取
    e.preventDefault();
    const newPost = {
      userId: user._id, //login user
      desc: desc.current.value, //投稿中身
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          {/* <img src="/assets/person/1.jpeg" alt="" className='shareProfileImg' /> */}
          <img src={
            user.profilePicture
            ? PUBLIC_FOLDER + user.profilePicture
            : PUBLIC_FOLDER + "/person/noAvatar.png"
            }
            alt=""
            className='shareProfileImg'
          />{/* dbからパスを持ってくる */}
          <input type="text" className='shareInput' placeholder='今何してるの？' ref={desc} />
        </div>
        <hr className='shareHr' />
        <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
          <div className="shareOptions">
            <label className="shareOption" htmlFor='file' onChange={(e) => setFile(e.target.files[0])}>
              <Image className='shareIcon' htmlColor='blue' />
              <span className="shareOptionText">写真</span>
              <input type="file" id="file" accept='image/*' style={{display: "none"}} />
            </label>
            <div className="shareOption">
              <Gif className='shareIcon' htmlColor='hotpink' />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <Face className='shareIcon' htmlColor='green' />
              <span className="shareOptionText">気持ち</span>
            </div>
            <div className="shareOption">
              <Analytics className='shareIcon' htmlColor='red' />
              <span className="shareOptionText">投票</span>
            </div>
          </div>
          <button className="shareButton" type="submit">投稿</button>
        </form>
      </div>
    </div>
  )
}
