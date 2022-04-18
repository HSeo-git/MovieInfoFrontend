import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter