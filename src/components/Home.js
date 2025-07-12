import Navbar from "./Navbar";
import main_image from "../images/retrogaming.png"
import controllers from "../images/controllers.jpg"


function Home(){

    return (
        <div>
            <Navbar />
            <div className="main-page-container">
                <div className="main-title-container">
                    <h1 className="main-h1" id="typed-text">Home Screen</h1>
                    <h2 className="main-p-1">Organise, list, and analyze your games</h2>
                </div> 


                <div className="section1-container1">
                    <div className="section1-h3-p">
                        <h3 className="section-h3">What is Home Screen?</h3>
                        <p className="section1-p1">Think of Home Screen as a 'To-Do List' for your backlog. 
                            A place to list and keep track of all the games you still need 
                            to start, play, and finish!
                            Sed facilisis sapien orci, id mattis erat efficitur nec. 
                            Sed facilisis sapien orci, id mattis erat efficitur nec. 
                        </p>
                    </div>
                    <img className="main-img" src={main_image} width="600"></img>
                </div>


                <div className="section2-container1">
                    <img className="main-img" src={controllers} width="600" height="325"></img>
                    <div className="section2-h3-p">
                        <h3 className="section-h3">Lists, lists...and more lists!</h3>
                        <p className="section2-p1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In venenatis, est eget suscipit rutrum, ligula metus 
                            suscipit ipsum, ac convallis mi arcu eleifend ligula. 
                            Sed facilisis sapien orci, id mattis erat efficitur nec. 
                            Sed facilisis sapien orci, id mattis erat efficitur nec. 
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
};

export default Home;