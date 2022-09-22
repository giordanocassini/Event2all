import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../view/Login";
import Register from "../view/Register";
import Home from "../view/Home";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
