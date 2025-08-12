import Navbar from "./Navbar";
import { useState, useEffect } from "react";


function List() {

    const [ gamesToPlay, setGamesToPlay ] = useState([]);
    const [ gamesBeat, setGamesBeat ] = useState([]);
    const [ game, setGame ] = useState("");
    const randomNum = Math.round(Math.random() * 1000)

    useEffect(() => {
        const savedGamesToPlay = JSON.parse(localStorage.getItem("savedgamestoplay") || "[]");
        const savedGamesBeat = JSON.parse(localStorage.getItem("savedgamesbeat") || "[]");
        setGamesToPlay(savedGamesToPlay);
        setGamesBeat(savedGamesBeat);
    },[])

    function localStorageSetGamesToPlay(input){
        localStorage.setItem("savedgamestoplay", JSON.stringify([...gamesToPlay, input]));
    }

      function localStorageSetGamesBeat(input){
        localStorage.setItem("savedgamesbeat", JSON.stringify([...gamesBeat, input]));
    }

    function capitalise(string){
        return string
            .split(" ")
            .map(word => word ? word[0].toUpperCase() + word.slice(1) : "")
            .join(" ");
    }

    
    function addGameToPlay(e){
        e.preventDefault();
        const inputValue = document.getElementById("input").value;
        if (inputValue.trim() !== ""){
            const newGame = {name: capitalise(inputValue), id: randomNum}
            setGamesToPlay([...gamesToPlay, newGame ]);
            localStorageSetGamesToPlay(newGame);
        }
        setGame("");
    }


    function addGameBeat(e){
        e.preventDefault();
        const inputValue = document.getElementById("input").value;
        if (inputValue.trim() !== ""){
            const newGame = {name: capitalise(inputValue), id: randomNum}
            setGamesBeat([...gamesBeat, newGame]);
            localStorageSetGamesBeat(newGame);
        }
        setGame("");
    }

    function deleteGameToPlay(id){
        setGamesToPlay(gamesToPlay.filter((game) => {return game.id !== id}))
    }

     function deleteGamesBeat(id){
        setGamesBeat(gamesBeat.filter((game) => {return game.id !== id}))
    }

    function handleDragStart(e, index){
        e.dataTransfer.setData("dragIndex", index)
    };

    function handleDragOver(e){
        e.preventDefault();
    }

    function handleDropGamesBeat(e){
        const dragIndex = e.dataTransfer.getData("dragIndex");
        const index = parseInt(dragIndex, 10);
        if (!isNaN(index) && gamesToPlay[index]) {
            const gameToMove = gamesToPlay[index];
            setGamesBeat([...gamesBeat, gameToMove]);
            setGamesToPlay(gamesToPlay.filter((_, i) => i !== index));
            localStorageSetGamesBeat();
        }
    }

    function handleDropGamesToPlay(e){
        const dragIndex = e.dataTransfer.getData("dragIndex");
        const index = parseInt(dragIndex, 10);
        if (!isNaN(index) && gamesBeat[index]) {
            const gameToMove = gamesBeat[index];
            setGamesToPlay([...gamesToPlay, gameToMove]);
            setGamesBeat(gamesBeat.filter((_, i) => i !== index));
            localStorageSetGamesToPlay();
        }
    }


    return (

        <div>
            <Navbar />
            <form id="form">
                <div className="main-list-container"> 

                    
                    <div className="list-container">
                        <h2 className="list-h2-header">Games to Play</h2>
                        <ul className="list-ul" onDragOver={handleDragOver} onDrop={(e) => handleDropGamesToPlay(e)}>
                            {gamesToPlay.map((games, index) => (

                                
                                    <div className="list-item-container" id="gameToPlay" draggable={true} onDragStart={(e) => handleDragStart(e, index)}>
                                        <li className="list-li">
                                            {games.name}
                                        </li>
                                        <button 
                                            type="button" 
                                            className="list-button" 
                                            onClick={() => deleteGameToPlay(games.id)}
                                        >X
                                        </button>
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
                        <ul className="list-ul" onDragOver={handleDragOver} onDrop={(e) => handleDropGamesBeat(e)}>
                            {gamesBeat.map((games, index) => (

                                <div className="list-item-container"  draggable={true} onDragStart={(e) => handleDragStart(e, index)}>
                                    <li className="list-li">
                                        {games.name}
                                    </li>
                                    <button 
                                        type="button" 
                                        className="list-button" 
                                        onClick={() => deleteGamesBeat(games.id)}
                                    >X
                                    </button>
                                </div>


                            ))}
                        </ul>
                    </div>

                </div>
            </form>
        </div>
        
    )
};

export default List;