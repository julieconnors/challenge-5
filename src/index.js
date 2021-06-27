import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function App() {

  const [num1, setNum] = useState(0)
  const [num2, setNum2] = useState(0)

  const [total, setTotal] = useState(0)


  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input onChange={() => setNum(num1 + 1)} type="number" placeholder="0" />
        <input onChange={() => setNum2(num2 + 1)} type="number" placeholder="0" />
      </div>

      <button onClick={() => setTotal(num1 + num2)}>Add Them!</button>

      <h2>{total}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
