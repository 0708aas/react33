// import React, {useState} from "react";
// import { nanoid } from 'nanoid'
//
//
//
// function Todo() {
//     const arr = JSON.parse(localStorage.getItem("todo")) || []
//
//     const [value, setValue] = useState("")
//     const [todo, setTodo] = useState(arr)
//
//     const change = (e) => {
//         setValue(e.target.value)
//
//     }
//
//     const list = () => {
//         const newTodo = {
//             value,
//             id : nanoid()
//         }
//         if(value.trim()){
//             setTodo([...todo, newTodo])
//             localStorage.setItem("todo",JSON.stringify([...todo, newTodo]))
//         }
//         setValue("")
//     }
//
//
//
//
//
//     return (
//         <div>
//
//             <input value={value} onChange={change} type="text"/>
//
//             <button onClick={list} type="button">add</button>
//
//             <hr/>
//
//             <ul>
//                 {todo.map(it => {
//                     return <li>{it.value}</li>
//                 })}
//             </ul>
//
//
//         </div>
//     );
// }
//
// export default Todo;