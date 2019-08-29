import React, {useState} from 'react';
import './App.css';
import Clock from './Components/Clock';



const addDot = (obj) => {return obj.appName+"."}

function App() {
  const [purpose, setPurpose] = useState({appName: 'PwC Procedures', description: "PwC"})
  const [currentDay, setCurrentDay] = useState("Friday")
  
  console.log(currentDay);

  return (
    <div className="App">
      <header>
        <div>{addDot(purpose)}</div>
        <Clock time={currentDay}></Clock>
      </header>
    </div>
  );
}

export default App;
