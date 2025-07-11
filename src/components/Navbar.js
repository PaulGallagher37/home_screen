import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-page-container">

            <div className="navbar-one">
                <ul  className="navbar-ul">
                    <li><Link to="/" className={"navbar-li"}>Home</Link></li>
                    <li><Link to="/list" className={"navbar-li"}>Lists</Link></li>
                    <li><Link to="faq" className={"navbar-li"}>FAQs</Link></li>
                </ul> 
            </div>

            <div className="navbar-two">
                <div className="header-button-container"> 
                    <button type="button" className="header-login-button">Login</button> 
                    <button type="button" className="header-signup-button">Sign-up</button> 
                </div>   
            </div>   

        </div>
    )
};

export default Navbar;