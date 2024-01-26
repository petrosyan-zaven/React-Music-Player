import { useState } from "react";
import './buttons.css'


function Buttons(icon,val) {
  const [select, setSelect] = useState("All");
  const handlePlay =  (e) => {
    console.log(e.target.textContent);
   }

  return (
    <div className="buttons">
      
      <button onClick={(e)=>handlePlay(e)}>
        <span>{icon}</span>
        {val} {select}
      </button>
      <select
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value=""></option>
        <option value="all">All</option>
        <option value="liked">Liked</option>
      </select>
    </div>
  );
}

export default Buttons;
