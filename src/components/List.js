import Navbar from "./Navbar";

function List() {

     function handleSubmit(event) {
            
        }

    return (


        <div>
            <Navbar />
            <div className="main-list-container"> 

                <div className="list-container">
                    <h2>Games to Play</h2>
                </div>

                <div className="list-addgame-container">
                    <h1 className="list-addgame-h1">Add Game</h1>
                    <input 
                        className="list-addgame-input" 
                        placeholder="  Add game..."
                        onSubmit={handleSubmit}
                    >
                    </input>
                    <div className="list-button-container">
                        <button className="list-button">Game to Play</button>
                        <button className="list-button">Game Beaten</button>
                    </div>
                </div>

                <div className="list-container">
                    <h2>Games Beat</h2>
                </div>

            </div>
        </div>
        
    )
};

export default List;