import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Projects from './Projects';
import Resume from './Resume';
import Contact from "./Contact";
import MyNavbar from "./MyNavbar";

function Home() {
    return <h2>Home</h2>
}

function App() {
    return (
        <Router>
            <div>
                <MyNavbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
                    <Route path="/resume" element={<Resume/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;