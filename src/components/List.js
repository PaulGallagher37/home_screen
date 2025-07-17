import Navbar from "./Navbar";
import { useState } from "react";

function List() {

    const [ gamesToPlay, setGamesToPlay ] = useState("");
    const [ gamesBeat, setGamesBeat ] = useState("");

     function handleSubmit(e) {
            e.preventDefault();
            const game = document.getElementById("input").value;
            console.log(game)
        }

    return (


        <div>
            <Navbar />
            <form>
                <div className="main-list-container"> 

                    
                    <div className="list-container">
                        <h2>Games to Play</h2>
                    </div>

                    <div className="list-addgame-container">
                        <h1 className="list-addgame-h1">Add Game</h1>
                        <input 
                            className="list-addgame-input" 
                            type="text"
                            placeholder="  Add game..."
                            id="input"
                        >
                        </input>
                        <div className="list-button-container">
                            <button className="list-button" onClick={handleSubmit}>Game to Play</button>
                            <button className="list-button">Game Beaten</button>
                        </div>
                    </div>

                    <div className="list-container">
                        <h2>Games Beat</h2>
                    </div>

                </div>
            </form>
        </div>
        
    )
};

export default List;