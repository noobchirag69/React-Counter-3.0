import { useState } from 'react';
import { Button } from './components/Button';
import { PlusButton } from './components/PlusButton';
import { MinusButton } from './components/MinusButton';
import './styles/style.css';

function App() {
  // Initialize State with value 0
  const [count, setCount] = useState(0);
  // Function to count the button clicks
  function countClicks() {
    // Updating state
    setCount(count + 1);
  }

  // State for the second counter
  const [number, setNumber] = useState(0);
  // Function to increase number
  function plusNumber() {
    setNumber(number + 1);
  }
  // Function to decrease number
  function minusNumber() {
    setNumber(number - 1);
  }

  return (
    <div className="App">
      <h1>React Counter</h1>
      <Button count={count} onClick={countClicks} />
      <div className="box">
        <PlusButton onClick={plusNumber} />
        <h2> {number} </h2>
        <MinusButton onClick={minusNumber}/>
      </div>
    </div>
  );
}

export default App;
