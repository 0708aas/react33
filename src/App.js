import React, {useState} from 'react';
import RockPaper from "./components/RockPaper";
import GuesPlay from "./components/GuesPlay";

const App = () => {
    const [game, setGame] = useState(null)
    return (
        <div>
            {
                !game &&<div className="open">
                <div className="menu">
                    <button className="button-open" onClick={() => setGame(1)} type="button">Камень,ножницы</button>
                    <br/>
                    <button className="button-open" onClick={() => setGame(2)} type="button">Угадай число</button>
                </div>
                </div>
            }

            {game === 1 && <RockPaper />}
            {game === 2 && <GuesPlay />}
        </div>
    );
};


export default App;