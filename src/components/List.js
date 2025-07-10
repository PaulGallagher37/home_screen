import Navbar from "./Navbar";

function List() {

    return (

        <div>
            <Navbar />
            <div className="list-addgame-container">
                <h1 className="list-addgame-h1">Add Game</h1>
                <input className="list-addgame-input"></input>
            </div>


        </div>
        
    )
};

export default List;