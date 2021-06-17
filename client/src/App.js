import React, { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Errorpage from "./components/Errorpage";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { initialState, reducer } from "../src/reducer/UseReducer";
// contextAPI
export const UserContext = createContext();

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <UserContext.Provider value={{ state, dispatch }}>
                <ToastContainer />
                <Router>
                    <Navbar />

                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route>
                            <Errorpage />
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </>
    );
}
