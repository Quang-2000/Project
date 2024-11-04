import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
