import {useState} from "react";

function App(){

    const [counter, setCounter] = useState(0);
    const matchAction = (digit) => {
        setCounter(counter + digit)
    }
    const reset = (digit) => {
        setCounter(counter - counter)
    }

    return(
        <div className="App">
            <h1>Use State</h1>
            <p>
                <button onClick={() => matchAction(-1)}>-1</button>
                <span>{counter}</span>
                <button onClick={() => matchAction(+1)}>+1</button>
            </p>

        </div>
    );
}
export default App










