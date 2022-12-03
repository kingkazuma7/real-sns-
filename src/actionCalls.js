import axios from "axios";

export const loginCall = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" }); // userの情報を関し
  try {
    const response = await axios.post("auth/login", user);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data })
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error });
  }
}