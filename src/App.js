import {useState} from "react";

function App(){
    const inicialCounters = [0, 0, 0];
    const [counters,setCounters] = useState(inicialCounters);

    const addCounter = () => {
        const newCounters = [...counters];
        newCounters.push(0)
        setCounters(newCounters)

    }

    return(
        <div>
            <button onClick={addCounter}>AddCounter</button>
            {counters.map(el => <li>
            <button>+</button>
            {el}
            <button>-</button>
            </li>)}
        </div>
    );
}
export default App;










