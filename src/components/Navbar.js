import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="header-page-container">

            <div className="header-one">
                <ul  className="header-ul">
                    <li><Link to="/" className="header-li">Home</Link></li>
                    <li><Link to="/list" className="header-li">Lists</Link></li>
                    <li><Link to="faq" className="header-li">FAQs</Link></li>
                </ul> 
            </div>

            <div className="header-two">
                <div className="header-button-container"> 
                    <button type="button" className="header-login-button">Login</button> 
                    <button type="button" className="header-signup-button">Sign-up</button> 
                </div>   
            </div>   

        </div>
    )
};

export default Navbar;