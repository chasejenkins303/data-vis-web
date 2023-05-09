
// import './App.css';
import { useState } from 'react';
import JailData from './JailData'
import AfricanPopDenstiy from './AfricanPopDensity'
import PoliticalData from './PoliticalData'
import USMap from './USMap'
import UniSalaries from './UniSalaries'

function App() {
  const [active, setActive]= useState("")

  return (
    <div className="App">
      <nav className='buttons'>
        <button onClick={() => setActive("JailData")}>Jail Data</button>
        <button onClick={() => setActive("African Population Density")}>African Population Density</button>
        <button onClick={() => setActive("Political Ideology of Congress")}>Political Ideology of Congress</button>
        <button onClick={() => setActive("US Map")}>US Cities Population Density</button>
        <button onClick={() => setActive("Prof Salaries")}>Professor Salaries NC</button>


      </nav>
      <div className='present'>
        {active === "" && <section>Use the buttons at the top of the screen to navigate</section>}
        {active === "JailData" && <JailData/>}
        {active === "African Population Density" && <AfricanPopDenstiy/>}
        {active === "Political Ideology of Congress" && <PoliticalData/>}
        {active === "US Map" && <USMap/>}
        {active === "Prof Salaries" && <UniSalaries/>}
      </div>

    </div>
  );
}


export default App;
