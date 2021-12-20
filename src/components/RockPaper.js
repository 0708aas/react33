import React, {useState} from "react";
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'

const RockPaper = () => {

    const counterYou = JSON.parse(localStorage.getItem("youCounter"))
    const counterComp = JSON.parse(localStorage.getItem("compCounter"))

    const [result, setResult] = useState('')
    const [play, setPlay] = useState("")
    const [compPlay, setCompPlay] = useState("")
    const [decYou, setDecYou] = useState(counterYou)
    const [decComp, setDecComp] = useState(counterComp)

    const youPlayer = (playAct) => {
        const actions = [img1, img3, img2]
        const compAction = actions[Math.floor(Math.random() * 3)]

        if (compAction === playAct) {
            setResult('ничья')
        } else if (
            (playAct === img2 && compAction === img1)
            || (playAct === img1 && compAction === img3)
            || (playAct === img3 && compAction === img2)
        ) {
            setResult('вы выиграли')
            setDecYou(decYou + 1)
            localStorage.setItem("youCounter", JSON.stringify(decYou + 1))

        } else {
            setResult('вы проиграли')
            setDecComp(decComp + 1)
            localStorage.setItem("compCounter", JSON.stringify(decComp + 1))
        }


        setPlay(playAct)
        setCompPlay(compAction)
    }


    return (
        <div className='bg' >
            <button className="button" onClick={() => youPlayer(img1)} type="button">Камень</button>
            <button className="button"  onClick={() => youPlayer(img3)} type="button">Ножницы</button>
            <button className="button"  onClick={() => youPlayer(img2)} type="button">Бумага</button>

            <span> {result}</span>
            <span className="span"> you: {decYou}</span>
            <span className="span-1"> comp: {decComp}</span>


            <hr/>

            <div className="row">
                <span className="span-3">You:</span>
                <div className="col-6">
                    <img alt="log" className="img-log" src={play} />
                </div>
                <span className="span-3">Comp:</span>
                <div className="col-6">
                    <img alt="log" className="img-log" src={compPlay}/>
                </div>
            </div>

        </div>
    )
}

export default RockPaper