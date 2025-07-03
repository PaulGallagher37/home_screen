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
                    <h3 className="main-h3">What is Home Screen?</h3>
                    <p className="main-p">Think of Home Screen as a 'To-Do List' for your backlog. 
                        A place to list and keep track of all the games you still need 
                        to start, play, and finish!
                    </p>
                </div>
                <img className="main-img" src={main_image} width="650"></img>
            </div>
        </div>
    )
};

export default Main;