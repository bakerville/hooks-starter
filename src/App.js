import React, { useState, useEffect, useRef, createContext, useMemo } from 'react';
import Toggle from './Toggle';
import Counter from './Counter';
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();



const App = () => {
  // general formula: const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  
  const reverseWord = word => {
    return word.split("").reverse().join("");
  }
 
  const title = "Level Up Dishes";

  const TitleReversed = useMemo(()=> reverseWord(name), [name]);

  return (
    <UserContext.Provider
      value ={{
        user: true
      }}
    >
      <div className="main-wrapper" ref = {ref}>
        <h1 onClick={()=> ref.current.classList.add('new-fake-class')}>{TitleReversed}</h1>
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
