import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../view/Login";
import SignUp from "../view/SignUp";
import Home from "../view/Home";
import Dashboard from "../view/Dashboard";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<SignUp />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}
