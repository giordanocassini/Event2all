import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../view/Login";
import SignUp from "../view/SignUp";
import Home from "../view/Home";
import Dashboard from "../view/Dashboard";
import EventName from "../view/EventName";
import BudgetPage from "../view/BudgetPage";
import Guests from "../view/Guests";
import ToDoList from "../view/ToDoList";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/evento/:id" element={<EventName />} />
        <Route path="/orcamento/:id" element={<BudgetPage />} />
        <Route path="/convidados/:id" element={<Guests />} />
        <Route path="/tarefas/:id" element={<ToDoList />} />
      </Routes>
    </Router>
  );
}
