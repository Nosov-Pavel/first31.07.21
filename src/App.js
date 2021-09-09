function App(){
  let number = 5;
  const plusOne = () => {
    number = number + 1;

  }
  return(
      <div>
        <h1>Use State</h1>

        <p>{number}</p>
        <button onClick={plusOne}>+1</button>

      </div>
  );
}
export default App;