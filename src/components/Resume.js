import React, {useEffect} from "react";
import Iframe from 'react-iframe';
import "../styles/Resume.css"

function Resume() {

    useEffect(() => {
        document.title = "Resume - Turner's Website";
    }, []);

    return (
        <div className="resume-container">
            <Iframe
                url="https://docs.google.com/document/d/e/2PACX-1vTn1njfPzGFr1oTufjfbMrciGG0Ki2Yx8LX17UhrNlr8Lge824pIu3l1h0UMmHcdT3cqAs1orF1lpQc/pub?embedded=true"
                width="100"
                height="800px"
                className="resume-iframe"
            />
        </div>
    );
}

export default Resume;