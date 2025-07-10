

function Navbar() {
    return (
        <div className="header-page-container">

            <div className="header-one">
                <ul  className="header-ul">
                    <li className="header-li"><a href="home" className="header-a">Home</a></li> 
                    <li className="header-li"><a href="list" className="header-a">Lists</a></li> 
                    <li className="header-li"><a href="#" className="header-a">FAQs</a></li>  
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