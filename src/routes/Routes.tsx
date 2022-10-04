import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../view/Login";
import SignUp from "../view/SignUp";
import Home from "../view/Home";
import Dashboard from "../view/Dashboard";
import EventName from "../view/EventName";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event" element={<EventName />} />
      </Routes>
    </Router>
  );
}
