import React, { useState, useEffect, useRef, createContext } from 'react';
import Toggle from './Toggle';
import Counter from './Counter';
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();



const App = () => {
  // general formula: const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput('');

  const ref = useRef();
  console.log('ref:', ref.current);
 
  return (
    <UserContext.Provider
      value ={{
        user: true
      }}
    >
      <div className="main-wrapper" ref = {ref}>
        <h1 onClick={()=> ref.current.classList.add('new-fake-class')}>Level Up Dishes</h1>
        <Toggle />
        <Counter/>
        <form onSubmit= {e => {
        e.prevenetDefailt();        
        }}>
          <input type="text" onChange={e => setName(e.target.value)} value={name}/>
          <button>Submit</button>
        </form>      
      </div>
    </UserContext.Provider>
    
  );
};


export default App;
