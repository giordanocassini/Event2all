import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../view/Login";
import SignUp from "../view/SignUp";
import Home from "../view/Home";
import HomeLoged from "../view/HomeLoged";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<SignUp />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
