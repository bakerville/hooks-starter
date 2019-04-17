import React, { useState,} from 'react';
import DishForm from './DishForm';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <div>
      {isToggled ? (<DishForm setToggle ={setToggle} />
    ) : (
      <button onClick={()=> setToggle(!isToggled) }>Toggle</button>
    )}     
    </div>
  );
};

export default Toggle;