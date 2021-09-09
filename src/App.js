import {useState} from "react";

function App(){
    const [count, setCount] = useState(5)

    const plusOne = (digit) => {
        setCount(count + digit)
    }

  return(
      <div>
        <h1>Use State</h1>

          <p><button onClick={() => plusOne(-1)}> -1 </button>
          {count}
          <button onClick={() => plusOne(1)}> +1 </button>
              </p>

      </div>
  );
}

export default App;
