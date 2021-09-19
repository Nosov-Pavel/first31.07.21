import {useState} from "react";

function App() {
    const initialCounter = [0, 0, 0];

    const [counters, setCounter] = useState(initialCounter)




    return (
        <div>
            <li>
            {counters.map(el => el)}
            </li>


        </div>
    );
}

export default App











