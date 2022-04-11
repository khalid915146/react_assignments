// import PostviewPage from "./PostviewPage";
// import { Link } from "react-router-dom";
// import react from "react";
import './App.css';

const LandingPage = () =>{
    return(
        <div className="LandingPage">
            <span className="img-container">
                <img src="./coverpage.jpg" alt="Cover Image"/>
            </span>
            <span className="text-container">
                <span className="text">
                    <h1>
                        click me for new page
                        <button type='submit'>
                            {/* <a href="http://localhost:3004/"> */}
                            <a href="http://localhost:3001/">
                                Enter
                            </a>
                        </button>
                    </h1>
                </span>       
            </span>
        </div>
    )
}
export default LandingPage;