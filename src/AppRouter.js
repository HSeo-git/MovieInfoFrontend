import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Navigate to="/browse" />}/>
                <Route path='/browse' element={<Home/>} />
                <Route path='/search' element={<Search/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter