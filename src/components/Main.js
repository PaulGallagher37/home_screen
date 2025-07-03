import React from "react";
import { useEffect } from "react";
import main_image from "../images/retrogaming.png"


function Main(){

    return (
        <div className="main-container">
            <div className="main-title-container">
                <h1 className="main-h1" id="typed-text">Home Screen</h1>
                <h2 className="main-p1">Discover, track, analyze your games</h2>
            </div> 
            <div className="main-h3-p-img">
                <div className="main-h3-p">
                    <h3>What is Home Screen?</h3>
                    <p>Home screen is a place where you can Lorem 
                        ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <img className="main-img" src={main_image} width="650"></img>
            </div>
        </div>
    )
};

export default Main;