import React from "react";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homePage";
import Navbar from "./components/navbar";
import Register from "./pages/register";


const App =  () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<Homepage/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;