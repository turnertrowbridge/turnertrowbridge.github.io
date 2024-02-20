import React, {useEffect, useState} from "react";
import Iframe from 'react-iframe';
import "../styles/Resume.css"

function Resume() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        document.title = "Resume - Turner's Website";

        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const iframeHeight = windowHeight * 0.8;
    const iframeTopOffset = windowHeight * 0.3;

    return (
        <div className="center">
            <div className="resume-container">
                <Iframe
                    url="https://docs.google.com/document/d/e/2PACX-1vTn1njfPzGFr1oTufjfbMrciGG0Ki2Yx8LX17UhrNlr8Lge824pIu3l1h0UMmHcdT3cqAs1orF1lpQc/pub?embedded=true"
                    title="Turner's Resume Google Doc"
                    width="100"
                    height={`${iframeHeight}px`}
                    style={{ marginTop: `${iframeTopOffset}px` }}
                    className="resume-iframe"
                    scrolling="yes"
                />
            </div>
        </div>
    );
}

export default Resume;