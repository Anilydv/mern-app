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

export default function App() {
    return (
        <>
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
        </>
    );
}
