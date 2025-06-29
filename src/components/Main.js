import React from "react";
import main_image from "../images/retrogaming.png"

function Main(){
    return (
        <div className="main-container">
            <div className="main-title-container">
                <h1 className="main-h1">Home Screen</h1>
                <p className="main-p1">Discover, track, analyze your games</p>
            </div> 
            <img className="main-img" src={main_image} width="650"></img>
        </div>
    )
};

export default Main;