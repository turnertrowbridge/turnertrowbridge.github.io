import React, {useEffect} from "react";
import "../styles/Home.css"

function Home() {

    useEffect(() => {
        document.title = "Home - Turner's Website";
    }, []);


    return (
        <div className="Welcome">
            <h1 id="h1">Turner Trowbridge</h1>
            <p id="p1">Recent Computer Science Graduate</p>
            <p id="p2">San Diego State University (May 2024)</p>
        </div>
    );
}

export default Home;

