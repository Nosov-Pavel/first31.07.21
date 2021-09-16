import {useState} from "react";

function App(){
    const [counter, setCounter] = useState(1);

    const mathAction = (digit) => {
        setCounter(counter + digit)
        
    }



  return(
      <div>
          <h1>UseState</h1>
          <button onClick={() => mathAction(-1)}>-1</button>
          {counter}
          <button onClick={() => mathAction(+1)}>+1</button>

       </div>
  );
}

export default App;












