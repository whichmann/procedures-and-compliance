import React from 'react';
import './App.css';
import hello from './Components/Hello';

const me = {
  name: "PwC Procedures",
  occupation: "PwC"
}

const capitalizeName = (obj) => {return obj.name+"."}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{"Hello" + 2+2}</div>
        <div>{capitalizeName(me)}</div>
      </header>
    </div>
  );
}

export default App;
