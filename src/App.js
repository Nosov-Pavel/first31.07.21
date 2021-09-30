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

    const addNewCounter = () => {
        const newArr = [...counters, 0]
        setCounters(newArr)
        
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
                {counter === '' &&
                <button onClick={open}>OPEN</button>}
            </p>
            <hr/>

            {counters.map((el, index) =>
               <div key={index}>
                <button onClick={() => plusMinusButtonHandler(-1, index)}>-1</button>
                <span>{el}</span>
                   <button onClick={() => plusMinusButtonHandler(+1, index)}>+1</button>
                   <button onClick={() => reset1(index)}>RESET</button>
                   <button onClick={delete2}>DELETE</button>
               </div>
                )}
              <button>DELETE ALL</button>


            <button onClick={addNewCounter}>AddNewCounter</button>


        </div>
    );
}
export default App










