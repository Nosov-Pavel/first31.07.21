
import {useState} from "react";

function App(){
    const [count, setCount] = useState(5)

    const plusOne = (digit) => {
        setCount(count + digit)
    }
    const [counters, setCounters] = useState([1, 2, 3, ])

    const plusMinusButtonHandler = (digit, index) => {
        const newCounters = counters.map((el, ind) => ind === index ? el + digit : el)
        setCounters(newCounters)
    }

  return(
      <div>
        <h1>Use State</h1>

          <p>
              <button onClick={() => plusOne(-1)}> -1 </button>
              {count}
              <button onClick={() => plusOne(1)}> +1 </button>
          </p>

          <hr/>
          {counters.map((el, index) =>
          <div>
              <button onClick={() => plusMinusButtonHandler(-1, index)}> -1 </button>
              {el}
              <button onClick={() => plusMinusButtonHandler(+1, index)}> +1 </button>
          </div>
          )}
          <hr/>


       </div>
  );
}

export default App;












