import React, {useEffect} from "react";

function Contact() {

    useEffect(() => {
        document.title = "Contact - Turner's Website";
    }, []);

    return (
        <div>Hi</div>
    );
}

export default Contact;