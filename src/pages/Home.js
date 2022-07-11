import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Login from "../components/Login"
import Database from "../components/database";


function Home(props) {
        return(
<body>
    <div id="navigation">
        <nav className="navbar">
            <ul>
                <li>
                    <a>
                        Home
                    </a>
                </li>
                <li>
                    <a>
                        About
                    </a>
                </li>
                <li>
                    <a>
                        Contact
                    </a>
                </li>
            </ul>
            </nav>
        </div>
    <div id="parallax">
        <div className="intro-text">
            text 
                <br/>
              here
        </div>
    </div>

    <div className="transition"></div>
    <section className="section">
        <div className="question">
            What is schpiel?
            </div>
        <div className="answer">
            sscsdafads
        </div>
    </section>

    <div className="transition"></div>
    <section className="section"></section>
    
    
    
</body>
        )
    
}

export default Home; 
// make an onclick on the new forms, i dont think an event listener is needed here
// const [errorMessages, setErrorMessages] = useState({});
    //     const [isSubmitted, setIsSubmitted] = useState(false);

    //     const renderErrorMessage = (name) =>{
    //         name = errorMessages.name && (
    //             <div className="error">{errorMessages.message}</div>
    //         );
    //     }