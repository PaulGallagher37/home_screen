import Navbar from "./Navbar";
import { useState, useEffect } from "react";

function List() {

    const [ gamesToPlay, setGamesToPlay ] = useState([]);
    const [ gamesBeat, setGamesBeat ] = useState([]);
    const [ game, setGame ] = useState("");

    
    function addGameToPlay(e) {
        e.preventDefault();
        setGame(document.getElementById("input").value);
        setGamesToPlay([...gamesToPlay, {name: game.trim()}]);
    }


    function addGameBeat(e){
        e.preventDefault();
        setGame(document.getElementById("input").value);
        setGamesBeat([...gamesBeat, {name: game.trim()}]);
    }

    function deleteGame(e) {
        e.preventDefault();
        
        setGamesToPlay([...gamesToPlay])
    }




    return (


        <div>
            <Navbar />
            <form id="form">
                <div className="main-list-container"> 

                    
                    <div className="list-container">
                        <h2 className="list-h2-header">Games to Play</h2>
                        <ul className="list-ul">
                            {gamesToPlay.map((games) => (
                                <div className="list-item-container">
                                    <li className="list-li">
                                        {games.name}
                                    </li>
                                    <button className="list-button" onClick={deleteGame}>X</button>
                                </div>
                            ))}
                        </ul>   
                    </div>

                    <div className="list-addgame-container">
                        <h1 className="list-addgame-h1">Add Game</h1>
                        <input 
                            className="list-addgame-input" 
                            type="text"
                            placeholder="Add game..."
                            id="input"
                            value={game}
                            onChange={(e) => setGame(e.target.value)}
                        >
                        </input>
                        <div className="list-button-container">
                            <button className="list-add-button" onClick={addGameToPlay}>Game to Play</button>
                            <button className="list-add-button" onClick={addGameBeat}>Game Beaten</button>
                        </div>
                    </div>

                    <div className="list-container">
                        <h2 className="list-h2-header">Games Beat</h2>
                        <ul className="list-ul">
                            {gamesBeat.map((games) => (
                                <li className="list-li">{games.name}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </form>
        </div>
        
    )
};

export default List;