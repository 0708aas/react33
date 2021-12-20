import React, {useState} from 'react';

const GuesPlay = () => {

    const [random, setRandom] = useState(Math.round(Math.random() * 10))
    const [gameInput, setGameInput] = useState("")
    const [res, setRes] = useState("")
    const [attempt, setAttemp] = useState(3)
    const [help, setHelp] = useState(3)
    const [won, setWon] = useState(localStorage.getItem('w',))
    const [lost, setLost] = useState(localStorage.getItem('l',))



    const clearAll = () => {
        alert('точно')
        setWon("")
        setLost("")
        setHelp("")
        setAttemp("")
        setRes("")
        setGameInput("")
        setRandom("")
    }


    const helping = (e) => {
        setHelp(e.target.checked)
    }


    const inputChange = (e) => {
        const n = Math.min(Math.max(e.target.value, 0), 10) || ""
        setGameInput(n)
    }
    const gameI = () => {

        if (+gameInput === random) {
            setRes("Вы выиграли")
            setAttemp(0)
            playNew()
            setWon(won + 1)
            localStorage.setItem("w", String(won + 1))
        } else {
            if (attempt - 1 === 0) {
                setRes("вы проиграли")
                setLost(lost + 1)
                localStorage.setItem("l", String(lost + 1))
            } else {
                if (help) {
                    setRes(gameInput > random ? "перебор" : "недобор")
                } else {
                    setRes("попробуйте еше раз")
                }
            }
            setAttemp(attempt - 1)
        }
        setGameInput("")
    }
    const playNew = () => {
        setRandom(Math.round(Math.random() * 10))
        setAttemp(3)
    }
    return (
        <div>
            <div className="bacground">
            <input className="input" value={gameInput} onChange={inputChange} type="number"/>
            {!!attempt && <button className="btn" disabled={!gameInput} onClick={gameI} type="button">Проверить</button>}
            {!attempt && <button className="btn" onClick={playNew} type="button">начать заново</button>}
            <span className="help"> Помочь? <input onChange={helping} type="checkbox"/>  </span>
            <br/>
            <div className="res">{res}</div>
            <br/>
            <div className="attemp">попытки{attempt}</div>

            <div className="won">победа:{won}</div>
            <div className="lost">поражение:{lost}</div>

            <button className="clear" onClick={clearAll}> очистить</button>
        </div>
        </div>
    );
};

export default GuesPlay;