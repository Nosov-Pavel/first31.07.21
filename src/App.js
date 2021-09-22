import {useState} from "react";

function App(){
    const iCounters = [0, 0, 0];
    const [counters,setCounters] = useState(iCounters);

    const addCounter = () => {
        const newCounters = [...counters];
        newCounters.push(0)
        setCounters(newCounters)
    }
    const delCounter = (index) => {
        const newCounter = counters.filter((el, i) => i !== index)
        setCounters(newCounter)
    }

    return(
        <div>
            <button onClick={addCounter}>AddCounter</button>
            {counters.map((el, i) => <li>
            <button>+</button>
            {el}
            <button>-</button>
            </li>)}
            <button onClick={()=>delCounter(i)}>DEL</button>
        </div>
    );
}
export default App;










