import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import "./Register.css"

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // パスワードと確認用パスワードがあっているか確認
    if (password.current.value !== passwordConfirm.current.value) {
      // pass間違っている
      passwordConfirm.current.setCustomValidity("パスワーが違います。")
    } else {
      // passがあっている
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        }
        // registerのapiを叩く
        await axios.post("/auth/register", user)
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>Real SNS</h3>
          <span className="loginDesc">本格的なSNSを、自分の手で。</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">新規登録はこちら</p>
            <input type="text" className='loginInput' name="" id="" placeholder='ユーザー名' required ref={username} />
            <input type="email" className='loginInput' name="" id="" placeholder='Eメール' required ref={email} />
            <input type="password" className='loginInput' name="" id="" placeholder='パスワード' required ref={password} minLength={6} />
            <input type="password" className='loginInput' name="" id="" placeholder='確認用パスワード' required ref={passwordConfirm} minLength={6} />
            <button className='loginButton' type="submit">サインアップ</button>
            <button className="loginRegister" type="button">ログイン</button>
          </form>
        </div>
      </div>
    </div>
  )
}
