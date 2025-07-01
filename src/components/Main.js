import React from "react";
import { useEffect } from "react";
import main_image from "../images/retrogaming.png"


function Main(){

    const text = "Home Screen";
    let index = 0;

    function typewriter() {
        if (index < text.length) {
            document.getElementById("typed-text").textContent += text.charAt(index);
            index++;
            setTimeout(typewriter, 500)
        }
    }

    useEffect(() => {
        typewriter();
    },[])

    return (
        <div className="main-container">
            <div className="main-title-container">
                <h1 className="main-h1" id="typed-text"></h1>
                <p className="main-p1">Discover, track, analyze your games</p>
            </div> 
            <img className="main-img" src={main_image} width="650"></img>
        </div>
    )
};

export default Main;