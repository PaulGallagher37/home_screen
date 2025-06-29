import React from "react";

function Header() {
    return (
        <div className="header">

            <div className="header-one">
                <ul  className="header-ul">
                    <li className="header-li"><a href="#" className="header-a">Home</a></li> 
                    <li className="header-li"><a href="#" className="header-a">Games</a></li> 
                    <li className="header-li"><a href="#" className="header-a">FAQs</a></li> 
                    <li className="header-li"><a href="#" className="header-a">About</a></li> 
                </ul> 
            </div>

            <div className="header-two">
                <form> 
                    <input type="search" placeholder=" Search..." className="header-form"></input>
                </form> 
                <div className="header-button-container"> 
                    <button type="button" className="header-login-button">Login</button> 
                    <button type="button" className="header-signup-button">Sign-up</button> 
                </div>   
            </div>   

        </div>
    )
};

export default Header;