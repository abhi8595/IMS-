import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from './components/register/Register';
import Signin from './components/login/login';
import GenerateQR from './components/QR/QR';
import Dashboard from './components/Dashboard/Dashboard';
import QRCodeReader from './components/upload/Upload';
import Edit from './components/Edit/Edit';
import { useState } from 'react';
import Frontlook from './components/Frontlook/Frontlook';
import Login from './components/login/login';
import Genrate from './components/QR/QR';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Redirect to signin page
    return <Navigate to="/login" />;
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Frontlook />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/genrateqr" element={<GenerateQR />} />
          <Route path="/upload" element={<QRCodeReader />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/genrate" element={<Genrate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
