import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Projects from './Projects';
import Resume from './Resume';
import Contact from "./Contact";
import MyNavbar from "./MyNavbar";
import Home from "./Home";
import Scoreboard from "./ProjectsPages/Scoreboard"

function App() {
    return (
        <Router>
            <div>
                <MyNavbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
                    <Route path="/projects/scoreboard" element={<Scoreboard/>}></Route>
                    <Route path="/resume" element={<Resume/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path = "*" element={<Navigate to="/" />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;