import './App.css';
import {useState} from "react";

function App(){

    const [counter, setCounter] = useState(0);
    const matchAction = (digit) => {
        setCounter(counter + digit)
    }
    const reset = (digit) => {
        setCounter(counter - counter)
    }
    const delete1 = () => {
        setCounter('')
    }
    const open = () => {
        setCounter(0)

    }

    const [counters, setCounters] = useState([0, 0, 0])

    const plusMinusButtonHandler = (digit,index) => {
        const newCounters = counters.map((el, ind) => ind === index ? el + digit : el)
    }

    const reset1 = (index) => {
        const newCounters = counters.map((el, ind) => ind === index ? 0 : el)
        setCounters(newCounters)
    }

    function delete2(){
        const newCounters = counters.map((el, ind) => null)
        setCounters(newCounters)
    }

    return(
        <div className="App">
            <h1>Use State</h1>
            <p>
                { counter !== '' && <span>
                <button onClick={() => matchAction(-1)}>-1</button>
                <span>{counter}</span>
                <button onClick={() => matchAction(+1)}>+1</button>
                <button onClick={reset}>RESET</button>
                <button onClick={delete1}>Delete</button>
                    </span>}
                <button onClick={open}>OPEN</button>
            </p>
            <hr/>

        </div>
    );
}
export default App










