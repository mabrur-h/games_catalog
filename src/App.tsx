import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import AuthPage from "./pages/Auth";
import DashboardPage from "./pages/Dashboard";

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path='/' element={<DashboardPage/>} />
                        <Route path='/auth' element={<AuthPage />} />
                    </Routes>
                </div>
            </Router>
            <ToastContainer/>
        </>
    );
}

export default App;
