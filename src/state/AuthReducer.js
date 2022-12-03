// Reducer .. 司令塔てきな
// STEP２
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true, //情報を取得するのか否か
        error: false,
      }
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false, //情報を取得するのか否か
        error: false,
      }
    case "LOGIN_ERROR":
      return {
        user: null,
        isFetching: false, //情報を取得するのか否か
        error: action.payload,
      }
    default:
      return state;
  }
}

export default AuthReducer;