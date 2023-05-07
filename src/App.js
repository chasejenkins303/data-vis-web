
// import './App.css';
import { useState } from 'react';
import JailData from './JailData'
import AfricanPopDenstiy from './AfricanPopDensity'

function App() {
  const [active, setActive]= useState("")

  return (
    <div className="App">
      <nav className='buttons'>
        <button onClick={() => setActive("JailData")}>Jail Data</button>
        <button onClick={() => setActive("African Population Density")}>African Population Density</button>
      </nav>
      <div>
        {active === "JailData" && <JailData/>}
        {active === "African Population Density" && <AfricanPopDenstiy/>}
      </div>

    </div>
  );
}


export default App;
