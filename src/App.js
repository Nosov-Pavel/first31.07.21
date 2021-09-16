// import {useState} from "react";
//
// function App() {
//     const [counter, setCounter] = useState(1)
//
//     const mathAction = (digit) => {
//         setCounter(counter + digit)
//     }
//
//     const [counters, setCounters] = useState([1, 2, 3])
//
//     const plMinButtonHandler = () => {
//
//     }
//
//
//     return (
//         <div>
//             <h1>SetCounter</h1>
//             {counters.map((el, index) =>
//                 <div>
//                     <button onClick={() => plMinButtonHandler(-1, index)}>-1</button>
//                     {el}
//                     <button onClick={() => plMinButtonHandler(+1, index)}>+1</button>
//                 </div>
//             )}
//             <hr/>
//             <button onClick={() => mathAction(-1)}>-1</button>
//             {counter}
//             <button onClick={() => mathAction(+1)}>+1</button>
//
//         </div>
//     );
// }
//
// export default App

import {useState} from "react";

function App(){

    const [counter, setCounter] = useState(10)

    const mathAction = (digit) => {
        setCounter(counter + digit)

    }

    return(
        <div>
            <h1>SetCounter</h1>
            <button onClick={() => mathAction(-1)}>-1</button>
            {counter}
            <button onClick={() => mathAction(+1)}>+1</button>

        </div>
    );
}
export default App;









