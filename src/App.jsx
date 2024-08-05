import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else if (counter === 20) {
      alert('Your max value 20 is reached');
    }
  }
  
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    } else if (counter === 0) {
      alert('Your min value is 0');
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <button
        onClick={addValue}
      >Add Value {counter}</button>
      <button
        onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
