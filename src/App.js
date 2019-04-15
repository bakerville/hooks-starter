import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';

const App = () => {
  // general formula: const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');

  // if using a class to do this: componentdidmount and componentdidupdate would be needed
  useEffect(()=> {
    document.title = name;
  })


  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <form onSubmit= {e => {
        e.prevenetDefailt();        
      }}>
        <input type="text" onChange={e => setName(e.target.value)} value={name}/>
        <button>Submit</button>
      </form>
      
    </div>
  );
};




export default App;
