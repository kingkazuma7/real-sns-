import React, { useContext, useRef } from 'react'
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import "./Login.css"

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);
  
  const handleSubmit = (e) => { // form以下のbtn click
    e.preventDefault(); //ボタンを押してもリロードしない
    // console.log(email.current.value);
    // console.log(password.current.value);
    loginCall ( // AuthContextを呼び出し
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };
  
  console.log(user);
  
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>Real SNS</h3>
          <span className="loginDesc">本格的なSNSを、自分の手で。</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">ログインはこちら</p>
            <input type="email" className='loginInput' name="" id="" placeholder='Eメール' ref={email} required />
            <input type="password" className='loginInput' name="" id="" placeholder='パスワード' ref={password} minLength={6} required />
            <button className='loginButton'>ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegister">アカウント作成</button>
          </form>
        </div>
      </div>
    </div>
  )
}
