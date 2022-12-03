// props使わずコンポーネントにアクセスできる
// STEP3

import { children, createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer.js"

// 最初のユーザー状態を定義
const initialState = {
  // user: null,
  user: {
    _id: "6343e935a2905f5f0252eb11",
    username: "田中",
    email: "tanaka@yahoo.co.jp",
    password: "123456",
    profilePicture: "/person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
  },
  // user: {
  //   _id: "6340f36135907819d5563f41",
  //   username: "kingkazuma7",
  //   email: "ps3neito@yahoo.co.jp",
  //   password: "abcdef",
  //   profilePicture: "",
  //   coverPicture: "",
  //   followers: [],
  //   followings: [],
  //   isAdmin: false,
  // },
}

// 状態をグローバルに管理
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState); //AuthReducer巻数stateを更新する, dispatch通知する,state監視
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children} {/* Appが入ってくる */}
    </AuthContext.Provider>
  )
}
