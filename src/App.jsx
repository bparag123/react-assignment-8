import React from "react";
import "./App.css";
import SignUpForm from "./components/signupForm";

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
