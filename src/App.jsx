import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const InputName = ({ name, onNameChange }) => {
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => onNameChange(e.target.value)}
      placeholder="Wpisz swoje imię"
    />
  );
};

const Counter = ({count, setCount}) => {
  return (
    <>
    <p />
    <button type="text" onClick={() => setCount(count + 1)} >
      Kliknij mnie
    </button>
    <br />
    <button type="text" onClick={() => setCount(count = 0)} >
       Resetuj licznik
    </button>
    </>
  );
};

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');
  return (
    <>
      <div>
           <InputName name={name} onNameChange={setName} />
           <Counter count={count} setCount={setCount} />
           <p>Cześć, {name}! Kliknąłeś już {count} razy.”</p>
      </div>
      
    </>
  )
}

export default App
