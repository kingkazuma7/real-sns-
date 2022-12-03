import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./components/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./state/AuthContext";

function App() {
  const { user } = useContext(AuthContext); //どこからでもuser情報をとってこれる
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Register /> }></Route>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}></Route>
          <Route path="/profile/:username" element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
